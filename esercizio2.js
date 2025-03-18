let timer = document.getElementById("timer")

let timerValue = parseInt(sessionStorage.getItem("timer")) || 0

// Aggiorno l'HTML con l'ultimo valore salvato
timer.innerText = timerValue
//controllo
console.log(timerValue)

window.onload = function () {
  const interval = setInterval(() => {
    if (timerValue >= 100) {
      clearInterval(interval)
    } else {
      timerValue = timerValue + 1
      timer.innerText = timerValue
      timerStorato = sessionStorage.setItem("timer", timerValue)
      sessionStorage.setItem("timer", timerValue)
      if (timerValue % 2 !== 0) {
        body.classList.remove("bg-black")
        body.classList.add("bg-white")
        timer.classList.remove("text-white")
        timer.classList.add("text-black")
      } else {
        body.classList.remove("bg-white")
        body.classList.add("bg-black")
        timer.classList.remove("text-black")
        timer.classList.add("text-white")
      }
    }
  }, 1000)
  const body = document.querySelector("body")
}
