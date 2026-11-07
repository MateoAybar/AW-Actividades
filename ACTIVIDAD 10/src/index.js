//Estrucuturas condicionales 

// 1.1
let edad = 20;
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// 1.2
let numero = 7;
if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

// 1.3
let nota = 8;
if (nota < 4) {
    console.log("Reprobado");
} else if (nota <= 7) {
    console.log("Aprobado");
} else {
    console.log("Excelente");
}

// 2. ESTRUCTURAS DE CONTROL BUCLES

// 2.1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2.2
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 2.3
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

// 2.4
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}