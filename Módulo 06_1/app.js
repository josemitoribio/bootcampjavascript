// LABORATORIO MÓDULO 06.1

// CONSTANTES
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// PRODUCTOS
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta de rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera de plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

// Generar HTML dinámico para representar selección de unidades para cada producto de la lista.


var createQuantity =  product => {
        var quantity = document.createElement("input");
        quantity.setAttribute("type", "number");
        quantity.setAttribute("min", "0");
        quantity.setAttribute("max", product.stock);
        quantity.addEventListener("change", event => {
          product.units = event.target.valueAsNumber;
          document.getElementById("button").disabled = isDisabled();
          
        })
        return quantity;
};

var createProduct = product => {
    var container = document.getElementById("product-list-container");
    var description = document.createElement("h5");
        description.innerText = (product.description) + (" - ") + (product.price + "€/ud.");
        container.appendChild(description);
        description.appendChild(createQuantity(product));
};

var showProducts = productList => {
    for(var product of productList) {
    createProduct(product);
    }
};



// Cálculos

function calcular() {
    var subtotal = 0;
    var impuestos = 0;

    for (var product of products) {
      subtotal += product.units * product.price;
      impuestos += (product.units * product.price) * (product.tax/100);
    }

    document.getElementById("subtotal").innerText = "Subtotal " + subtotal.toFixed(2) + " €";
    document.getElementById("impuestos").innerText = "IVA " + impuestos.toFixed(2) + " €";
    document.getElementById("total").innerText = "Total " + (subtotal + impuestos).toFixed(2) + " €";
};
 

function isDisabled() {

  for (var product of products) {
    if (product.units>0) {
      button.classList.remove("disabled");
      return false;
    }
  }
  button.classList.add("disabled");
  return true;
};

document.getElementById("button").disabled = isDisabled();


showProducts(products);

// EVENTS
document.getElementById("button").addEventListener("click", calcular);
