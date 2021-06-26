//Acá inicia el código del cuadrado:

// Fórmula para calcular el area:
function areaCuadrado(lado){
    return lado * lado;
}

// Fórmula para calcular el perimetro:

function perimetroCuadrado(lado){
    return lado * 4;
}

//Interacción con el html:

    

function calcularAreaCuadrado(){
    const  input = document.getElementById("ladoCuadrado");
    const result = document.getElementById("resultCuadrado");
    const unit = document.getElementById("unidadCuadrado");
    const unitValue = unit.value;
    const value = input.value;
    
    const area = areaCuadrado(value);
    result.innerText = `El área es ${area} ${unitValue}'2`;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const result = document.getElementById("resultCuadrado");
    const unit = document.getElementById("unidadCuadrado");
    const unitValue = unit.value;
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    result.innerText = `El perímetro es ${perimetro} ${unitValue}`;

}