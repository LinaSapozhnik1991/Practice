import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';
import arrow from '../assets/vectorArrow/arrow.png'; 
import styles from '../style/NavBar.module.css'; 

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo}>
        SCHRIFT
          <Image src={arrow} alt="Arrow" className={styles.arrow} />
        </Link>
      </div>
      <ul className={styles.menu}>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/contact" className={styles.talkLink}>
            LET’S TALK
            <Image src={arrow} alt="Arrow" className={styles.arrowSmall} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
