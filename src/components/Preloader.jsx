import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import styles from "./Preloader.module.css"

function Preloader() {
    return (
        <AnimatePresence>
            <motion.div
                className={styles.preloader}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.p
                    className={styles.loadingText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    Eik
                </motion.p>
            </motion.div>
        </AnimatePresence>
    )
}

export default Preloader
