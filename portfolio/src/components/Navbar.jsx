import React, { useState, useEffect, useRef } from "react"
import { Link as ScrollLink, Events } from "react-scroll"
import classes from "../styles/components/Navbar.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import logo1 from "./assets/logo-a.svg"

function NavBar() {
  const [activeSection, setActiveSection] = useState("")
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => setShowSidebar(!showSidebar)

  const handleSetActive = (to) => {
    setActiveSection(to)
  }

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {})
    Events.scrollEvent.register("end", (to, element) => {})

    return () => {
      Events.scrollEvent.remove("begin")
      Events.scrollEvent.remove("end")
    }
  }, [])

  const closeSidebar = () => setShowSidebar(false)

  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  return (
    <nav
      className={`container col-lg-10 col-xl-8 col-md-10 col-11 ${classes.navbar}`}
    >
      <div className={classes.logo}>
        <img src={logo1} alt="Logo" />
      </div>

      <button className={classes.toggleButton} onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} className="text-white" />
      </button>

      <div
        className={`${classes.sidebar} ${showSidebar ? classes.show : ""}`}
        ref={sidebarRef}
      >
        <button className={classes.closeButton} onClick={closeSidebar}>
          <FontAwesomeIcon icon={faTimes} className="text-white" />
        </button>
        <ul className={classes.sidebarLinks}>
          <li>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={100}
              onSetActive={handleSetActive}
              className={`${classes.navLink} ${
                activeSection === "home" ? classes.activeNavLink : ""
              }`}
              onClick={toggleSidebar}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={100}
              onSetActive={handleSetActive}
              className={`${classes.navLink} ${
                activeSection === "about" ? classes.activeNavLink : ""
              }`}
              onClick={toggleSidebar}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="portfolio"
              spy={true}
              smooth={true}
              duration={100}
              onSetActive={handleSetActive}
              className={`${classes.navLink} ${
                activeSection === "portfolio" ? classes.activeNavLink : ""
              }`}
              onClick={toggleSidebar}
            >
              Portfolio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={100}
              onSetActive={handleSetActive}
              className={`${classes.navLink} ${
                activeSection === "contact" ? classes.activeNavLink : ""
              }`}
              onClick={toggleSidebar}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
      <div className={classes.navLinks}>
        <li>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            duration={100}
            onSetActive={handleSetActive}
            className={`${classes.navLink} ${
              activeSection === "home" ? classes.activeNavLink : ""
            }`}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={100}
            onSetActive={handleSetActive}
            className={`${classes.navLink} ${
              activeSection === "about" ? classes.activeNavLink : ""
            }`}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="portfolio"
            spy={true}
            smooth={true}
            duration={100}
            onSetActive={handleSetActive}
            className={`${classes.navLink} ${
              activeSection === "portfolio" ? classes.activeNavLink : ""
            }`}
          >
            Portfolio
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={100}
            onSetActive={handleSetActive}
            className={`${classes.navLink} ${
              activeSection === "contact" ? classes.activeNavLink : ""
            }`}
          >
            Contact
          </ScrollLink>
        </li>
      </div>
    </nav>
  )
}

export default NavBar
