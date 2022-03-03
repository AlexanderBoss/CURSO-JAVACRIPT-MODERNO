
//Switch case

const metodoPago="efectivo";

switch (metodoPago) {

    case "efectivo":
        pagar();
        break;
    default:
        console.log(`Aun no ha seleccionado un metodo de pago soportado`);
        break;
}

function pagar() {
    console.log("pagando");
}