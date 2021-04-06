import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  // function toBlack () {
  //   this.setState({
  //     bgColor: 'blue'
  //   })
  // }


  return <div className="nav-div">
    <button className="nav-buttons" id="about-nav-button"><Link to={'/about-me/'}><p className="nav-text">ABOUT ME</p></Link></button>
    <button className="nav-buttons" id="web-nav-button"><Link to={'/web-development/'}><p className="nav-text">WEB DEVELOPMENT</p></Link></button>
    <button className="nav-buttons" id="ad-nav-button"><Link to={'/advertising/'}><p className="nav-text">ADVERTISING</p></Link></button>
  </div>
}