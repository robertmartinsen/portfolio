import React, { useState, useEffect } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import AlternateNavbar from "./components/AlternateNavbar"
import Footer from "./components/Footer"

function App() {
  const [showAlternateNavbar, setShowAlternateNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = document.getElementById("home").offsetHeight
      const currentPosition = window.pageYOffset

      if (currentPosition > heroSectionHeight) {
        setShowAlternateNavbar(true)
      } else {
        setShowAlternateNavbar(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Contact />

      <AlternateNavbar isVisible={showAlternateNavbar} />
      <Footer />
    </div>
  )
}

export default App
