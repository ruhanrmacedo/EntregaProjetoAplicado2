function mostrarLista() {
    var lista = document.getElementById("list");
    if (lista.style.display === "none") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
}