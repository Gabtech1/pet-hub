import styles from './About.module.css';
import Banho from '../../../public/banho.webp';
import Train from '../../../public/train.webp';
import Vet from '../../../public/vet.webp';
import Products from '../../../public/products.webp';

export default function About() {
    return (
        <section id='about' className={styles.about}>
            <h2>O que oferecemos</h2>
            <div className={styles.container}>
                <div
                    className={`${styles.card} animScroll `}
                    style={{ backgroundImage: `url(${Banho.src})` }}>
                    <p className={styles.info}>Limpeza e hidratamento de seu pet, com produtos específicos para cada tipo de pelo e pele. <br></br>Corte e modelagem do pelo, seja por estética específica de raça ou tosa higiênica</p>
                    <h3>Banho e tosa</h3>
                </div>
                <div
                    className={`${styles.card} animScroll `}
                    style={{ backgroundImage: `url(${Train.src})` }}>
                    <p className={styles.info}>Treinamento de obediência básica, socialização e resolução de problemas comportamentais. <br></br>Adestramento personalizado para atender às necessidades específicas do seu pet.</p>
                    <h3>Adestramento</h3>
                </div>
                <div
                    className={`${styles.card} animScroll2 `}
                    style={{ backgroundImage: `url(${Vet.src})` }}>
                    <p className={styles.info}>Consultas de rotina, vacinação, exames laboratoriais e cirurgias. <br></br>Atendimento especializado para cães, gatos e outros animais de estimação.</p>
                    <h3>Consultório veterinário</h3>
                </div>
                <div
                    className={`${styles.card} animScroll2 `}
                    style={{ backgroundImage: `url(${Products.src})` }}>
                    <p className={styles.info}>Variedade de produtos para pets, incluindo ração, brinquedos, acessórios e produtos de higiene. <br></br>Produtos exclusivos e de alta qualidade para atender às necessidades do seu pet.</p>
                    <h3>Produtos exclusivos</h3>
                </div>
            </div>
        </section>
    );
}