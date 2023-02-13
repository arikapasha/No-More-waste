import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";
import Logo from "../images/noMoreWasteLogo.svg";
import menu from "../images/menu-nowaste.svg";
import "../styles.css";
//import sprite from "../images/sprite.svg#menu";

const NavBar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className={`nav ${isOpen ? "active" : ""}`}>
        <p class="nav__brand">
          <Link to="/">
            <img class="logo-class" src={Logo} alt="" />
          </Link>
        </p>
        <button
          class="icon-menu icon--white nav__toggler"
          src={menu}
          alt=""
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <img class="" src={menu} alt="" />
          ) : (
            <img class="" src={menu} alt="" />
          )}
        </button>
        {/* <svg class="icon icon--white nav__toggler">
          <use href={sprite}></use>
        </svg> */}
        <ul class="list nav__list collapsible__content">
          <li class="nav__item">
            {currentUser ? (
              <Link to="/profile/2?cat=profile">
                {currentUser.businessname}
              </Link>
            ) : (
              <Link></Link>
            )}
          </li>
          <li class="nav__item">
            {currentUser ? (
              <Link to="/profile/2?cat=profile">Profile</Link>
            ) : (
              <Link></Link>
            )}
          </li>
          <li class="nav__item">
            {currentUser && currentUser.role === "b" ? (
              <Link to="/track">My Posts</Link>
            ) : (
              <Link></Link>
            )}
            {currentUser && currentUser.role === "s" ? (
              <Link to="/track">My Requests</Link>
            ) : (
              <Link></Link>
            )}
            {currentUser && currentUser.role === "v" ? (
              <Link to="/track">My Deliveries</Link>
            ) : (
              <Link></Link>
            )}
          </li>
          <li class="nav__item">
            <Link to="/about">About Us</Link>
          </li>
          <li class="nav__item">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li class="nav__item">
            {currentUser ? (
              <Link to="/login" onClick={logout}>
                Log Out
              </Link>
            ) : (
              <Link></Link>
            )}
          </li>
        </ul>
        <div class="collapsed-menu">
          <ul class="hidden-collapsible">
            <li class="nav__item menu-item">
              {currentUser ? (
                <Link to="/profile/2?cat=profile">
                  {currentUser.businessname}
                </Link>
              ) : (
                <Link></Link>
              )}
            </li>
            <li class="nav__item menu-item">
              {currentUser ? (
                <Link to="/profile/2?cat=profile">Profile</Link>
              ) : (
                <Link></Link>
              )}
            </li>
            <li class="nav__item menu-item">
              {currentUser && currentUser.role === "b" ? (
                <Link to="/track">My Posts</Link>
              ) : (
                <Link></Link>
              )}
              {currentUser && currentUser.role === "s" ? (
                <Link to="/track">My Requests</Link>
              ) : (
                <Link></Link>
              )}
              {currentUser && currentUser.role === "v" ? (
                <Link to="/track">My Deliveries</Link>
              ) : (
                <Link></Link>
              )}
            </li>
            <li class="nav__item menu-item">
              <Link to="/about">About Us</Link>
            </li>
            <li class="nav__item">
              <Link to="/contact">Contact Us</Link>
            </li>

            <li class="nav__item menu-item">
              {currentUser ? (
                <Link to="/login" onClick={logout}>
                  Log Out
                </Link>
              ) : (
                <Link></Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
