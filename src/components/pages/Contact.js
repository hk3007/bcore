import React, { useRef } from 'react';
import './ContactForm.css';

export const Contact = () => {
  const formRef = useRef(null);

  const Submit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const formEle = formRef.current;
    const formData = new FormData(formEle);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxKSI_zezDVwseRUnFw2YSXTkeNgpC9s-zyDVsjJJNkOrN0SZxyBElMUqFi2ye7121n2Q/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      // Check if response is ok
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        formEle.reset(); // Reset form after successful submission

        // Refresh the page after form submission
        window.location.reload();
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.log('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="Contact">
      <h1>Contact Us</h1>
      <div>
        <form ref={formRef} className="form" onSubmit={Submit}>
          <input
            placeholder="Your Name"
            name="Name"
            type="text"
            pattern="[A-Za-z ]+"
            title="Name should only contain alphabets"
            required
          />
          <input
            placeholder="Your Email"
            name="Email"
            type="email"
            title="Please enter a valid email address"
            required
          />
          <input
            placeholder="Your Message"
            name="Message"
            type="text"
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
