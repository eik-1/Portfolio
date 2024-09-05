import React, { useState, useEffect, useCallback } from "react"
import styles from "./Cursor.module.css"

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)

    const onMouseMove = useCallback(
        (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
            if (!isVisible) setIsVisible(true)
        },
        [isVisible],
    )

    const onMouseLeave = useCallback(() => {
        setIsVisible(false)
    }, [])

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mouseleave", onMouseLeave)
        return () => {
            document.removeEventListener("mousemove", onMouseMove)
            document.removeEventListener("mouseleave", onMouseLeave)
        }
    }, [onMouseMove, onMouseLeave])

    if (!isVisible) return null

    return (
        <>
            <div
                className={styles.cursorDot}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
            <div
                className={styles.cursorCircle}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
        </>
    )
}

export default Cursor
