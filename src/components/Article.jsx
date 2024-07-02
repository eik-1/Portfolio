import React from "react"
import styles from "./Article.module.css"

function Article({ imageSrc, title, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
        >
            <div className={styles.imageWrapper}>
                <img src={imageSrc} alt={title} loading="lazy" />
            </div>
            <p
                className={styles.articleTitle}
                dangerouslySetInnerHTML={{ __html: title }}
            />
        </a>
    )
}

export default Article
