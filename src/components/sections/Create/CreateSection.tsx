import React from 'react';
import Link from 'next/link';
import styles from './CreateSection.module.css';
import Image from 'next/image';
import arrowUp from '../../../assets/vectorArrow/arrowUp.png';
const CreateSection: React.FC = () => {
    return (
        <div className={styles.createSection}>
            <div className={styles.create_head_menu}>
                <ul className={styles.contacts_menu}>
                    <li><Link href="https://dribbble.com" target="_blank" rel="noopener noreferrer">DRIBBBLE</Link></li>
                    <li><Link href="https://www.behance.net" target="_blank" rel="noopener noreferrer">BEHANCE</Link></li>
                    <li><Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</Link></li>
                    <li><Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">TWITTER</Link></li>
                </ul>
                <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo}>
        SCHRIFT
        </Link>
      </div>
            </div>
<div className={styles.create_title}>
    <h2> <span>CREATE BOLD</span><br/>IDEAS TOGETHER</h2>
    <p>HELLO@SCHRIFT.COM</p>
</div>
    <div className={styles.create_footer}>
        <p>© Copyright Schrift 2024</p>
        <Image src={arrowUp} alt='arrow'/>
    </div>
        </div>
    );
};

export default CreateSection