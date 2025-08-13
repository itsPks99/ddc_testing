"use client"

import { useState, useRef, useEffect } from "react"
import Swal from "sweetalert2"
import { IoArrowForwardCircle } from "react-icons/io5"
import "./contactForm.css"
import countryCodes from "../../../utils/countryCodes"
import { FaPhone, FaInstagram, FaFacebookF, FaLinkedinIn, FaAddressBook, } from "react-icons/fa"

const ConnectWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91", // Default to India
    phone: "",
    service: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredCountries, setFilteredCountries] = useState(countryCodes)
  const dropdownRef = useRef(null)

  // Filter countries based on search query
  useEffect(() => {
    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase()
      const filtered = countryCodes.filter(
        (country) =>
          country.name.toLowerCase().includes(lowercaseQuery) ||
          country.dial_code.includes(lowercaseQuery) ||
          country.code.toLowerCase().includes(lowercaseQuery),
      )
      setFilteredCountries(filtered)
    } else {
      setFilteredCountries(countryCodes)
    }
  }, [searchQuery])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Helper function to get country name from dial code
  const getCountryName = (dialCode) => {
    const country = countryCodes.find((country) => country.dial_code === dialCode)
    return country ? country.name : ""
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const handleCountrySelect = (dialCode) => {
    setFormData((prevState) => ({
      ...prevState,
      countryCode: dialCode,
    }))
    setIsCountryDropdownOpen(false)
    setSearchQuery("")
  }

  // Validate phone number based on country code
  const validatePhoneNumber = (countryCode, phone) => {
    if (!phone) return false
    // Basic validation patterns for different country codes
    const patterns = {
      "+91": /^[6-9]\d{9}$/, // India: 10 digits starting with 6-9
      "+1": /^\d{10}$/, // US/Canada: 10 digits
      "+44": /^\d{10}$/, // UK: typically 10 digits
      "+61": /^\d{9}$/, // Australia: 9 digits
      "+971": /^\d{9}$/, // UAE: 9 digits
      "+65": /^\d{8}$/, // Singapore: 8 digits
      "+49": /^\d{10,11}$/, // Germany: 10-11 digits
      "+33": /^\d{9}$/, // France: 9 digits
    }
    // Default pattern for other country codes
    const defaultPattern = /^\d{7,15}$/
    const pattern = patterns[countryCode] || defaultPattern
    return pattern.test(phone)
  }

  // Validate email format
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const validateForm = () => {
    const newErrors = {}
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    // Validate phone
    if (!formData.phone) {
      newErrors.phone = "Phone number is required"
    } else if (!validatePhoneNumber(formData.countryCode, formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }
    // Validate service
    if (!formData.service) {
      newErrors.service = "Please select a service"
    }
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Validate form before submission
    if (!validateForm()) {
      return
    }

    // Prepare data for submission (combine country code and phone)
    const submissionData = {
      ...formData,
      phone: `${formData.countryCode} ${formData.phone}`, // Format phone with country code
    }
    delete submissionData.countryCode // Remove separate country code field

    try {
      const response = await fetch("https://usebasin.com/f/69524152868b", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(submissionData).toString(),
      })

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We will get back to you shortly.",
          confirmButtonColor: "#2d4d7d",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          service: "",
          message: "",
        })
        setErrors({})
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#d33",
      })
    }
  }

  // Find the selected country
  const selectedCountry = countryCodes.find((country) => country.dial_code === formData.countryCode)

  return (
    <div className="connect-with-us-container">
      <div className="contact-main-section">
        {/* Left Side - Company Details */}
        <div className="company-details-section">
          <div className="company-info">
            <h2 className="company-heading">Delhi Digital Co.</h2>
            <p className="company-description">
              We are a full-service digital agency specializing in web development, branding, performance marketing,
              photography, and social media management. Let's transform your digital presence together.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+91 92051 10208</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaAddressBook />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">hello@delhidigital.co</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaAddressBook />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Address</span>
                  <span className="contact-value">New Delhi, India</span>
                </div>
              </div>
            </div>

            <div className="social-media-section">
              <h3 className="social-heading">Follow Us</h3>
              <div className="social-links">
                <a href="https://www.instagram.com/delhidigitalco/?hl=en">
                  <FaInstagram size={30}  color="white"/> 

                </a>

                <a
                  href="https://in.linkedin.com/company/delhidigitalco"

                >
                  < FaLinkedinIn size={30} color="white" />

                </a>


                <a
                  href="http://facebook.com/delhidigitalco/"

                >
                  <FaFacebookF size={27} color="white" />

                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form-section">
          <h2 className="form-heading">LET'S GET IN TOUCH</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "error" : ""}
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
            </div>

            <div className="phone-input-container">
              <div className="country-code-select" ref={dropdownRef}>
                <div className="selected-country" onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}>
                  <div>
                    {selectedCountry ? `${selectedCountry.dial_code} (${selectedCountry.name})` : formData.countryCode}
                  </div>
                  <span className="dropdown-arrow"></span>
                </div>
                {isCountryDropdownOpen && (
                  <div className="country-dropdown">
                    <div className="country-search">
                      <input
                        type="text"
                        placeholder="Search country..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <div className="country-list">
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                          <div
                            key={country.code}
                            className={`country-item ${formData.countryCode === country.dial_code ? "selected" : ""}`}
                            onClick={() => handleCountrySelect(country.dial_code)}
                          >
                            <span className="country-code">{country.dial_code}</span>
                            <span className="country-name">{country.name}</span>
                          </div>
                        ))
                      ) : (
                        <div className="no-results">No countries found</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="phone-input-wrapper">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "error" : ""}
                  maxLength={formData.countryCode === "+91" ? 10 : 17}
                />
                {errors.phone && <div className="error-message">{errors.phone}</div>}
              </div>
            </div>

            <div className="input-wrapper">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={errors.service ? "error" : ""}
              >
                <option value="" disabled>
                  Select Services
                </option>
                <option value="branding">Website Development</option>
                <option value="marketing">Social Media Management</option>
                <option value="design">Performance Marketing</option>
                <option value="development">Product Photography</option>
                <option value="development">Branding and Packaging</option>
                <option value="development">App Development</option>
              </select>
              {errors.service && <div className="error-message">{errors.service}</div>}
            </div>

            <div className="input-wrapper">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "error" : ""}
              ></textarea>
              {errors.message && <div className="error-message">{errors.message}</div>}
            </div>

            <button type="submit" className="contact-form-submit-button">
              Submit
              <IoArrowForwardCircle className="icon-arr" size={30} />
            </button>
          </form>
        </div>
      </div>

      {/* WhatsApp CTA Section */}
      <div className="cta-section">
        <a href="https://wa.me/+919205110208" className="connect-button">
          <span className="whatsapp-icon">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg> */}
          </span>
          Connect with us
        </a>
      </div>
    </div>
  )
}

export default ConnectWithUs
