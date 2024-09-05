import React from "react"
import styles from "./Loader.module.css"

function Loader({ size = 40, color = "#FF0000" }) {
    return (
        <div className={styles.spinnerContainer}>
            <div
                className={styles.spinner}
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    borderColor: `${color} transparent transparent transparent`,
                }}
            ></div>
        </div>
    )
}

export default Loader
