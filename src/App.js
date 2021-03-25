import { Display } from './DisplayCalc.js';

const App = {
  init() {
    App.start();
  },

  start() {
    const textState = document.querySelector("#textState");
    const btn = document.querySelector("#btn-state");

    btn.addEventListener('click', () => {
      textState.classList.toggle("on");

      // state == class Element
      const state = textState.classList[0];
      const time = Display.idTime;

      if (state) {
        btn.textContent = "close";
        Display.displayInfos({ state, time });

      } else {
        btn.textContent = "ligar";
        Display.displayInfos({ state, time });
      }
      
    });

  }
}

App.init();