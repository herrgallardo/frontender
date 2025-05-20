"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  links,
  socialLinks,
  contactInfo,
  companyInfo,
  footerSections,
  cvDownloadButtonContent,
} from "@/lib/data/data"
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaFileDownload,
} from "react-icons/fa"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Function to get the correct icon component based on the icon name from data
  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return <FaGithub size={20} />
      case "linkedin":
        return <FaLinkedin size={20} />
      case "facebook":
        return <FaFacebook size={20} />
      default:
        return <FaGithub size={20} />
    }
  }

  // Function to get the correct contact icon component
  const getContactIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "email":
        return <MdEmail size={18} />
      case "phone":
        return <MdPhone size={18} />
      case "location":
        return <MdLocationOn size={18} />
      default:
        return <MdEmail size={18} />
    }
  }

  // Define TypeScript interfaces for our data structures
  interface ContactItem {
    type: string
    icon: string
    text: string
  }

  // Function to get the appropriate href value for contact items
  const getContactHref = (item: ContactItem): string => {
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

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.footer
      className="bg-midnight-blue text-white pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/">
              <motion.img
                src={companyInfo.logo}
                alt="Logo"
                className="h-20 mb-4"
                whileHover={{ y: -2 }}
              />
            </Link>
            <p className="text-aqua-green max-w-xs">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-bright-cyan hover:text-light-mint-green"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {getSocialIcon(social.icon)}
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}

              {/* CV Download Link */}
              <motion.a
                href={cvDownloadButtonContent.href}
                download
                className="text-bright-cyan hover:text-light-mint-green"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFileDownload size={20} />
                <span className="sr-only">{cvDownloadButtonContent.text}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-bright-cyan mb-6">
              {footerSections.quickLinks.title}
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <motion.li key={link.path} whileHover={{ x: 5 }}>
                  <Link
                    href={link.path}
                    className="text-aqua-green hover:text-light-mint-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href={cvDownloadButtonContent.href}
                  download
                  className="text-aqua-green hover:text-light-mint-green transition-colors flex items-center"
                >
                  <FaFileDownload className="mr-2" />
                  {cvDownloadButtonContent.text}
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-bright-cyan mb-6">
              {footerSections.contactUs.title}
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const contactHref = getContactHref(item)

                if (item.type === "address") {
                  return (
                    <motion.li key={index} className="flex space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <span className="text-bright-cyan inline-block">
                          {getContactIcon(item.icon)}
                        </span>
                      </div>
                      <a
                        href={contactHref}
                        className="text-aqua-green hover:text-light-mint-green transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.text.split("\n").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < item.text.split("\n").length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </a>
                    </motion.li>
                  )
                }

                return (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-bright-cyan">
                      {getContactIcon(item.icon)}
                    </span>
                    <a
                      href={contactHref}
                      className="text-aqua-green hover:text-light-mint-green transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.text}
                    </a>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-deep-teal mt-12 pt-8 text-center"
        >
          <p className="text-aqua-green">
            © {currentYear} {companyInfo.name}. {companyInfo.copyright}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
