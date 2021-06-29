
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
    let inputSelect = document.getElementById("datos");
    let value = inputSelect.value;
    const promedio = formulaMediaAritmetica([value]);

    console.log(promedio);
}