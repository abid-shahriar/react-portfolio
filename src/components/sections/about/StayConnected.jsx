import React from "react";
import { Link } from "react-router-dom";

function StayConnected() {
  return (
    <div className="stay-connected">
      <h3>Stay Connected...</h3>
      <div className="social-links">
        <div id="fb">
          <a href="https://facebook.com/abid.sh.akash">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        <div id="insta">
          <a href="https://instagram.com/find.abid">
            <i className="fab fa-instagram-square"></i>
          </a>
        </div>
        <div id="ln">
          <a href="https://linkedin.com/in/abidshahriar/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div id="gh">
          <a href="https://github.com/abid-shahriar">
            <i className="fab fa-github-square"></i>
          </a>
        </div>
      </div>
      <p className="or">Or</p>
      <div className="send-message">
        <Link to="/contact">Send a Direct Message</Link>
      </div>
    </div>
  );
}

export default StayConnected;
