const Display = {

  idTime: null,
  
  displayInfos({ state, time }) {
    const display = document.querySelector("#display");
    
    if (state) {
      display.style.display = "initial";
      Display.setDateHours();
      
      Display.idTime = setInterval(() => {
        Display.setDateHours();
      }, 1000);

    } else {
      const displayDate = document.querySelector("#date");
      const displayTime = document.querySelector("#time");

      display.style.display = "none";
      displayDate.innerHTML = "";
      displayTime.innerHTML = "";
      clearInterval(time);
    }
  },

  setDateHours() {
    const displayDate = document.querySelector("#date");
    const displayTime = document.querySelector("#time");

    const date = new Date;
    const dateCurrent = date.toLocaleDateString('pt-br', { month: '2-digit', day: 'numeric' });
    const timeCurrent = date.toLocaleTimeString('pt-br');

    displayDate.innerHTML = dateCurrent;
    displayTime.innerHTML = timeCurrent;
  }

}

export { Display };