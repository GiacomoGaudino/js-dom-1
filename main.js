const lampOffEl = document.getElementById("lampOff");
const turnOnOffEl = document.getElementById("turnOnOff");
turnOnOffEl.style.backgroundColor = "lawngreen";
turnOnOffEl.style.padding = "0.5rem";
turnOnOffEl.style.borderRadius = "15%";


turnOnOffEl.addEventListener(`click`, function () {
    if (turnOnOffEl.innerHTML.includes("Accendi")) {
        lampOffEl.setAttribute("src", "./img/yellow_lamp.png")
        turnOnOffEl.innerHTML = "Spegni";
        turnOnOffEl.style.backgroundColor = "red";
        turnOnOffEl.style.color = "white";
    } else {
        lampOffEl.setAttribute("src", "./img/white_lamp.png");
        turnOnOffEl.innerHTML = "Accendi";
        turnOnOffEl.style.backgroundColor = "lawngreen";
        turnOnOffEl.style.color = "black";
    }
})

