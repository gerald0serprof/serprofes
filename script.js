let miBoton = document.getElementById("theme-toggle");
let elCuerpo = document.body;

miBoton.addEventListener("click", function(){
    elCuerpo.classList.toggle("bright-mode");
    miBoton.textContent = "Dark Mode";

    if (elCuerpo.classList.contains("bright-mode")){
        miBoton.textContent = "🌙Dark Mode";
    } else {
        miBoton.textContent = "☀️Bright Mode";
    }

});