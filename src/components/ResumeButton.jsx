import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import styles from "./ResumeButton.module.css"

const ResumeButton = ({ href, buttonStyle }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyle}
            whileHover="hover"
            whileTap="tap"
            variants={{
                tap: { scale: 0.95 },
            }}
        >
            <motion.span className={styles.buttonText}>
                RESUME <ArrowUpRight />
            </motion.span>
            <motion.div
                className={styles.fill}
                initial={{ scaleX: 0 }}
                variants={{
                    hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.3 }}
            />
        </motion.a>
    )
}

export default ResumeButton
