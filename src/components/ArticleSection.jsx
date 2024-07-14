import React, { useEffect, useState } from "react"

import Article from "./Article"
import styles from "./ArticleSection.module.css"

function ArticleSection() {
    const [posts, setPosts] = useState([])
    const username = "sarthakrawatbiz"
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`,
                )
                const data = await response.json()
                const items = data.items || []
                const postsWithImages = items.map((post) => {
                    const imageSrc = post.description.match(
                        /<img[^>]+src="([^">]+)/,
                    )?.[1]
                    return { ...post, imageSrc }
                })
                setPosts(postsWithImages)
            } catch (error) {
                console.error("Error fetching blog posts:", error)
                setPosts(["EROOR"])
            }
        }
        fetchPosts()
    }, [])

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>
                <span className={styles.titleWord}>Latest</span>{" "}
                <span className={styles.titleWord}>Articles</span>
            </h1>
            <div className={styles.postsWrapper}>
                {posts.slice(0, 6).map((post, index) => (
                    <Article key={index} {...post} index={index} />
                ))}
            </div>
        </div>
    )
}

export default ArticleSection
