import React, { useRef, useState } from "react";
import "./ContactForm.css";

export const Contact = () => {
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState({ submitted: false, message: "", error: false });
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submission
  const Submit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formElement = formRef.current;
    const submitFormData = new FormData(formElement);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxKSI_zezDVwseRUnFw2YSXTkeNgpC9s-zyDVsjJJNkOrN0SZxyBElMUqFi2ye7121n2Q/exec",
        {
          method: "POST",
          body: submitFormData,
        }
      );
      console.log(response.status);
      // Check if response is ok
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        // Clear form data on successful submission
        setFormData({
          Name: "",
          Email: "",
          Message: "",
        });

        // Show success message
        setFormStatus({
          submitted: true,
          message: "Form successfully submitted!",
          error: false,
        });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.log("There was a problem with the fetch operation:", error);

      // Show error message
      setFormStatus({
        submitted: true,
        message: "There was an issue submitting the form. Please try again.",
        error: true,
      });
    }
  };

  return (
    <div className="Contact">
      <h1>Contact Us</h1>
      <div>
        {/* Show success/error message after submission */}
        {formStatus.submitted && (
          <p className={formStatus.error ? "error-message" : "success-message"}>
            {formStatus.message}
          </p>
        )}

        <form ref={formRef} className="form" onSubmit={Submit}>
          <input
            placeholder="Your Name"
            name="Name"
            type="text"
            pattern="[A-Za-z ]{2,30}"
            title="Name should only contain alphabets and spaces, and should be 2-30 characters long."
            value={formData.Name}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Your Email"
            name="Email"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address, e.g. example@mail.com."
            value={formData.Email}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Your Message"
            name="Message"
            minLength={10}
            maxLength={500}
            title="Message should be between 10 to 500 characters."
            value={formData.Message}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
