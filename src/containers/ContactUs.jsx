import React, { useState } from 'react'
import { client } from '../../client'

function ContactUs() {

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
    <div>Send us a message form</div>
    </>
  )
}

export default ContactUs