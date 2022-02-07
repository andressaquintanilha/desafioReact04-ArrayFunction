//Crie um component de class
// Crie uma arrow function que receba uma mensagem e exiba na tela
// Crie uma arrow function que retorne o dobro de um número e exiba na tela

import React, { Component } from "react";

class desafioreact extends Component {
  mensagem = () => {
    return "Você concluiu o Desafio React 04 - Arraw Function!";
  };
  calculadobro = (x) => {
    return x * 2;
  };
  render() {
    return (
      <div>
        <h1>Desafio React - 04 - Arraw function</h1>
        <p>{this.mensagem()}</p>
        <p>O dobro do número escolhido é: {this.calculadobro(4)}.</p>
      </div>
    );
  }
}
export default desafioreact;
