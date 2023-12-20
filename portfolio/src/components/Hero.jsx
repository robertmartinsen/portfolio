import React, { useState, useEffect } from "react"
import NavBar from "./Navbar"
import Cubes from "./patterns/Cubes"
import { Link as ScrollLink } from "react-scroll"
import { Typewriter } from "react-simple-typewriter"
import classes from "../styles/components/Hero.module.scss"
import profile from "../components/assets/profile.png"
import BlobSVG from "./patterns/Blob"

function Hero() {
  const [showH2, setShowH2] = useState(false)
  const [showH3, setShowH3] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const h2Timeout = setTimeout(() => {
      setShowH2(true)
    }, 1250)

    const h3Timeout = setTimeout(() => {
      setShowH3(true)
    }, 2250)

    const buttonsTimeout = setTimeout(() => {
      setShowButtons(true)
    }, 2500)

    return () => {
      clearTimeout(h2Timeout)
      clearTimeout(h3Timeout)
      clearTimeout(buttonsTimeout)
    }
  }, [])

  return (
    <section id="home" className={classes.hero}>
      <NavBar />
      <Cubes />
      <div
        className={`container col-lg-11 col-xl-8 col-md-10 col-11 ${classes.contentContainer}`}
      >
        <div className={`container row ${classes.content}`}>
          <div className={` col ${classes.introText}`}>
            <h1 className={classes.h1}>
              <Typewriter words={["HELLO, MY NAME IS"]} typeSpeed={35} />
            </h1>
            {showH2 && (
              <h2 className={classes.h2}>
                <Typewriter words={["ROBERT MARTINSEN"]} typeSpeed={35} />
              </h2>
            )}
            {showH3 && (
              <h3
                className={`${classes.h3} ${classes.fadeIn} ${classes.slideLeft}`}
              >
                I'M A FRONT-END DEVELOPER
              </h3>
            )}
          </div>

          <div className={classes.btnContainer}>
            {showButtons && (
              <>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={50}
                  className={`${classes.hireBtn} ${classes.slideUp}`}
                >
                  HIRE ME
                </ScrollLink>

                <ScrollLink
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={100}
                  className={`${classes.portfolioBtn} ${classes.slideUp}`}
                >
                  VIEW PORTFOLIO
                </ScrollLink>
              </>
            )}
          </div>
        </div>
        <div className={`col ${classes.profilePicContainer}`}>
          <div className={classes.profileWrapper}>
            <img
              className={classes.profilePic}
              src={profile}
              alt="profile pic"
            />
            <div className={classes.blob}>
              <BlobSVG />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
