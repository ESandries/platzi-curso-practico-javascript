
function formulaMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
     }
    )
    const promediolista = sumaLista / lista.length;

    return promediolista
} 

function formulaMediana(list){

    let listOrder = list;
    listOrder.sort((a, b) => a - b);
    console.log("God is alive"+listOrder);

    let lista = listOrder;
    

    const mitadlista = parseInt(lista.length / 2);
    let mediana;

    function esPar(numerito){
        if(numerito % 2 == 0){
            return true;
        } else {
            return false;
        }   
    }

    if(esPar(lista.length)){
        const elemnto1 = lista[mitadlista];
        const elemnto2 = lista[mitadlista + 1];
        const elemnto1y2 = formulaMediaAritmetica([
            elemnto1,
            elemnto2,
        ])

        mediana =  elemnto1y2;

    } else{
        mediana = lista[mitadlista];
    }

    console.log(mediana);

    return mediana;
}

function formulaMode(list){
    let lista = list;

    const listaCount = {};

    lista.map(
        function (elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            } else{
            listaCount[elemento] = 1;
            }
        }
    )

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

function calcularMediana(){
    let resultSelect = document.getElementById("resultEstadistica");

    let inputSelect = document.getElementById("datos");
    let value = inputSelect.value;
    console.log(value)
    let valueArray = Array.from(value.split(','),Number)
    console.log(valueArray)
    let mediana = formulaMediana(valueArray);

    resultSelect.innerText = "La mediana de los datos ingresados es: " +  mediana;
}

