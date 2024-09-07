import React from "react"
import { ArrowRight } from "lucide-react"

import styles from "./Hero.module.css"
import Image from "./Image"

const Hero = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.heading}>
                    <img
                        src="/apple_waving.png"
                        alt="apple waving"
                        className={styles.appleWaving}
                    />
                    Hey, it's nice to meet you!
                </div>
                <div className={styles.subHeading}>A bit about myself...</div>
                <div className={styles.description}>
                    I'm Sarthak but you can call me{" "}
                    <span className={styles.highlight}>Eik</span>. I'm a
                    multidisciplinary full stack web3 developer and a UI/UX
                    designer. I'm currently pursuing my Bachelors in Computer
                    Science and Engineering. I was introduced to Web3 when I
                    first joined{" "}
                    <span className={styles.highlight}>Tech Twitter</span>. The
                    idea of decentralized economy and finance motivated me to
                    self-learn about blockchain development.
                </div>
                <div className={styles.subHeading}>My skills include...</div>
                <div className={styles.skills}>
                    <ul>
                        <li>
                            <ArrowRight className={styles.arrow} size={20} />
                            Writing Smart Contracts
                        </li>
                        <li>
                            <ArrowRight className={styles.arrow} size={20} />
                            Web3 Frontend Development
                        </li>
                        <li>
                            <ArrowRight className={styles.arrow} size={20} />
                            Web3 Backend Development
                        </li>
                        <li>
                            <ArrowRight className={styles.arrow} size={20} />
                            UI/UX Design
                        </li>
                    </ul>
                </div>
            </div>
            <Image />
        </div>
    )
}

export default Hero
