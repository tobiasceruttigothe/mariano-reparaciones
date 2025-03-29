document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  
    document.getElementById("mensaje-exito").classList.remove("oculto");
    setTimeout(() => {
        document.getElementById("mensaje-exito").classList.add("oculto");
    }, 3000);
    this.reset();
});
