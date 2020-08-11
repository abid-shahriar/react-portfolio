import React from "react";
import homeSvg from "../../asset/svgs/home.svg";
import aboutSvg from "../../asset/svgs/about.svg";
import serviceSvg from "../../asset/svgs/service.svg";
import portfolioSvg from "../../asset/svgs/portfolio.svg";
import blogSvg from "../../asset/svgs/blog.svg";
import contactSvg from "../../asset/svgs/contact.svg";

function Nav({ setSection }) {
  const activeSection = (name) => {
    setSection(name);
  };
  return (
    <nav id="nav">
      <h1 className="title">Hello there..!!</h1>
      <ul className="nav-menu">
        <li className="menu-item">
          <p
            onClick={() => {
              activeSection("home");
            }}
          >
            <img src={homeSvg} alt="Home Logo" />
            Home
          </p>
        </li>
        <li className="menu-item">
          <p
            onClick={() => {
              activeSection("about");
            }}
          >
            <img src={aboutSvg} alt="" />
            About
          </p>
        </li>
        <li className="menu-item">
          <p
            onClick={() => {
              activeSection("service");
            }}
          >
            <img src={serviceSvg} alt="" />
            Service
          </p>
        </li>
        <li className="menu-item">
          <p
            onClick={() => {
              activeSection("portfolio");
            }}
          >
            <img src={portfolioSvg} alt="" />
            Portfolio
          </p>
        </li>
        <li className="menu-item">
          <p
            onClick={() => {
              activeSection("blog");
            }}
          >
            <img src={blogSvg} alt="" />
            Blog
          </p>
        </li>
        <li className="menu-item">
          <p
            onClick={() => {
              activeSection("contact");
            }}
          >
            <img src={contactSvg} alt="" />
            Contact
          </p>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
