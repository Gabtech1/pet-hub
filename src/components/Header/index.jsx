'use client';
import { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/petlogo.png';

export default function Header() {
    const [on, setOn] = useState(false);
    const toggleMenu = () => {
        setOn(!on);
    };

    return (
        <header className={styles.header}>
            <Link href='/' className={styles.logo}>
                <Image className={styles.logo} src={Logo} alt="Pet Hub Logo" />
            </Link>

            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={`${styles.bar} ${on ? styles.barOpen : ''}`}></div>
                <div className={`${styles.bar} ${on ? styles.barOpen : ''}`}></div>
                <div className={`${styles.bar} ${on ? styles.barOpen : ''}`}></div>
            </div>

            <nav onClick={toggleMenu} className={`${styles.navbar} ${on ? styles.active : ''}`}>
                <Link className={styles.navlinks} href='/'>Home</Link>
                <Link className={styles.navlinks} href='/#about'>Serviços</Link>
                <Link className={styles.navlinks} href='/#products'>Produtos</Link>
                <Link className={styles.navlinks} href='/#contact'>Contato</Link>
            </nav>
        </header>
    );
}