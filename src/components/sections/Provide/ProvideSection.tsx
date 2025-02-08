import React from 'react';
import styles from './ProvideSection.module.css';
import Services from './Services';

const ProvideSection: React.FC = () => {
    return (
        <div className={styles.provide} id='services'>
<h2 className={styles.provide_title}>
    WHAT WE PROVIDE
</h2>
<p>we transform ideas into impactful designs. From brand identities<br/> to digital experiences, our services blend creativity and strategy<br/> to make your vision stand out</p>
    <Services/>
    </div>
    );
};

export default ProvideSection;