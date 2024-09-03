import React from "react";
function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/services">Services</a>
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

// Navigation.defaultProps = {
//   title: "Navigation",
// };

export default Navigation;