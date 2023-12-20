import React from "react"
import classes from "../styles/components/Footer.module.scss"
import logo from "./assets/logo.svg"

function Footer() {
  return (
    <footer className={`${classes.footer} text-light text-center py-3 pb-5`}>
      <div className="container text-center">

          <img src={logo} alt="footer logo" />         <p className="pt-3">&copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
