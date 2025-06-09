import styles from './Hero.module.css';
import Image from 'next/image';
import Home from '../../../public/home.png';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`${styles.heroContent} animScroll `}>
                <h1>Bem vindos ao Pet Hub</h1>
                <p className={styles.heroDescription}>Aqui você encontra tudo o que seu melhor amigo precisa!</p>
                <div className={styles.heroButtons}>
                    <Link href='/#about'>Serviços</Link>
                    <Link href='/#contact' className={styles.contactBtn}>Entre em contato</Link>
                </div>
            </div>
            <div className={`${styles.right} animScroll2 `}>
                <Image className={styles.heroImg} src={Home} alt='imagem de um cachorro' />
            </div>
        </section>
    );
}