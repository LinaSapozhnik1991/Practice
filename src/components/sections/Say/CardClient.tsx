import React from 'react';
import styles from './CardClient.module.css';

interface CardProps {
    title: string;
    text: string;
    content: string;
}

const CardClient: React.FC<CardProps> = ({ title, text, content }) => {
    return (
        <div className={styles.cards}>
            <div className={styles.cardHeader}>
            <div className={styles.card_title}>{title}</div>
            <div className={styles.card_text}>{text}</div>
            </div>
            <div className={styles.card_line}></div>
            <div className={styles.card_content}>{content}</div>
        </div>
    );
}

export default CardClient;