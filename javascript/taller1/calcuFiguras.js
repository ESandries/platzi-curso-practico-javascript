//Acá inicia el código del cuadrado:

// Fórmula para calcular el area:
function formularAreaCuadrado(lado){
    return lado * lado;
}

// Fórmula para calcular el perimetro:

function formulaPerimetroCuadrado(lado){
    return lado * 4;
}

//Interacción con el html:


function calcularAreaCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const result = document.getElementById("resultCuadrado");
    const value = input.value;
    
    const area = formularAreaCuadrado(value);
    result.innerText = `El área es ${area}`;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const result = document.getElementById("resultCuadrado");
    const value = input.value;

    const perimetro = formulaPerimetroCuadrado(value);

    result.innerText = `El perímetro es ${perimetro}`;

}

//Código del triangulo

function formulaAreaTriangulo(altura, base){
    return (base * altura) / 2
}

function formulaPerimetroTriangulo(ladoA, ladoB, base){
    return Number.parseInt(ladoA) +  Number.parseInt(ladoB) + Number.parseInt(base);
}

function calcularAlturaTriangulo(ladoA, ladoB, base){
    if(ladoA === ladoB){
        return Math.sqrt((ladoA * ladoA) - ((base / 2) * (base / 2)))
    } else{
        return (ladoA * ladoB) / base
    }
}

function calcularAreaTriangulo(){
    const result = document.getElementById("resultTriangulo");
    let ladoA = document.getElementById("ladoAtriangulo");
    let ladoAValue = ladoA.value;
    let ladoB = document.getElementById("ladoBTriangulo");
    let ladoBValue = ladoB.value;
    let base = document.getElementById("baseTriangulo");
    let baseValue = base.value;

    let altura = calcularAlturaTriangulo(ladoAValue, ladoBValue, baseValue);
    let area = formulaAreaTriangulo(altura, baseValue);
    
    result.innerText = `El área del triangulo es ${area}`
    
}

function calcularPerimetroTriangulo(){
    const result = document.getElementById("resultTriangulo");
    let ladoA = document.getElementById("ladoAtriangulo");
    let ladoAValue = ladoA.value;
    let ladoB = document.getElementById("ladoBTriangulo");
    let ladoBValue = ladoB.value;
    let base = document.getElementById("baseTriangulo");
    let baseValue = base.value;

    let perimetro = formulaPerimetroTriangulo(ladoAValue, ladoBValue, baseValue);
    
    result.innerText = `El perímetro del triangulo es ${perimetro}`
    
}



//Código del circulo

const PI = Math.PI;

// Calcular el diametro:
function formulaDiametro(radio){
    return radio * 2;
}

//Calcular la circunferencia:

function formulaCircunferencia(radio){
    const diametro = formulaDiametro(radio);

    return diametro * PI;
}

// Calcular el area:

function formulaAreaCirculo(radio){
    return (radio * radio) * PI;
}

//Interactuar con el html del circulo

function calcularAreaCirculo(){
    const input = document.getElementById("radioCirculo");
    const result = document.getElementById("resultCirulo");
    const value = input.value;

    const area = formulaAreaCirculo(value);
    result.innerText = `El área del circulo es: ${area}`
}

function calcularCircunferencia(){
    const input = document.getElementById("radioCirculo");
    const result = document.getElementById("resultCirulo");
    const value = input.value;

    const circunferencia = formulaCircunferencia(value);
    result.innerText = `La circunferencia del circulo es: ${circunferencia}`
}

function calcularDiametro(){
    const input = document.getElementById("radioCirculo");
    const result = document.getElementById("resultCirulo");
    const value = input.value;

    const diametro = formulaDiametro(value);
    result.innerText = `El diametro del circulo es: ${diametro}`
}
