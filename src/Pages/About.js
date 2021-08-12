import React, { Component } from 'react';
import FotoTrybe from '../images/FotoTrybe.jpeg';

export default class About extends Component {
  render() {
    return (
      <div className="about-me-father" >
        <div><h1 className="my-name">Natalia de Souza Ribeiro</h1></div>
        <div className="about-me">
          <p>Meu nome é Natalia, tenho 31 anos, moro em Itajubá-MG, Brasil.
            Atualmente, estou em transição de carreira, estudando Desenvolvimento Web na Trybe.
            Sou formada em Engenharia de Produção e Mestra em Engenharia de Energia.
          </p>
        </div>
        <div className="my-image">
          <img className="profile-img" src={FotoTrybe} alt="foto de Natalia" width="300px" />
        </div>
        {/* <div> */}
        <div>
          <h3>Habilidades Técnicas:</h3>
          <ul className="habilities">
            <li>Unix e Bash;</li>
            <li>Git e GitHub;</li>
            <li>CSS, HTML e JavaScript;</li>
            <li>JavaScript ES6 e Testes Unitários;</li>
            <li>React, React Testing Library e Redux;</li>
            <li>Context API e Hooks;</li>
          </ul>
          {/* </div> */}
          <h3>Soft Skills</h3>
          <ul className="habilities">
            <li>Flexibilidade;</li>
            <li>Aprender a aprender;</li>
            <li>Trabalho em equipe;</li>
            <li>Compreensão interpessoal e empatia;</li>
            <li>Comunicação;</li>
            <li>Colaboração;</li>
          </ul>
        </div>
      </div>
    )
  }
}

// git: https://github.com/NataliaSRiber
// linkedin: https://www.linkedin.com/in/natalia-souza-559761206/