import styles from './Products.module.css';
import Image from 'next/image';
import Food from '../../../public/food.webp';
import Shampoo from '../../../public/shampoo.webp';
import Neck from '../../../public/neck.webp';
import Toys from '../../../public/toys.webp';
import Rope from '../../../public/Rope.webp';
import Bed from '../../../public/Bed.webp';

export default function Products() {
    return (
        <section id='products' className={styles.container}>
            <h3>Linha exclusiva de produtos</h3>
            <div className={styles.galery}>
                <div className={`${styles.item} animScroll `}>
                    <Image className={styles.pic} src={Food} alt='Prato' />
                    <h3>Prato Pet Hub</h3>
                    <p>Feito com materiais de alta qualidade.</p>
                </div>

                <div className={`${styles.item} animScroll `}>
                    <Image className={styles.pic} src={Shampoo} alt='Shampoo' />
                    <h3>Shampoo</h3>
                    <p>Shampoo Pet Hub, feito com ingredientes naturais.</p>
                </div>

                <div className={`${styles.item} animScroll `}>
                    <Image className={styles.pic} src={Neck} alt='Coleira' />
                    <h3>Coleira</h3>
                    <p>Coleira feito com materiais resistentes e confortáveis.</p>
                </div>

                <div className={`${styles.item} animScroll2 `}>
                    <Image className={styles.pic} src={Toys} alt='Brinquedo anti-stress' />
                    <h3>Brinquedo anti-stress</h3>
                    <p>Brinquedo anti-stress para cães, feito com materiais seguros.</p>
                </div>

                <div className={`${styles.item} animScroll2 `}>
                    <Image className={styles.pic} src={Rope} alt='Guia para passeio' />
                    <h3>Guia para passeio</h3>
                    <p>Guia para passeio, resistente para sua segurança.</p>
                </div>

                <div className={`${styles.item} animScroll2 `}>
                    <Image className={styles.pic} src={Bed} alt='Cama para pet' />
                    <h3>Cama para pet</h3>
                    <p>Cama Pet Hub, feita com materiais confortáveis e duráveis.</p>
                </div>
            </div>
        </section>
    );
}      