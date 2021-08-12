import React, { Component } from 'react';
import FotoTrybe from '../images/FotoTrybe.jpeg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="my-name"> Natalia de Souza Ribeiro</h1>
        <p className="par">Olá, Bem-Vindo ao meu Portifólio!!</p>
        <img className="profile-img" src={ FotoTrybe } alt="foto de Natalia" width="300px"/>
      </div>

    )
  }
}
