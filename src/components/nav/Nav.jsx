import React from "react";
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
      name: "skills",
      icon: "nav-icon fas fa-cogs",
      to: "/skills",
    },
    {
      id: 4,
      name: "projects",
      icon: "nav-icon fas fa-briefcase",
      to: "/projects",
    },
    {
      id: 5,
      name: "blogs",
      icon: "nav-icon fas fa-comment-dots",
      to: "/blogs",
    },
    {
      id: 6,
      name: "contact",
      icon: "nav-icon fas fa-id-card",
      to: "/contact",
    },
  ];

  const handelToggle = (e) => {
    props.setToggle(!props.Toggle);
  }

  return (
    <nav id="nav" className={props.Toggle ? 'toggle nav' : 'nav'}>
      <div className='toggle-btn' onClick={handelToggle}><i className="fas fa-sort-up"></i></div>
      <div className="logo-wrapper">
        <p>Abid Sh</p>
      </div>

      <ul className="nav-menu">
        {navItems.map((item) => (
          <li
            className={locationPath === item.to ? "active-nav" : ""}
            key={item.id}
          >
            <Link to={item.to} >
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
