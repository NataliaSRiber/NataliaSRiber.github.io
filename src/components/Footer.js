import React, { Component } from 'react';
import linkedin from '../images/linkedin.png';
import git from '../images/git.png';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <a href="https://github.com/NataliaSRiber/" target="blank">
            <img className="linkedin" src={git} alt="linkedin"></img>
          </a>
          <a href="https://www.linkedin.com/in/natalia-souza-559761206/" target="blank">
            <img className="linkedin" src={linkedin} alt="linkedin"></img>
          </a>
        </div>
        <p id="copyright">Copyright© 2021, Natalia de Souza Ribeiro. Todos os direitos reservados.</p>
      </footer>
    )
  }
}
