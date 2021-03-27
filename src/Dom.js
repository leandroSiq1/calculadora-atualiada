import { Calculator } from './Calculator.js';

const DOM = {

  spanHistory: document.querySelector("#history"),
  h1Sum: document.querySelector("#sum"),

  addEvents() {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
      button.addEventListener('click', DOM.formatButtonNumber);
    }); 
  },

  formatButtonNumber(button) {
    const btn = button.target.id.split("-");
    const btnFomat = btn[1];

    Calculator.validateKeyNumber(btnFomat);
  },

  updateDisplay() {
    // percorrer o array allNumber
    // atualizar o display com a soma

    this.h1Sum.innerHTML = Calculator.allNumbers[0];

    // console.log(this.allNumbers);
    // console.log(this.lastNumber);

  },

};

export { DOM };