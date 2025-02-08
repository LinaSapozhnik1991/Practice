import Image from 'next/image';
import barcodeG from '../../assets/barcodeG.png';
import styles from '../sections/Feature/FeatureList.module.css'

const Barcode = () => {
    return (
        <div>
            <Image className={styles.barcodeG} src={barcodeG} alt='barcode' />
            </div>
    );
};

export default Barcode;
