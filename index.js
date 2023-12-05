//-- Declarar Variables iniciales y Mostraar --//
precio = 400000
precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio

cantidad = 0
cantidadSpan = document.querySelector(".cantidad")
cantidadSpan.innerHTML = cantidad

//-- Funcion comportamiento al presionar Boton (+) --//
function BotonMas() {
    cantidad++
    cantidadSpan.innerHTML = cantidad
    ValorTotal ()
}

//-- Funcion comportamiento al presionar Boton (-) --//
function BotonMenos () {
    if (cantidad > 0) {
        cantidad--
        cantidadSpan.innerHTML = cantidad
        ValorTotal ()
    }
}

//-- Funcion calculo valor total del equipo --//
function ValorTotal () {
    PrecioTotal = cantidad * precio
    PrecioTotalSpan = document.querySelector(".valor-total")
    PrecioTotalSpan.innerHTML = PrecioTotal
}

