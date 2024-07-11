import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styles from "./SkillsList.module.css"

gsap.registerPlugin(ScrollTrigger)

const SkillsList = ({ skills }) => {
    const componentRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: componentRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 4,
                },
            })

            tl.fromTo(
                `.${styles.skillRow}`,
                {
                    x: (index) =>
                        index % 2 === 0
                            ? gsap.utils.random(600, 400)
                            : gsap.utils.random(-600, -400),
                },
                {
                    x: (index) =>
                        index % 2 === 0
                            ? gsap.utils.random(-600, -400)
                            : gsap.utils.random(600, 400),
                    ease: "power1.inOut",
                },
            )
        }, componentRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={componentRef} className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Techstack</h2>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={styles.skillRow}
                        aria-label={skill.name}
                    >
                        {Array.from({ length: 15 }, (_, i) => (
                            <React.Fragment key={i}>
                                <span
                                    className={styles.skillName}
                                    style={{
                                        color:
                                            i === 7 ? skill.color : "inherit",
                                        opacity: i === 7 ? 1 : 0.5,
                                    }}
                                >
                                    {skill.name}
                                </span>
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillsList
