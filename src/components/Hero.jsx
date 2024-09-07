import React, { useState, useEffect } from "react"
import { Linkedin, Instagram } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { motion } from "framer-motion"

import ShinyButton from "./magicui/ShinyButton"
import styles from "./Hero.module.css"
import Ethereum from "./Ethereum"
import { medium, X } from "../assets"
import { Suspense } from "react"

function Hero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 300)

        return () => clearTimeout(timer)
    }, [])

    const fadeInFromBottom = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
            },
        },
    }

    return (
        <section className={styles.wrapper}>
            <div className={`${styles.gradientCircle} ${styles.circle1}`}></div>
            <div className={`${styles.gradientCircle} ${styles.circle2}`}></div>
            <div className={styles.heroContent}>
                <div className={styles.introText}>
                    <motion.div
                        className={styles.name}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={fadeInFromBottom}
                    >
                        <img
                            className={styles.wavingHand}
                            src="/apple_waving.png"
                            alt="waving"
                        />
                        <h1>
                            Hi, I'm{" "}
                            <span className={styles.nameitalic}>Eik</span>
                        </h1>
                    </motion.div>

                    <p className={styles.introduction}>
                        I'm a full-stack{" "}
                        <span className={styles.inside}>Web3</span> developer
                        based in India.
                        <br />I believe in{" "}
                        <span className={styles.inside}>Blockchain</span>.
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
                                <img className={styles.xSvg} src={X} alt="X" />
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
                <div className={styles.model}>
                    <Canvas>
                        <ambientLight />
                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            enableRotate={true}
                            enableDamping={true}
                            dampingFactor={0.25}
                            rotateSpeed={0.5}
                        />
                        <Suspense fallback={null}>
                            <Ethereum />
                        </Suspense>
                        <Environment preset="sunset" />
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Hero
