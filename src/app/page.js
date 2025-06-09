'use client'
import { useEffect } from "react";
import Image from "next/image";
import Quality from '../../public/quality.png';
import Garantia from '../../public/garantia.png';
import Price from '../../public/price.png';
import Transparencia from '../../public/trans.png';
import Fidelidade from '../../public/fidelidade.png';
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Cliente1 from '../../public/c1.webp';
import Cliente2 from '../../public/c2.webp';
import Cliente3 from '../../public/c3.webp';
import Cliente4 from '../../public/c4.webp';
import FAQ from "@/components/FAQ";

export default function Home() {
  // Animations on scroll
  useEffect(() => {
    function initAnimScroll() {
      const elements = document.querySelectorAll('.animScroll, .animScroll2');

      if (elements.length) {
        const halfWindow = window.innerHeight * .6;
        function scroll() {
          elements.forEach((el) => {
            const elTop = el.getBoundingClientRect().top - halfWindow;
            if (elTop < 0) {
              el.classList.add('active');
            }
          })
        }

        scroll();

        window.addEventListener('scroll', scroll);
      }
    }
    initAnimScroll()
  }, []);

  return (
    <div className={styles.container}>
      <Hero />
      <About />
      <div className={styles.vantagens}>
        <h3>Confira algumas de nossas vantagens</h3>
        <ul>
          <li className={styles.desc}><Image src={Quality} alt="Icon" />Qualidade</li>
          <li className={styles.desc}><Image src={Garantia} alt="Icon" />Garantia de Satisfação</li>
          <li className={styles.desc}><Image src={Price} alt="Icon" />Preços justos</li>
          <li className={styles.desc}><Image src={Transparencia} alt="Icon" />Transparência</li>
          <li className={styles.desc}><Image src={Fidelidade} alt="Icon" />Programa de fidelidade</li>
        </ul>
      </div>
      <Products />
      <div className={styles.vantagens}>
        <h3>Nossos clientes recomendam Pet Hub!</h3>
        <ul>
          <li><Image className={styles.cliente} src={Cliente1} alt="Foto do pet dos clientes" /></li>
          <li><Image className={styles.cliente} src={Cliente2} alt="Foto do pet dos clientes" /></li>
          <li><Image className={styles.cliente} src={Cliente3} alt="Foto do pet dos clientes" /></li>
          <li><Image className={styles.cliente} src={Cliente4} alt="Foto do pet dos clientes" /></li>
        </ul>
      </div>
      <FAQ />
    </div>
  );
}
