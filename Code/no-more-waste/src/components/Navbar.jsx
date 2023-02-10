import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";
import Logo from "../images/noMoreWasteLogo.svg";
//import sprite from "../images/sprite.svg#menu";

const navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <header>
      <nav class="nav collapsible">
        <p class="nav__brand">
          <Link to="/">
            <img class="logo-class" src={Logo} alt="" />
          </Link>
        </p>
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
            {currentUser && currentUser.role ==='b' ? (
              <Link to="/track">My Posts</Link>
            ) : (
              <Link></Link>
            )}
            {currentUser && currentUser.role ==='s' ? (
              <Link to="/track">My requests</Link>
            ) : (
              <Link></Link>
            )}
            {currentUser && currentUser.role ==='v' ? (
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
      </nav>
    </header>
  );
};

export default navbar;
