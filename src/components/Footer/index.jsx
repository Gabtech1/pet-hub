import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/petlogo.png';
import Wpp from '../../../public/wpp.avif';

export default function Footer() {
    return (
        <footer id='contact' className={styles.footer}>
            <h3>Entre em contato</h3>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src={Logo} alt="Pet Hub Logo" />
                </div>
                <div className={styles.contact}>
                    <ul>
                        <li><Link className={styles.wpp} href="https://whatsa.me/5511961888357/?t=..." target="_blank"><Image src={Wpp} alt='whatsapp icon' />(11)9 98765-4321</Link>
                        </li>
                        <li>contato@pethub.com</li>
                        <li>Rua pet, 77 - HubCity</li>
                        <li>Itatiba - SP</li>
                    </ul>
                </div>
                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46444.6223361908!2d-46.82926215!3d-22.99726725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf2a851d59a719%3A0x1993f2010972ec6d!2sItatiba%2C%20SP!5e1!3m2!1spt-BR!2sbr!4v1749419944131!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
            </div>
            <Link className={styles.copy} href='https://www.gabdev.com.br/' target='_blank'>Pet Hub  © copyright 2025 - desenvolvido por <span>Gabdev</span></Link>
        </footer>
    )
}