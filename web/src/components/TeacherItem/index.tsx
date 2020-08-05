import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://pbs.twimg.com/profile_images/900428598456315905/p7pD-4GT_400x400.jpg" alt="Amanda da Costa"/>
        <div>
          <strong>Amanda da Costa</strong>
          <span>História</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        quis excepturi vel repellendus corrupti eos, labore natus, harum
        <br /><br />
        dicta expedita cumque nihil quod. Ipsum tempora, illo explicabo 
        repellat autem accusantium.
      </p>

      <footer>
        <p>
          Preço / Hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
        <img src={whatsappIcon} alt="whatsapp"/>
        Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;