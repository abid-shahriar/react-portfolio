import React from "react";
import myPic from "../../../asset/img/me-2.jpg";

function Home() {
  return (
    <div className="section home" id="home">
      <div className="home__img">
        <img src={myPic} alt="abid shahriar" />
      </div>
      <div className="home__desc">
        <h3>
          Hello, I am Abid Shahriar. I am a web designer and a front-end web
          developer.
        </h3>
      </div>
      <div className="home__social-links">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram-square"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github-square"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;
