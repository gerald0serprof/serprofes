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