import React from "react";

function Contact() {
    const queryParams = new URLSearchParams(window.location.search);
    const method = queryParams.get('method');
    return (
     <div className="container">
        <h1>Contact</h1>
        <p>This method is {method}</p>
    </div>
  );
}

export default Contact;