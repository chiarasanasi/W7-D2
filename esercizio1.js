const nameInput = document.getElementById("name")

//SAVE BUTTON
const saveButton = document.getElementById("save")
saveButton.addEventListener("click", function (e) {
  e.preventDefault()
  //recupo contenuto nameInput
  const name = nameInput.value

  //notifico all'utente tramite un alert che l'invio è andato a buon fine
  if (nameInput.value) {
    //salvo il nome in localeStorage
    localStorage.setItem("Nome", name)

    const saveAlert = document.getElementById("save-alert")

    // -----RESET PRECEDENTE ANIMAZIONE-----
    saveAlert.classList.remove("alert-coming")
    saveAlert.classList.remove("alert-going")
    saveAlert.classList.add("invisible")
    // -----RESET PRECEDENTE ANIMAZIONE-----

    saveAlert.classList.remove("invisible")
    saveAlert.classList.add("alert-coming")

    setTimeout(function () {
      saveAlert.classList.add("alert-going")
    }, 2200)
    nameInput.value = ""
  } else {
    const warningAlter = document.getElementById("warning-alert")

    // -----RESET PRECEDENTE ANIMAZIONE-----
    warningAlter.classList.remove("alert-coming")
    warningAlter.classList.remove("alert-going")
    warningAlter.classList.add("invisible")
    // -----RESET PRECEDENTE ANIMAZIONE-----

    warningAlter.classList.remove("invisible")
    warningAlter.classList.add("alert-coming")

    setTimeout(function () {
      warningAlter.classList.add("alert-going")
    }, 2200)
  }
})

//DELETE BUTTON
const deleteButton = document.getElementById("delete")
deleteButton.addEventListener("click", function (e) {
  e.preventDefault()

  if (localStorage.getItem("Nome")) {
    localStorage.removeItem("Nome")

    const dangerAllert = document.getElementById("danger-alert")

    // -----RESET PRECEDENTE ANIMAZIONE-----
    dangerAllert.classList.remove("alert-coming")
    dangerAllert.classList.remove("alert-going")
    dangerAllert.classList.add("invisible")
    // -----RESET PRECEDENTE ANIMAZIONE-----

    dangerAllert.classList.remove("invisible")
    dangerAllert.classList.add("alert-coming")

    setTimeout(function () {
      dangerAllert.classList.add("alert-going")
    }, 2200)
  } else {
    const infoAllter = document.getElementById("info-alert")

    // -----RESET PRECEDENTE ANIMAZIONE-----
    infoAllter.classList.remove("alert-coming")
    infoAllter.classList.remove("alert-going")
    infoAllter.classList.add("invisible")
    // -----RESET PRECEDENTE ANIMAZIONE-----

    infoAllter.classList.remove("invisible")
    infoAllter.classList.add("alert-coming")

    setTimeout(function () {
      infoAllter.classList.add("alert-going")
    }, 2200)
  }
})
