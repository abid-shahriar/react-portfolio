import React from "react";
import allIsWell from "../../asset/png/all-is-well.png";
import { Link, withRouter } from "react-router-dom";

function Nav(props) {
  let locationPath = props.location.pathname;

  const navItems = [
    {
      id: 1,
      name: "home",
      icon: "nav-icon fas fa-home",
      to: "/",
    },
    {
      id: 2,
      name: "about",
      icon: "nav-icon fas fa-user-alt",
      to: "/about",
    },
    {
      id: 3,
      name: "service",
      icon: "nav-icon fas fa-cogs",
      to: "/service",
    },
    {
      id: 4,
      name: "portfolio",
      icon: "nav-icon fas fa-briefcase",
      to: "/portfolio",
    },
    {
      id: 5,
      name: "blog",
      icon: "nav-icon fas fa-comment-dots",
      to: "/blog",
    },
    {
      id: 6,
      name: "contact",
      icon: "nav-icon fas fa-id-card",
      to: "/contact",
    },
  ];

  return (
    <nav id="nav">
      <div className="logo-wrapper">
        <img src={allIsWell} alt="all is well" className="logo" />
      </div>

      <ul className="nav-menu">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.to}
              className={locationPath === item.to ? "active-nav" : ""}
            >
              <i className={item.icon}></i>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default withRouter(Nav);
