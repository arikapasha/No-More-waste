import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";
import Logo from "../images/noMoreWasteLogo.svg";

const navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <header>
      <nav class="nav collapsible">
        <p class="nav__brand">
          <Link to="/">
            <img class="logo-class" src={Logo} />
          </Link>
        </p>
        <svg class="icon icon--white nav__toggler">
          <use href="images/sprite.svg#menu"></use>
        </svg>
        <ul class="list nav__list collapsible__content">
          <li class="nav__item">
            {currentUser ? <Link>{currentUser.businessname}</Link> : <Link></Link>}
          </li>
          <li class="nav__item">
            <Link to="/profile/2?cat=profile">Profile</Link>
          </li>
          <li class="nav__item">
            <Link to="/track/2?cat=track">Track Requests</Link>
          </li>
          <li class="nav__item">
            <Link to="/support">Support</Link>
          </li>
          
            <li  class="nav__item">
              <Link to="/login" onClick={logout}>Log Out</Link>
            </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default navbar;
