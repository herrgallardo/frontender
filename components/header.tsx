"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import { links } from "@/lib/data/data"
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MenuIcon, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) return

    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50)
    })

    return () => unsubscribe()
  }, [hasMounted, scrollY])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const headerVariants = {
    initial: {
      backgroundColor: "rgba(33, 58, 88, 0.98)",
      height: "8.5rem",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.8)",
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.20)",

      height: "5.5rem",
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
    },
  }

  const logoVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { type: "tween", duration: 0.3 },
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  }

  const desktopNavItemVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
      y: 0,
      scale: 3,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: [1000, -40, 20, -10, 0],
      scale: [3, 1.05, 0.98, 1.02, 1],
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const navItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 500,
        damping: 20,
      },
    }),
  }

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate={isScrolled ? "scrolled" : "initial"}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 md:px-10 h-[6.5rem]"
    >
      <Link href="/">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          variants={logoVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center cursor-pointer z-50"
        >
          <motion.img
            src="/logos/logo.png"
            alt="Logo"
            whileHover={{ y: -2 }}
            className={cn(
              "transition-all duration-300 h-16 md:h-32",
              hasMounted && (isScrolled ? "lg:h-32" : "lg:h-48")
            )}
          />
        </motion.div>
      </Link>

      {/* Centered desktop navbar */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <NavigationMenu className="text-teal-blue">
          <NavigationMenuList>
            {links.map((link, index) => (
              <NavigationMenuItem key={link.path}>
                <NavigationMenuLink asChild className="hover:bg-transparent">
                  <motion.div
                    custom={index}
                    variants={desktopNavItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={link.path}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent lg:text-lg font-semibold text-shadow-md text-shadow-black/20 text-bright-cyan",
                        "hover:text-white hover:bg-transparent",
                        isScrolled && "text-midnight-blue"
                      )}
                    >
                      <motion.span
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="flex items-center"
                      >
                        <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                          {link.name}
                        </span>
                      </motion.span>
                    </Link>
                  </motion.div>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden ml-auto z-50">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-deep-teal"
        >
          {isOpen ? (
            <X size={24} className="text-deep-teal" />
          ) : (
            <MenuIcon size={24} className="text-deep-teal" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-midnight-blue z-40 p-6 flex flex-col justify-between shadow-xl md:hidden"
      >
        <div>
          <div className="flex justify-between items-center mb-8">
            <Link href="/">
              <motion.img
                src="/logo/logo.png"
                alt="Logo"
                className="h-14"
                whileHover={{ y: -2 }}
              />
            </Link>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
            >
              <X size={24} className="text-bright-cyan" />
            </motion.button>
          </div>
          <nav>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <motion.li
                  key={link.path}
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    x: 8,
                    backgroundColor: "rgba(9, 209, 199, 0.1)",
                    borderRadius: "0.5rem",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-4 text-lg font-medium text-aqua-green hover:text-light-mint-green"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  )
}

export default Header
