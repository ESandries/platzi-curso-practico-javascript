// Código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log(`los lados de cuadrado miden: ${ladoCuadrado} cm`);

function perimetroCuadrado(lado){
 return lado * 4;
}
//console.log(`el perimetro del cuadrado es: ${perimetroCuadrado} cm`)

function areaCuadrado(lado){
    return lado * lado;
} 
//console.log(`el área del cuadrado es: ${areaCuadrado} cm'2 `)

console.groupEnd();

//Código del triangulo

console.group("Triangulo");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
//console.log(`los lados de cuadrado miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y ${baseTriangulo} cm`);

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log(`el área del tringulo es: ${areaTriangulo} cm'2 `)

function areaCirculo(altura, base){
    return (altura * base) / 2;
}

console.groupEnd();
//Código del circulo.

//Radio
console.group("Ciculo");
//const radioCirculo = 4;
//console.log(`el radio del circulo es: ${radioCirculo} cm`);
//Diametro

//const diametroCirculo = radioCirculo * 2;
//console.log(`el diamtro del circulo es: ${diametroCirculo} cm`);

function diametroCirculo(radio){
    return radio * 2;
}

//Pi

const PI = Math.PI
console.log(`Pi es: ${PI}`);
//Circunferencia

//const circunferenciaCirculo = diametroCirculo * PI;
//console.log(`la circunferencia del circulo es: ${circunferenciaCirculo} cm`);
function circunferenciaCirculo(radio){
    let diametro = diametroCirculo(radio);
    return diametro * PI;
}


//Area
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log(`el área del ciculo es: ${areaCirculo} cm`);
function areaCirculo(radio){
    return (radio*radio) * PI;
}

console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    let input = document.getElementById("inputCuadrado");
    let value = input.value;
    let perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    let input = document.getElementById("inputCuadrado");
    let value = input.value;
    let area = areaCuadrado(value);
    alert(area);
}