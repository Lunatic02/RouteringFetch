import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre" />
      <img src={foto} alt="Maquina de escrever" />
      <div>
        <h1>Entre em Contato.</h1>
        <ul className={styles.dados}>
          <li>Lucas_hcosta@live.com</li>
          <li>@lucas_Torresin</li>
          <li>Rua dos bobos, 0</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
