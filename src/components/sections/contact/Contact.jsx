import React from "react";
import Title from "../globals/Title";

function Contact() {
  return (
    <div className="section contact">
      <div className="section-wrapper">
        <Title title="send me a message" />
        <div className="contact-form">
          <form name="port-contact" method="post" autoComplete="off">
            <input type="hidden" name="form-name" value="port-contact" />

            <div className="name-box">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="name" required />
            </div>

            <div className="email-box">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" required />
            </div>

            <div className="message-box">
              <label htmlFor="message">Your message...</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="your message..."
                required
              ></textarea>
            </div>
            <div className="submit-and-email">
              <button type="submit">Send Message</button>
              <span>or</span>
              <a href="mailto: abidshahriar7@gmail.com">Send an Email</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
