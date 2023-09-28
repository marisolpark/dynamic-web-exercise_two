
"use client";
import Link from "next/link"

import styles from "./articleCard.module.css"

const ArticleCard = ({description, title, link, date, id, imageSrc, imgAlt}) => {
    return (
        <div className={styles.articleCard}>
            <div className={styles.articleCardImg}>
                <img src={imageSrc} alt={imgAlt}/>
            </div>
                <div className={styles.articleCardCont}>
                <h2 className={styles.articleTitle}>{title}</h2>
                <h4 className={styles.articleDate}>{date}</h4>
                <p className={styles.articleDes}>{description}</p>
                <p><Link href={`article/${id}`}>Read More</Link></p>
            </div>
            
        </div>
    );
};

export default ArticleCard;