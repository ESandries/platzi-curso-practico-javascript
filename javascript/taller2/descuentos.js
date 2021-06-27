function formulaDescuento(precio, descuento){
 return (precio * (100 - descuento)) / 100;
}

function calcularPrecioConDescuento(){
    let precioInput = document.getElementById("priceInput");
    let precioValue = precioInput.value;
    let descuentoInput = document.getElementById("descuento");
    let descuentoValue = descuentoInput.value;
    let result = document.getElementById("resultDescuento");

    let precioDescuento = formulaDescuento(precioValue, descuentoValue);

    result.innerText = `El precio con un descuento de ${descuentoValue}% es de $${precioDescuento}`;
}