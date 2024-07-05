import styles from "./Footer.module.css"

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>&copy; {currentYear} | Eik</p>
            <div className={styles.getInTouch}>
                <h3 className={styles.getInTouchTitle}>Get in touch</h3>
                <div className={styles.socialLinks}>
                    <a
                        href="https://x.com/0xeik"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        X
                    </a>
                    <span className={styles.separator}>/</span>
                    <a
                        href="https://www.linkedin.com/in/sarthakeik1/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <span className={styles.separator}>/</span>
                    <a
                        href="https://github.com/eik-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                    <span className={styles.separator}>/</span>
                    <a
                        href="https://warpcast.com/0xeik.eth"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Warpcast
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
