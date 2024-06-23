import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Copy from "./Copy"
import styles from "./Navbar.module.css"

function Navbar() {
    const [scrolled, setScrolled] = useState(false)

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

    return (
        <nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : styles.transparent}`}
        >
            <div>
                <Link to="/" className={styles.logo}>
                    <h1>Eik</h1>
                </Link>
            </div>
            <div className={styles.navLinks}>
                <Link to="/about" className={styles.navLink}>
                    About
                </Link>
                <Link to="/blogs" className={styles.navLink}>
                    Blogs
                </Link>
                <Copy />
            </div>
        </nav>
    )
}

export default Navbar
