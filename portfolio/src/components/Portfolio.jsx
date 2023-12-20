import React from "react"
import PortfolioList from "./PortfolioList"
import classes from "../styles/components/Portfolio.module.scss"

function Portfolio() {
  return (
    <section id="portfolio" className={classes.portfolioBody}>
      <div
        className={`container col-lg-11 col-xl-8 col-md-10 col-11 ${classes.portfolioContainer}`}
      >
        <div className={`container text-center ${classes.titleContainer}`}>
          <h1>Portfolio</h1>
          <h2 className="pt-4">Noroff Projects</h2>
          <PortfolioList />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
