import React, { useState } from "react";
import "./Contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.png" alt="" />
      </div>
      <div className="right">
        <h2>contact.</h2>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
        {message && <span>Thanks, I'll reply ASAP.</span>}
      </div>
    </div>
  );
}
