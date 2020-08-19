import React from "react";
import allIsWell from "../../asset/png/all-is-well.png";
// import homeSvg from "../../asset/svgs/home.svg";
// import aboutSvg from "../../asset/svgs/about.svg";
// import serviceSvg from "../../asset/svgs/service.svg";
// import portfolioSvg from "../../asset/svgs/portfolio.svg";
// import blogSvg from "../../asset/svgs/blog.svg";
// import contactSvg from "../../asset/svgs/contact.svg";

function Nav({ setSection, section }) {
  const activeSection = (name) => {
    setSection(name);
  };
  return (
    <nav id="nav">
      <img src={allIsWell} alt="all is well" className="logo" />
      <ul className="nav-menu">
        <li className="menu-item">
          <a
            className={section === "home" || section === "" ? "active-nav" : ""}
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              activeSection("home");
            }}
          >
            <i className="nav-icon fas fa-home"></i>
            Home
          </a>
        </li>
        <li className="menu-item">
          <a
            className={section === "about" ? "active-nav" : ""}
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              activeSection("about");
            }}
          >
            <i className="nav-icon fas fa-user-alt"></i>
            About
          </a>
        </li>
        <li className="menu-item">
          <a
            className={section === "service" ? "active-nav" : ""}
            href="#service"
            onClick={(e) => {
              e.preventDefault();
              activeSection("service");
            }}
          >
            <i className="nav-icon fas fa-cogs"></i>
            Service
          </a>
        </li>
        <li className="menu-item">
          <a
            className={section === "portfolio" ? "active-nav" : ""}
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              activeSection("portfolio");
            }}
          >
            <i className="nav-icon fas fa-briefcase"></i>
            Portfolio
          </a>
        </li>
        <li className="menu-item">
          <a
            className={section === "blog" ? "active-nav" : ""}
            href="#blog"
            onClick={(e) => {
              e.preventDefault();
              activeSection("blog");
            }}
          >
            <i className="nav-icon fas fa-comment-dots"></i>
            Blog
          </a>
        </li>
        <li className="menu-item">
          <a
            className={section === "contact" ? "active-nav" : ""}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              activeSection("contact");
            }}
          >
            <i className="nav-icon fas fa-id-card"></i>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
