import React, { useState } from "react";
import lightImage from "../../../img/sun.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

const SwitchDark = () => {
  const [isDark, setIsDark] = useState(false);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "dark");
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("light");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "light");
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
      setIsDark(true);
    }
  };

  return (
    <label className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}>
      <input
        type="checkbox"
        onClick={handleLabelClick}
        className="theme-switcher"
      />
      <div className="switch-handle">
        <span className="light-text">
          <img src={lightImage} alt="swicher" className="filter_1" width="24" height="24" />
        </span>
        <span className="dark-text">
          <i aria-hidden="true"><FontAwesomeIcon icon={faMoon} /></i>
        </span>
      </div>
    </label>
  );
};

export default SwitchDark;
