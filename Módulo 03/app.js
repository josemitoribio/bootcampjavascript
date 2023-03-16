/**

//MÓDULO 03 PRÁCTICA CALCULAR PRECIO TOTAL Y CALCULAR IVA

const product = { count:3, price:12.55, type: "ropa"};

if (product.count <= 0) { product.count = 0};

let total = product.count * product.price;

console.log("Total sin IVA: ", total,"€");

let IVA;

switch (product.type) {
    case "alimentación": IVA = 0.1, console.log("Se aplicará IVA de alimentación"); break;
    case "libro": IVA = 0.04, console.log("Se aplicará IVA de libros: "); break;
    default: IVA = 0.21, console.log("Se aplicará IVA de otros: 21%"); break;
};

let IVAProducto = product.price * IVA;
console.log("El IVA de este producto es ", IVAProducto, "€")

let TotalCompra = total + IVAProducto;
console.log("Total con IVA: ", TotalCompra, "€")


*/


//MÓDULO 03 - PRÁCTICA AVANZADA CALCULAR SUELDO NETO EN NÓMINA con la legislación vigente

const empleado = {bruto: 14500, hijos: 2, pagas: 14};

let retencion;

if (empleado.bruto <= 12450) {
    retencion = 0.19;
} else if (empleado.bruto >= 12451 && empleado.bruto <= 20199) {
    retencion = 0.24;
}
  else if (empleado.bruto >= 20200 && empleado.bruto <= 35199) {
    retencion = 0.30;
  }
  else if (empleado.bruto >= 35200 && empleado.bruto <= 59999) {
    retencion = 0.37;
  }
  else if (empleado.bruto >= 60000 && empleado.bruto <=299999) {
    retencion = 0.45;
  }
  else if (empleado.bruto >=300000) {
    retencion = 0.47;
  };

if (empleado.hijos > 0) {retencion = retencion - 0.02};

let retencionSueldo = empleado.bruto * retencion;
let sueldoNeto = empleado.bruto - retencionSueldo;

console.log("Sueldo bruto anual: ", empleado.bruto, "€")
console.log("Retención anual: ", retencionSueldo, "€");
console.log("Sueldo Neto anual: ", sueldoNeto, "€");

let NetoMensual = empleado.pagas == 14 ? sueldoNeto / 14 : sueldoNeto / 12;
console.log("Sueldo neto mensual: ", NetoMensual, "€");