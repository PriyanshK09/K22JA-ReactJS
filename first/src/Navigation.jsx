import React from "react";
import "./Navigation.css";
// Usage of props
function Navigation(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">{props.home}</a>
          </li>
          <li>
            <a href="/about">{props.about}</a>
          </li>
          <li>
            <a href="/contact">{props.contact}</a>
          </li>
          <li>
            <a href="/services">{props.services}</a>
          </li>
          <li>
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// Default props
Navigation.defaultProps = {
  home: "Home",
  about: "About",
  contact: "Contact",
  services: "Services",
};

// Navigation.defaultProps = {
//   title: "Navigation",
// };

export default Navigation;