import {type CardProps } from "@interfaces/card";
import styles from "./Card.module.css";

export const Card = ({imgUrl, imgAlt, title, content, price}: CardProps) => {
  return (
    <>
    <div className={styles.card}>
        <div className={styles.imgContainer}>
            <img src={imgUrl} alt={imgAlt}  className={styles.cardImage}/>            
        </div>
        <div className={styles.cardContent} >
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardContent}>{content}</p>
            <p className={styles.cardPrice}>${price.toFixed(2)}</p>
        </div>
    </div>
    </>
  )
}
