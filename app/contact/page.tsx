"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { contactInfo, socialLinks, contactPageContent } from "@/lib/data/data"
import Image from "next/image"
import { MdEmail, MdPhone, MdLocationOn, MdSend } from "react-icons/md"
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })

        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      } else {
        setError(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setError(
        "Failed to submit form. Please check your connection and try again."
      )
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Function to get the correct icon component based on the icon name from data
  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return <FaGithub size={24} />
      case "linkedin":
        return <FaLinkedin size={24} />
      case "facebook":
        return <FaFacebook size={24} />
      default:
        return <FaGithub size={24} />
    }
  }

  // Function to get the correct contact icon component
  const getContactIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "email":
        return <MdEmail size={24} />
      case "phone":
        return <MdPhone size={24} />
      case "location":
        return <MdLocationOn size={24} />
      default:
        return <MdEmail size={24} />
    }
  }

  // Framer Motion variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const formFieldVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  // Function to get the appropriate href value for contact items
  const getContactHref = (item: { type: string; text: string }): string => {
    if (item.type === "email") {
      return `mailto:${item.text}`
    } else if (item.type === "phone") {
      // Remove any non-digit characters for the href
      const phoneDigits = item.text.replace(/\D/g, "")
      return `tel:${phoneDigits}`
    } else if (item.type === "address") {
      // Create a Google Maps link with the address
      return `https://maps.google.com/?q=${encodeURIComponent(item.text)}`
    }
    return "#"
  }

  return (
    <div className="bg-gradient-to-b from-midnight-blue to-deep-teal text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-16 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-bright-cyan text-shadow-md text-shadow-black">
                {contactPageContent.hero.title}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-aqua-green text-shadow-sm text-shadow-black/50">
                {contactPageContent.hero.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              {/* Contact Form */}
              <motion.div
                variants={itemVariants}
                className="bg-midnight-blue/30 p-8 rounded-xl shadow-black/50 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold mb-6 text-bright-cyan text-shadow-sm text-shadow-black/50">
                  {contactPageContent.form.title}
                </h2>

                <div className="text-sm text-aqua-green mb-4">
                  Fields marked with <span className="text-red-400">*</span> are
                  required
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    custom={0}
                    variants={formFieldVariants}
                    className="relative"
                  >
                    <label className="block text-sm font-medium mb-1 text-aqua-green">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={contactPageContent.form.namePlaceholder}
                      className="w-full bg-midnight-blue/60 border border-bright-cyan/30 rounded-lg p-3 text-white placeholder-aqua-green/50 focus:outline-none focus:ring-2 focus:ring-bright-cyan transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    custom={1}
                    variants={formFieldVariants}
                    className="relative"
                  >
                    <label className="block text-sm font-medium mb-1 text-aqua-green">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={contactPageContent.form.emailPlaceholder}
                      className="w-full bg-midnight-blue/60 border border-bright-cyan/30 rounded-lg p-3 text-white placeholder-aqua-green/50 focus:outline-none focus:ring-2 focus:ring-bright-cyan transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    custom={2}
                    variants={formFieldVariants}
                    className="relative"
                  >
                    <label className="block text-sm font-medium mb-1 text-aqua-green">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full bg-midnight-blue/60 border border-bright-cyan/30 rounded-lg p-3 text-white placeholder-aqua-green/50 focus:outline-none focus:ring-2 focus:ring-bright-cyan transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    custom={3}
                    variants={formFieldVariants}
                    className="relative"
                  >
                    <label className="block text-sm font-medium mb-1 text-aqua-green">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder={contactPageContent.form.subjectPlaceholder}
                      className="w-full bg-midnight-blue/60 border border-bright-cyan/30 rounded-lg p-3 text-white placeholder-aqua-green/50 focus:outline-none focus:ring-2 focus:ring-bright-cyan transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    custom={4}
                    variants={formFieldVariants}
                    className="relative"
                  >
                    <label className="block text-sm font-medium mb-1 text-aqua-green">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder={contactPageContent.form.messagePlaceholder}
                      rows={5}
                      className="w-full bg-midnight-blue/60 border border-bright-cyan/30 rounded-lg p-3 text-white placeholder-aqua-green/50 focus:outline-none focus:ring-2 focus:ring-bright-cyan transition-all duration-300"
                    ></textarea>
                  </motion.div>

                  <motion.div
                    custom={5}
                    variants={formFieldVariants}
                    className="pt-2"
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-6 py-3 bg-bright-cyan text-midnight-blue font-semibold rounded-lg hover:bg-light-mint-green shadow-sm shadow-black hover:scale-105 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-midnight-blue"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {contactPageContent.form.sendingText}
                        </span>
                      ) : (
                        <span className="flex items-center">
                          {contactPageContent.form.submitButtonText}{" "}
                          <MdSend className="ml-2" size={18} />
                        </span>
                      )}
                    </button>
                  </motion.div>

                  {(submitSuccess || error) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 p-3 rounded-md text-sm ${
                        submitSuccess
                          ? "bg-green-500/20 text-green-200"
                          : "bg-red-500/20 text-red-200"
                      }`}
                    >
                      {submitSuccess ? "Form submitted successfully!" : error}
                    </motion.div>
                  )}
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="bg-midnight-blue/30 p-8 rounded-xl shadow-black/50 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-2xl font-semibold mb-6 text-bright-cyan text-shadow-sm text-shadow-black/50">
                    {contactPageContent.contactInfo.title}
                  </h2>

                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <motion.a
                        key={index}
                        href={getContactHref(item)}
                        target={item.type === "address" ? "_blank" : undefined}
                        rel={
                          item.type === "address"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        whileHover={{ x: 5 }}
                        className="flex items-start space-x-4 text-aqua-green hover:text-light-mint-green transition-colors"
                      >
                        <span className="mt-1 text-bright-cyan">
                          {getContactIcon(item.icon)}
                        </span>
                        <span>
                          {item.text.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              {i < item.text.split("\n").length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="bg-midnight-blue/30 p-8 rounded-xl shadow-black/50 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-2xl font-semibold mb-6 text-bright-cyan text-shadow-sm text-shadow-black/50">
                    {contactPageContent.socialLinks.title}
                  </h2>

                  <div className="flex space-x-5">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bright-cyan hover:text-light-mint-green"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {getSocialIcon(social.icon)}
                        <span className="sr-only">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="bg-midnight-blue/30 p-8 rounded-xl shadow-black/50 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-2xl font-semibold mb-6 text-bright-cyan text-shadow-sm text-shadow-black/50">
                    {contactPageContent.availability.title}
                  </h2>
                  <p className="text-aqua-green">
                    {contactPageContent.availability.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-6 md:px-10 bg-midnight-blue/40 ">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-10 text-bright-cyan text-shadow-sm text-shadow-black/50">
              {contactPageContent.location.title}
            </h2>
            <div className="relative w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-md shadow-black/50 p-4 hover:shadow-xl transition-all duration-300">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Vårvädersvägen 6A lgh 1502, 222 27 Lund, Sweden")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Lund_Cathedral_-_25805455387.jpg"
                    alt="Lund Cathedral"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority
                  />
                  <div className="absolute inset-0"></div>
                </div>
              </a>

              {/* Information overlay */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 text-white bg-midnight-blue/75 p-4 rounded-lg">
                <p className="text-lg font-medium mb-2">
                  {contactInfo[2].text.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < contactInfo[2].text.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                <p className="text-sm text-aqua-green">
                  {contactPageContent.location.description}
                </p>
              </div>
            </div>
            <div className="text-center mt-2 text-xs text-aqua-green/70">
              Photo:{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Lund_Cathedral_-_25805455387.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bright-cyan"
              >
                Colin
              </a>
              ,
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bright-cyan"
              >
                {" "}
                CC BY-SA 4.0
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
