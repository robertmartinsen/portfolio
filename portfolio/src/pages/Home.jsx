import React from "react"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {
  return (
    <section>
      <div>
        <About />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  )
}

export default Home
