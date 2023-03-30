// LABORATORIO MÓDULO 05

const carrito = [
    {
      id: 198752,
      name: "Tinta DJ27 Color",
      price: 52.95,
      count: 3,
      premium: true
  }, {
      id: 75621,
      name: "Impresora ticketera PRO-201",
      price: 32.75,
      count: 2,
      premium: true
  }, {
      id: 54657,
      name: "Caja de rollos de papel para ticketera",
      price: 5.95,
      count: 3,
      premium: false
  }, {
      id: 3143,
      name: "Caja de folios DIN-A4 80gr",
      price: 9.95,
      count: 2,
      premium: false
  } ];


// LISTAR TODOS LOS PRODUCTOS

console.log("LISTADO DE PRODUCTOS:");

for (i=0 ; i<carrito.length; i++) {
    imprimir(carrito[i]);
}

function imprimir(producto) {
    console.log("-----------");
    for (propiedad in producto) {
        console.log(propiedad + ": " + producto[propiedad]);
    }
}


// ELIMINAR EL PRODUCTO CON ID 54657
console.log("---------------------");

var productoEliminado = carrito.splice(2, 1);

console.log("El producto eliminado es el: " , productoEliminado);

// CALCULAR EL TOTAL DEL CARRITO
console.log("---------------------");

let total = 0;

for (producto of carrito) {
    total+= producto.price * producto.count;
}

console.log("Total compra: ", total, " €");


// FILTRAR POR LOS PRODUCTOS QUE SEAN PREMIUM
console.log("---------------------")
console.log("LISTADO DE PRODUCTOS PREMIUM:");

for (producto of carrito) {
    if (producto.premium) {imprimir(producto);
    }
}

function imprimir(producto) {
    console.log("-----------");
    for (propiedad in producto) {
        console.log(propiedad + ": " + producto[propiedad]);
    }
}

// MENSAJE SI SON PREMIUM O NO
console.log("---------------------")
console.log("MENSAJE PREMIUMO O NO");

function gastosEnvio() {
    let premium = true;

for (producto of carrito) {
    premium = premium && producto.premium;
}
return !premium;
}

if (gastosEnvio = false) {
    console.log("Este pedido es sin gastos de envío");
} else {
    console.log("Este pedido tiene gastos de envío");
};


// DESCUENTO DEL 5% SI LA COMPRA ES MAYOR DE 100€
console.log("---------------------")

let descuento = total * 0.05;
let descuentoTotal = total - (descuento);

for (producto of carrito) {
    if ((producto.price * producto.count) > 100) {
        descuentoTotal;
    }
for (producto of carrito) {
        total+= producto.price * producto.count;
    }
}

console.log("Total con descuento: ", descuentoTotal, " €");
console.log("El descuento es de: ", descuento, " €");
