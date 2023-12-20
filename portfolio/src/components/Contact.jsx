import React, { useState, useEffect, useRef } from "react"
import classes from "../styles/components/Contact.module.scss"
import MapContainer from "./MapContainer"
import emailjs from "emailjs-com"

function Contact() {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [showMap, setShowMap] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        const contactSectionPosition =
          contactSection.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (contactSectionPosition < windowHeight * 0.6) {
          setShowMap(true)
          setShowForm(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.name && formData.email && formData.message) {
      emailjs
        .sendForm(
          "service_qvs2qan",
          "template_8bwarhq",
          formRef.current,
          "uuOnE8Y5ybxiJKzOs"
        )
        .then(
          (result) => {
            console.log(result.text)
            setFormSubmitted(true)
            setFormData({ name: "", email: "", message: "" })
          },
          (error) => {
            console.error(error.text)
          }
        )
    } else {
      alert("Please fill in all fields.")
    }
  }

  const handleReset = () => {
    setFormSubmitted(false)
  }

  return (
    <section id="contact" className={`pb-5 ${classes.contactBody}`}>
      <div
        className={`container col-lg-10 col-xl-7 col-md-10 col-11 pt-5 pb-5 ${classes.portfolioContainer}`}
      >
        <div className={`text-center pt-5 ${classes.title}}`}>
          <h1 className="text-primary fw-bold">Contact me</h1>
        </div>
        <div className={`row pt-5 ${classes.contactRow}`}>
          <div
            className={`col ${classes.mapCol} ${
              showMap ? classes.slideInLeft : ""
            }`}
          >
            <MapContainer />
          </div>
          <div
            className={`col ${classes.formCol} ${
              showForm ? classes.slideInRight : ""
            }`}
          >
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className={`form-label ${classes.label}`}>
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control ${classes.input}`}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className={`form-label ${classes.label}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${classes.input}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="message"
                  className={`form-label ${classes.label}`}
                >
                  Message
                </label>
                <textarea
                  className={`form-control ${classes.input}`}
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`btn btn-primary ${classes.button}`}
              >
                Send Message
              </button>
            </form>
            {formSubmitted && (
              <div className={classes.messageBox}>
                <div className={classes.centeredBox}>
                  <div className={classes.messageContent}>
                    <p className="fw-bold">Message Sent!</p>
                    <div className="pt-5">
                      <button
                        className={`btn ${classes.secondaryButton}`}
                        onClick={handleReset}
                      >
                        Alright
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
