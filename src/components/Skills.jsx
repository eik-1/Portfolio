import React from "react"

import IconCloud from "./magicui/IconCloud"
import TypingAnimation from "./magicui/TypingAnimation"
import styles from "./Skills.module.css"

const slugs = [
    "chainlink",
    "counterstrike",
    "ethers",
    "nodedotjs",
    "express",
    "firebase",
    "css3",
    "docker",
    "git",
    "ipfs",
    "nextdotjs",
    "solidity",
    "rust",
    "alchemy",
    "react",
    "typescript",
    "javascript",
    "supabase",
    "tailwind",
]

const OtherSkills = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Skills</h1>
            <div className={styles.skills}>
                <div className={styles.skillsGlobe}>
                    <IconCloud iconSlugs={slugs} />
                </div>
                <div className={styles.skillsText}>
                    <TypingAnimation
                        className="text-2xl font-bold text-[#06D001] font-space"
                        text="- solidity"
                    />
                    <TypingAnimation
                        className="text-2xl font-bold text-[#06D001] font-space"
                        text="- rust"
                    />
                    <TypingAnimation
                        className="text-2xl font-bold text-[#06D001] font-space"
                        text="- typescript"
                    />
                    <TypingAnimation
                        className="text-2xl font-bold text-[#06D001] font-space"
                        text="- chainlink"
                    />
                    <TypingAnimation
                        className="text-2xl font-bold text-[#06D001] font-space"
                        text="- wagmi"
                    />
                    <TypingAnimation
                        className="text-2xl font-bold text-[#06D001] font-space"
                        text="- ipfs"
                    />
                    <TypingAnimation
                        className="text-2xl font-bold text-[#06D001] font-space"
                        text="- react"
                    />
                    <TypingAnimation
                        className="text-2xl font-bold text-[#06D001] font-space"
                        text="- supabase"
                    />
                    <TypingAnimation
                        className="text-2xl font-bold text-[#06D001] font-space"
                        text="- docker"
                    />
                    <TypingAnimation
                        className="text-2xl font-bold text-[#06D001] font-space"
                        text="- git"
                    />
                    <TypingAnimation
                        className="text-2xl font-bold text-[#06D001] font-space"
                        text="- counterstrike"
                    />
                </div>
            </div>
        </div>
    )
}

export default OtherSkills
