import React, { useState } from 'react'
import { client } from '../client'

function ContactUs() {

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, phone, message } = formData

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      phone: phone,
      message: message
    }

    client.create(contact)
    .then(() => {
      setLoading(false)
      setIsFormSubmitted(true)
    })

  }

  return (
    <>
    <h2>Contact Us</h2>
    <div> Text on Left, Image on Right</div>
    {!isFormSubmitted ? 
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Name" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Phone" name="phone" value={phone} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea 
              className="p-text"
              placeholder="Your message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{loading ? "Sending" : "Send Message"}</button>
        </div>

        : <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
      }

        <div className="copyright">
            <p className="p-text">&copy;{new Date().getFullYear()} North Shore Vacuum</p>
            <p className="p-text">All rights reserved</p>
        </div>
    </>
  )
}

export default ContactUs