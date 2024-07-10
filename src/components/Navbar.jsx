import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Copy from "./Copy"
import styles from "./Navbar.module.css"

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [mobileMenuOpen])

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
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
                        <h1>Eik</h1>
                    </Link>
                </div>
                <div className={styles.desktopMenu}>
                    <Link to="/about" className={styles.navLink}>
                        About
                    </Link>
                    <Link to="/blogs" className={styles.navLink}>
                        Blogs
                    </Link>
                    <Copy />
                </div>
                <div className={styles.mobileMenuToggle}>
                    <button onClick={toggleMobileMenu}>
                        <Menu size={24} />
                    </button>
                </div>
            </nav>
            <div
                className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}
            >
                <div className={styles.mobileMenuContent}>
                    <button
                        className={styles.closeButton}
                        onClick={toggleMobileMenu}
                    >
                        <X size={24} />
                    </button>
                    <div className={styles.mobileMenuLinks}>
                        <Link
                            to="/about"
                            className={styles.mobileNavLink}
                            onClick={toggleMobileMenu}
                        >
                            About
                        </Link>
                        <Link
                            to="/blogs"
                            className={styles.mobileNavLink}
                            onClick={toggleMobileMenu}
                        >
                            Blogs
                        </Link>
                        <div className={styles.mobileCopy}>
                            <Copy />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
