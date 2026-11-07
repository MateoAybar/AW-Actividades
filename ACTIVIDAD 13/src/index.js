
let contador = document.querySelector("nav span");
let boton = document.querySelector("button");


let cantidad = localStorage.getItem("cantidad") || 0;
contador.textContent = cantidad;


boton.addEventListener("click", () => {
    cantidad++;
    contador.textContent = cantidad;
    localStorage.setItem("cantidad", cantidad);
});