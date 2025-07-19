const lampOffEl = document.getElementById("lampOff");
const turnOnOffEl = document.getElementById("turnOnOff");

turnOnOffEl.addEventListener(`click`, function () {
    if (turnOnOffEl.innerHTML.includes("Accendi")) {
        lampOffEl.setAttribute("src", "./img/yellow_lamp.png")
        turnOnOffEl.innerHTML = "Spegni";
    } else {
        lampOffEl.setAttribute("src", "./img/white_lamp.png");
        turnOnOffEl.innerHTML = "Accendi";
    }
})

