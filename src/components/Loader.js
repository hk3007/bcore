import React, { useEffect, useState } from "react";
import "./loader.css";
import imagePath from "../pages/Images/BCORE Logo.png";

export const Loader = () => {
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHideLoader(true), 4200);
    return () => clearTimeout(timer);
  }, []);

  return (
    !hideLoader && (<div className="loader">

      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

    <div className="logo-box">

      <div className="logo-scan-wrap">
        <img src={imagePath} alt="Loading..." className="loader-logo" />
        <div className="scan-line"></div>
      </div>

      <p className="tagline">
        Building the Future of Olympic & Sports Science
      </p>

      <div className="progress-bar">
        <div></div>
      </div>

    </div>

    </div>

    )
  );
};
