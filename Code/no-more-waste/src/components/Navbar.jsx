import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/noMoreWasteLogo.svg"

const navbar = () => {
  return (
    
<header>
  <nav class="nav collapsible">
    <p class="nav__brand"><Link to="/"><img class="logo-class" src={Logo}/></Link></p>
    <svg class="icon icon--white nav__toggler">
      <use href="images/sprite.svg#menu"></use>
    </svg>
    <ul class="list nav__list collapsible__content">
      <span class="nav__item">Name</span>
      <li class="nav__item"><Link to ="/?cat=profile">Profile</Link></li>
      <li class="nav__item"><Link to ="/?cat=track">Track Requests</Link></li>
      <li class="nav__item"><Link to ="/support">Support</Link></li>
      <span class="nav__item">Log Out</span>
    </ul>
  </nav>
</header>

  )
}

export default navbar