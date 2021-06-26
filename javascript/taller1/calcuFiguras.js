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
    const  input = document.getElementById("ladoCuadrado");
    const result = document.getElementById("resultCuadrado");
    const unit = document.getElementById("unidadCuadrado");
    const unitValue = unit.value;
    const value = input.value;
    
    const area = formularAreaCuadrado(value);
    result.innerText = `El área es ${area} ${unitValue}'2`;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const result = document.getElementById("resultCuadrado");
    const unit = document.getElementById("unidadCuadrado");
    const unitValue = unit.value;
    const value = input.value;

    const perimetro = formulaPerimetroCuadrado(value);

    result.innerText = `El perímetro es ${perimetro} ${unitValue}`;

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
    const unit = document.getElementById("selectCirculo");
    const value = input.value;
    const valueUnit = unit.value;

    const area = formulaAreaCirculo(value);
    result.innerText = `El área del circulo es: ${area} ${valueUnit}`
}

function calcularCircunferencia(){
    const input = document.getElementById("radioCirculo");
    const result = document.getElementById("resultCirulo");
    const unit = document.getElementById("selectCirculo");
    const value = input.value;
    const valueUnit = unit.value;

    const circunferencia = formulaCircunferencia(value);
    result.innerText = `La circunferencia del circulo es: ${circunferencia} ${valueUnit}`
}

function calcularDiametro(){
    const input = document.getElementById("radioCirculo");
    const result = document.getElementById("resultCirulo");
    const unit = document.getElementById("selectCirculo");
    const value = input.value;
    const valueUnit = unit.value;

    const diametro = formulaDiametro(value);
    result.innerText = `El diametro del circulo es: ${diametro} ${valueUnit}`
}