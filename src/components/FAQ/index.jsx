'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "O Pet Hub atende quais tipos de animais de estimação?",
            answer: "No Pet Hub, somos apaixonados por todos os tipos de pets! Nossos serviços e produtos são especialmente desenvolvidos para cães e gatos de todas as raças, portes e idades. Em breve, esperamos expandir para atender também outros amiguinhos, como aves e pequenos roedores!"
        },
        {
            question: "Quais serviços de banho e tosa vocês oferecem e quais produtos são utilizados?",
            answer: "Oferecemos uma variedade de serviços de banho e tosa, incluindo banho completo (com produtos específicos para cada tipo de pelo e pele), tosa higiênica, tosa da raça e hidratação. Utilizamos apenas produtos de alta qualidade, hipoalergênicos e aprovados por veterinários, garantindo a segurança e o bem-estar do seu pet durante todo o processo."
        },
        {
            question: "Vocês oferecem serviço de 'leva e traz' para o banho e tosa?",
            answer: "Sim! Para sua maior comodidade, o Pet Hub oferece o serviço de 'Táxi Dog' (leva e traz) para o banho e tosa. Consulte nossa equipe para verificar a disponibilidade e as áreas de atendimento. Seu pet viaja com segurança e conforto até o nosso espaço!"
        },
        {
            question: "O Pet Hub possui clínica veterinária ou oferece consultas no local?",
            answer: "O Pet Hub foca em oferecer a melhor experiência em produtos e serviços de estética e bem-estar para o seu pet. Atualmente, possuímos clínica veterinária e oferecemos consultas médicas no local e pequenas cirurgias."
        },
        {
            question: "Como faço para agendar um serviço ou tirar dúvidas sobre os produtos?",
            answer: "É super fácil! Você pode agendar nossos serviços de banho e tosa, ou tirar dúvidas sobre qualquer um dos nossos produtos, através do nosso telefone (11) 98765-4321, pelo nosso e-mail contato@pethub.com.br, ou diretamente pelo nosso site na seção de 'Contato'. Estamos sempre prontos para atender você e seu pet!"
        }
    ];

    return (
        <>
            <h1 className={styles.title}>Perguntas frequentes</h1>
            <div className={styles.faq_container}>
                {faqs.map((faq, index) => (
                    <div key={index} className={`${styles.faq} ${activeIndex === index ? styles.active : ''}`}>
                        <h3 className={styles.ask}>{faq.question}</h3>
                        {activeIndex === index && (
                            <p className={styles.answer}>{faq.answer}</p>
                        )}
                        <button onClick={() => toggle(index)} className={styles.btn}>
                            {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

