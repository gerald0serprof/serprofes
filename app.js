function enviarPrompt(event) {
    event.preventDefault();

    let mensaje = document.getElementById('mensaje-input').value.trim();

    if (mensaje === "") {
        alert("⚠️¡Error! Debe escribir algo primero");
    } else {
        alert("🤖 Mensaje recibido:\n" + mensaje);
        document.getElementById('mensaje-input').value="";
    }

}

function animacion(elemento) {
    const logo = document.getElementById("logo");

    logo.addEventListener("pointerover", () => {
        logo.style.transform = "scale(1.1)";
        setTimeout(() => {
            elemento.style.backgroundColor = "green";
        }, 500);
    });

    logo.addEventListener("pointerout", () => {
        logo.style.transform = "scale(1)";
        setTimeout(() => {
            elemento.style.backgroundColor = "transparent";
        }, 500);
    });

    
}