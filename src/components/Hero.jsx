import React from "react"
import { Twitter, Linkedin, Instagram } from "lucide-react"

import GradualSpacing from "./magicui/GradualSpacing"
import ShinyButton from "./magicui/ShinyButton"
import styles from "./Hero.module.css"

function Hero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.introText}>
                    <GradualSpacing
                        className={styles.name}
                        text="Hi! I'm Eik"
                    />
                    <p className={styles.introduction}>
                        Hello! I'm a passionate full-stack{" "}
                        <span className={styles.inside}>Web3</span> developer
                        with 2 years of experience in this community. I believe
                        that <span className={styles.inside}>Blockchain</span>{" "}
                        technology will lead the future. With my skills, I want
                        to leave a positive impact on the world.
                    </p>
                    <div className={styles.links}>
                        <ShinyButton
                            text="Visit My GitHub"
                            githubUrl="https://github.com/eik-1"
                        />
                        <div className={styles.socials}>
                            <a
                                href="https://twitter.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <Twitter size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://instagram.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img
                        src="src/assets/mypic.jpg"
                        alt="Eik"
                        className={styles.profileImage}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
