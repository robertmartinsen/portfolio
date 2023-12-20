import React, { useState, useEffect, useRef } from "react"
import { Link as ScrollLink, Events } from "react-scroll"
import classes from "../styles/components/AlternateNavbar.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import logo from "./assets/logo.svg"

function AlternateNavbar({ isVisible }) {
  const [activeSection, setActiveSection] = useState("")
  const [showSidebar, setShowSidebar] = useState(false)
  const sidebarRef = useRef(null)
  const [showNavbar, setShowNavbar] = useState(false)

  const toggleSidebar = () => setShowSidebar(!showSidebar)

  const handleSetActive = (to) => {
    setActiveSection(to)
  }

  useEffect(() => {
    if (isVisible) {
      setShowNavbar(true)
    } else {
      setShowNavbar(false)
    }
  }, [isVisible])

  const closeSidebar = () => setShowSidebar(false)

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {})
    Events.scrollEvent.register("end", (to, element) => {})

    return () => {
      Events.scrollEvent.remove("begin")
      Events.scrollEvent.remove("end")
    }
  }, [])

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

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={`${classes.navBody} ${
        showNavbar ? classes.fadeIn : classes.fadeOut
      }`}
    >
      <nav className={`${classes.navbar}`}>
        <div className={`${classes.navbarContent}`}>
          <div className="container col-lg-11 col-xl-8 col-md-10 col-11 d-flex">
            <div className={classes.logo}>
              <img src={logo} alt="Logo" />
            </div>

            <button className={classes.toggleButton} onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faBars} className="text-white" />
            </button>

            <div
              className={`${classes.sidebar} ${
                showSidebar ? classes.show : ""
              }`}
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
          </div>
        </div>
      </nav>
    </div>
  )
}

export default AlternateNavbar
