import { DOM } from './Dom.js';

const Calculator = {

  allNumbers: [],
  lastNumber: [],
  history: [],
  operator: [],

  addKey(number) {

    if (Calculator.allNumbers.length === 0) {
      Calculator.allNumbers.push(number);
    } else {
      const newNumber = Calculator.allNumbers[0] + number;
      Calculator.allNumbers.pop();
      Calculator.allNumbers.push(newNumber);
    }

    if (Calculator.lastNumber.length === 0) {
      Calculator.lastNumber.push(number);   

    } else if (Calculator.lastNumber.length === 1) {
      Calculator.lastNumber.pop();
      Calculator.lastNumber.push(number);
    }
    
    DOM.updateDisplay();
  },

  validateKeyNumber(key) {
    const currentKey = String(key);
    // para fazer a validação
    const validate = currentKey.split("").length;

    if (validate === 1 && currentKey !== "ca") {
      switch (currentKey) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
          Calculator.addKey(currentKey);
        break;
        default:
          console.error("Ocorreu algum erro :(");
        break;
      }
    } else {
      // tratar os botões de operação

      console.log("To aqui");
    }
  }

};

export { Calculator };