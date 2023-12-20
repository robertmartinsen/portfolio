import React, { useRef, useEffect } from "react"
import portfolio1 from "../components/assets/portfolio1.png"
import portfolio2 from "../components/assets/portfolio2.png"
import portfolio3 from "../components/assets/portfolio3.png"
import github from "../components/assets/github.svg"
import web from "../components/assets/web.svg"
import classes from "../styles/components/PortfolioList.module.scss"

function PortfolioList() {
  const portfolioRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      const portfolioSection = portfolioRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      if (
        portfolioSection.top < windowHeight * 0.7 &&
        portfolioSection.bottom >= 0
      ) {
        portfolioRef.current.classList.add(classes.visible)
      } else {
        portfolioRef.current.classList.remove(classes.visible)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`pt-5 ${classes.portfolioContainer} ${classes.fadeIn}`}
      ref={portfolioRef}
    >
      <div className="row">
        {/* First Card */}
        <div
          className={`col-sm-12 col-md-6 col-lg-4 mb-4  ${classes.portfolioCard}`}
        >
          <div className={classes.boxImg}>
            <img
              className={`w-100 ${classes.portfolioImg}`}
              src={portfolio3}
              alt="portfolio3"
            />
            <a href="https://github.com/robertmartinsen/project-exam-2">
              <div className={`${classes.iconBox} ${classes.githubIcon}`}>
                <img
                  className={`${classes.githubIcon} ${classes.circle}`}
                  src={github}
                  alt="Github"
                />
              </div>
            </a>
            <a
              className={classes.imgLink}
              href="https://exquisite-lokum-33078e.netlify.app/"
            >
              <div className={`${classes.iconBox} ${classes.webIcon}`}>
                <img
                  className={`${classes.webIcon} ${classes.circle}`}
                  src={web}
                  alt="Web"
                />
              </div>
            </a>
            <div className={classes.texts}>
              <h3 className={classes.title}>Exam-2</h3>
              <p className={classes.description}>[React, SCSS, Bootstrap]</p>
            </div>
          </div>
        </div>
        {/* Second Card */}
        <div
          className={`col-sm-12 col-md-6 col-lg-4 mb-4 ${classes.portfolioCard}`}
        >
          <div className={classes.boxImg}>
            <img
              className={`w-100 ${classes.portfolioImg}`}
              src={portfolio1}
              alt="portfolio1"
            />
            <a href="https://github.com/robertmartinsen/react-ca">
              <div className={`${classes.iconBox} ${classes.githubIcon}`}>
                <img
                  className={`${classes.githubIcon} ${classes.circle}`}
                  src={github}
                  alt="Github"
                />
              </div>
            </a>
            <a
              className={classes.imgLink}
              href="https://vermillion-muffin-906620.netlify.app/"
            >
              <div className={`${classes.iconBox} ${classes.webIcon}`}>
                <img
                  className={`${classes.webIcon} ${classes.circle}`}
                  src={web}
                  alt="Web"
                />
              </div>
            </a>
            <div className={classes.texts}>
              <h3 className={classes.title}>Javascript Frameworks</h3>
              <p className={classes.description}>[React, SCSS, Bootstrap]</p>
            </div>
          </div>
        </div>
        {/* Third Card */}
        <div
          className={`col-sm-12 col-md-6 col-lg-4 mb-4 ${classes.portfolioCard}`}
        >
          <div className={classes.boxImg}>
            <img
              className={`w-100 ${classes.portfolioImg}`}
              src={portfolio2}
              alt="portfolio2"
            />
            <a href="https://github.com/robertmartinsen/semester-project-2">
              <div className={`${classes.iconBox} ${classes.githubIcon}`}>
                <img
                  className={`${classes.githubIcon} ${classes.circle}`}
                  src={github}
                  alt="Github"
                />
              </div>
            </a>
            <a
              className={classes.imgLink}
              href="https://effortless-hamster-53143f.netlify.app/"
            >
              <div className={`${classes.iconBox} ${classes.webIcon}`}>
                <img
                  className={`${classes.webIcon} ${classes.circle}`}
                  src={web}
                  alt="Web"
                />
              </div>
            </a>
            <div className={classes.texts}>
              <div className={classes.textContent}>
                <h3 className={classes.title}>Semester Project 2</h3>
                <p className={classes.description}>[HTML, SCSS, JS]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioList
