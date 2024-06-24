import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Copy from "./Copy"
import styles from "./Navbar.module.css"

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [time, setTime] = useState(
        new Date().toLocaleTimeString("en-US", { hour12: false }),
    )

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
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-US", { hour12: false }))
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : styles.transparent}`}
        >
            <div>
                <Link to="/" className={styles.logo}>
                    <h1>
                        Eik <span className={styles.time}>[{time}]</span>
                    </h1>
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
