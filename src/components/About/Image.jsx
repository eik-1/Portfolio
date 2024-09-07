import styles from "./Image.module.css"
import { myPic } from "../../assets"

function Image() {
    return (
        <div className={styles.imageWrapper}>
            <img src={myPic} alt="myPic" className={styles.image} />
        </div>
    )
}

export default Image
