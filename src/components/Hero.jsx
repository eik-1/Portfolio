import React from "react"

import GradualSpacing from "./magicui/GradualSpacing"
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
                        Hello! I'm a passionate full-stack Web3 developer with 2
                        years of experience in this community. I believe that
                        Blockchain technology will lead the future. With my
                        skills, I want to leave a positive impact on the world.
                    </p>
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
