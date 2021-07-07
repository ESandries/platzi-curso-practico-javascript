
function formulaMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
     }
    )
    const promediolista = sumaLista / lista.length;

    return promediolista
} 

function calcularMediaAritmetica(){
    let resultSelect = document.getElementById("resultEstadistica");

    let inputSelect = document.getElementById("datos");
    let value = inputSelect.value;
    console.log(value)
    let valueArray = Array.from(value.split(','),Number)
    console.log(valueArray)
    let promedio = formulaMediaAritmetica(valueArray);

    resultSelect.innerText = "El promedio de los datos ingresados es: " +  promedio;
}