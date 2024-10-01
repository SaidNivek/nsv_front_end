import React, { useState, useEffect } from "react";
import { client } from "../client";
import Address from "../components/Home_Components/Address";
import Hours from "../components/Home_Components/Hours";
import { mapPlaceholder } from "../assets";

const QUERY = encodeURIComponent('*[_type == "locations"]');
const URL = `https://${process.env.REACT_APP_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.REACT_APP_DATASET}?query=${QUERY}`;

function ContactUs() {
  let [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // This function will fetch the locations that the store is open, and set it to the state variable locations
  function getLocations() {
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        if (result.length > 0) {
          setLocations(result);
        }
      })
      .catch((err) => console.error(err));
  }

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, phone, message } = formData;

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <div className="md:max-w-[960px] flex flex-col md:m-auto w-[90%] m-auto">
      <h2>Contact Us</h2>
      <p className="mt-[8px]">For estimates or questions, we’d love to hear from you.</p>
      <div className='flex md:flex-row flex-col gap-[4rem] justify-between mt-[24px]'>
      {!isFormSubmitted ? (
        <div className="ContactForm min-w-[320px] flex flex-col w-full p-[24px] gap-[24px] ">
          <div  className="flex flex-col gap-[8px]">
            <label for="name">
              Name
            </label>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col gap-[8px]" >
            <label for="phone">
              Phone
            </label>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="phone"
              value={phone}
              onChange={handleChangeInput}
            />

          </div>
          <div className="flex flex-col gap-[8px]">
            <label for="email">
              Email
            </label>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col flex-grow gap-[8px]">
            <label for="message">
              Message
            </label>
            <textarea
              className="py-2 px-3 appearance-none border rounded w-full leading-tight focus:outline-none focus:shadow-outline h-[100%] min-h-[80px]"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="mt-2 w-full text-white border bg-black rounded h-[3rem]" onClick={handleSubmit}>
            {loading ? "Sending" : "Send"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch! We will contact you as soon as we can.</h3>
        </div>
      )}

      {locations?.map((location, idx) => (
        <div
          className="flex flex-col justify-evenly min-w-[294px]"
          key={idx}
        >
          <div className=''>
            <h3 className="">
              Come see us
            </h3>
            <div className="flex flex-col">
              <Address location={location} />
              <Hours location={location} />
            </div>
          </div>
          {/* Can comment this back in to use the Google Map API */}
          {/* <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                        <CustomMap />
                    </APIProvider> */}
          <div>
            <a
              className="address_link hover:underline hover:decoration-[#4FB0E8] hover:decoration-4"
              href={`http://maps.google.com/?q=${locations[idx].street},${locations[idx].city},${locations[idx].state},${locations[idx].zip}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={mapPlaceholder} />
            </a>
          </div>
        </div>
      ))}
      </div>
    </div>
      // <div className="copyright">
      //   <p className="p-text">
      //     &copy;{new Date().getFullYear()} North Shore Vacuum
      //   </p>
      //   <p className="p-text">All rights reserved</p>
      // </div>
  );
}

export default ContactUs;
