import React, { useEffect, useRef, useState } from "react"
import ShootingStars from "./ShootingStars"
import { StarsBackground } from "../StarsBackground"

const SpaceBackground = () => {
    const [isVisible, setIsVisible] = useState(true)
    const backgroundRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            },
        )

        if (backgroundRef.current) {
            observer.observe(backgroundRef.current)
        }

        return () => {
            if (backgroundRef.current) {
                observer.unobserve(backgroundRef.current)
            }
        }
    }, [])

    return (
        <div
            ref={backgroundRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: -1 }}
        >
            {isVisible && (
                <>
                    <ShootingStars />
                    <StarsBackground />
                </>
            )}
        </div>
    )
}

export default SpaceBackground
