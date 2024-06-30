import React from "react"
import { Twitter, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

import GradualSpacing from "./magicui/GradualSpacing"
import ShinyButton from "./magicui/ShinyButton"
import styles from "./Hero.module.css"
import { medium, myPic } from "../assets"

function Hero() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.heroContent}>
                <div className={styles.introText}>
                    <GradualSpacing
                        className={styles.name}
                        text="Hi! I'm Eik"
                    />
                    <p className={styles.introduction}>
                        Hey! My name is Sarthak and I'm a passionate full-stack{" "}
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
                                href="https://x.com/0xeik"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <Twitter size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sarthakeik1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://www.instagram.com/eik.eth/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="https://medium.com/@sarthakrawatbiz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <img
                                    className={styles.mediumSvg}
                                    src={medium}
                                    alt="medium"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.img
                        src={myPic}
                        alt="My Image"
                        className={styles.profileImage}
                        whileHover={{
                            rotate: 5,
                            scale: 1.05,
                            boxShadow: "0 0 15px #06D001",
                        }}
                    />
                    <motion.div
                        className={styles.glowingBorder}
                        animate={{
                            boxShadow: [
                                "0 0 5px #06D001",
                                "0 0 20px #06D001",
                                "0 0 5px #06D001",
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
