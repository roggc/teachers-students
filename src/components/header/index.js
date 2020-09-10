import React from 'react'
import * as classes from './index.module.css'
import {Link} from 'react-router-dom'

const Header=props=>
<nav className={classes.round+" navbar navbar-expand-lg navbar-light bg-light"}>
  <Link className="navbar-brand" to="/">Student Teacher App</Link>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" 
        to="/students">Students</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/teachers">Teachers</Link>
      </li>
    </ul>

  </div>
</nav>

export default Header