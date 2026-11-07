//Array 

// 1.1
let numeros = [];
for (let i = 0; i < 5; i++) {
    numeros.push(prompt("Ingresá un número"));
}
console.log(numeros);

// 1.2
let impares = [];
for (let i = 0; i < 5; i++) {
    let num = prompt("Ingresá un número");
    if (num % 2 !== 0) {
        impares.push(num);
    }
}
console.log(impares);

// 1.3
let frutas = ["pera", "manzana", "banana", "durazno"];
frutas.forEach((fruta, i) => {
    frutas[i] = fruta.toUpperCase();
});
console.log(frutas);

// 1.4
let frutas2 = ["pera", "manzana", "banana", "durazno"];
let frutasMayus = frutas2.map((fruta) => fruta.toUpperCase());
console.log(frutasMayus);

// 1.5
let frutas3 = ["pera", "manzana", "banana", "durazno"];
let frutasNa = frutas3.filter((fruta) => {
    if (fruta.includes("na")) {
        return true;
    }
});
console.log(frutasNa);


//Objetos


// 2.1
let producto = {
    nombre: "Remera",
    precio: 15000,
    stock: 10,
    talles: ["s", "m", "l"]
};

// 2.2
let productos = [
    { nombre: "Remera", precio: 15000, stock: 3, talles: ["s", "m", "l"] },
    { nombre: "Buzo", precio: 35000, stock: 8, talles: ["s", "m", "l"] },
    { nombre: "Jean", precio: 40000, stock: 12, talles: ["s", "m", "l"] },
    { nombre: "Campera", precio: 60000, stock: 2, talles: ["s", "m", "l"] }
];

productos.forEach((producto) => {
    if (producto.stock < 5) {
        console.log(producto);
    }
});

// 2.3
let productosDescuento = productos.map((producto) => {
    return { nombre: producto.nombre, precio: producto.precio * 0.9, stock: producto.stock, talles: producto.talles };
});
console.log(productosDescuento);

// 2.4
let productosStock = productos.filter((producto) => producto.stock > 10);
console.log(productosStock);