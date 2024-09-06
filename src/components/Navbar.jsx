import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import HamburgerButton from "./Hamburger"
import ResumeButton from "./ResumeButton"
import styles from "./Navbar.module.css"

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset"
    }, [mobileMenuOpen])

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prevState) => !prevState)
    }

    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
        open: {
            x: "0%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    }

    return (
        <>
            <nav
                className={`${styles.navbar} ${
                    scrolled ? styles.scrolled : styles.transparent
                }`}
            >
                <div>
                    <Link to="/" className={styles.logo}>
                        <h1>EIK</h1>
                    </Link>
                </div>
                <div className={styles.desktopMenu}>
                    <Link to="/about" className={styles.navLink}>
                        ABOUT
                    </Link>
                    <Link to="/blogs" className={styles.navLink}>
                        BLOGS
                    </Link>
                    <ResumeButton
                        href="https://drive.google.com/file/d/1yivpQlXRbVlX28Qpk9_fIm-YERRxlfYc/view?usp=sharing"
                        buttonStyle={styles.resumeButtonMain}
                    />
                </div>
                <div className={styles.mobileMenuToggle}>
                    <HamburgerButton
                        isOpen={mobileMenuOpen}
                        toggleMenu={toggleMobileMenu}
                    />
                </div>
            </nav>
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <div className={styles.mobileMenuContent}>
                            <div className={styles.mobileMenuLinks}>
                                <Link
                                    to="/"
                                    className={styles.mobileNavLink}
                                    onClick={toggleMobileMenu}
                                >
                                    HOME
                                </Link>
                                <Link
                                    to="/about"
                                    className={styles.mobileNavLink}
                                    onClick={toggleMobileMenu}
                                >
                                    ABOUT
                                </Link>
                                <Link
                                    to="/blogs"
                                    className={styles.mobileNavLink}
                                    onClick={toggleMobileMenu}
                                >
                                    BLOGS
                                </Link>
                                <ResumeButton
                                    href="https://drive.google.com/file/d/1yivpQlXRbVlX28Qpk9_fIm-YERRxlfYc/view?usp=sharing"
                                    buttonStyle={styles.resumeButtonMobile}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
