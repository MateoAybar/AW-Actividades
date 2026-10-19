function saludar() {
    console.log("¡Hola, bienvenido!");
}


function saludarPersona(nombre) {
    console.log(`¡Hola ${ nombre }, bienvenido!`);
}


function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

 
saludar();
saludarPersona("Mateo");
let resultadoMayor = esMayorDeEdad(20);
console.log(`¿Es mayor de edad(20) ? ${ resultadoMayor }`);

const esMayorDeEdadFlecha = (edad) => edad >= 18;


const compararNumeros = (num1, num2) => {
    if (num1 < num2) {
        console.log(`El número ${ num1 } es menor que ${ num2 }`);
    } else if (num1 === num2) {
        console.log(`El número ${ num1 } es igual que ${ num2 }`);
    } else {
        console.log(`El número ${ num1 } es mayor que ${ num2 }`);``
    }
};

console.log(`¿Es mayor de edad(16)? ${ esMayorDeEdadFlecha(16) }`);



for (let indice = 1; indice <= 5; indice++) {
    compararNumeros(indice, 3);
}


const operacion = (num1, num2, cb) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log("Debe ingresar solo números.");
        return; 
    }

    cb(num1, num2);


};

const suma = (a, b) => {
    let resultado = a + b;
    console.log(`El resultado de la suma es ${ resultado }`);
};

const resta = (a, b) => {
    let resultado = a - b;
    console.log(`El resultado de la resta es ${ resultado }`);
};

operacion(10, 5, suma);
operacion(10, 5, resta);

operacion(10, "cinco", suma);