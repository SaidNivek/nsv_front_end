import React, { useState } from 'react'

function ContactUs() {

  const [form, setForm] = useState(null)

  return (
    <>
    <h2>Contact Us</h2>
    <div> Text on Left, Image on Right</div>
    <div>Send us a message form</div>
    </>
  )
}

export default ContactUs