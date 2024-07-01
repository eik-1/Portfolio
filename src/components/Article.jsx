function Article({ thumbnail, title, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div>
                <img src={thumbnail} alt={title} loading="lazy" />
                <p>{title}</p>
            </div>
        </a>
    )
}

export default Article
