import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/62779976?s=400&u=98b5b2931bfc76a84560e1c1453a3cc92c25b96f&v=4"
          alt="Pablo Campina"
        />

        <div>
          <strong>Pablo Campina</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <br />
        <br />
        Delectus non debitis qui eos perferendis id, praesentium impedit
        perspiciatis.
      </p>

      <footer>
        <p>
          Preço/hora:
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
