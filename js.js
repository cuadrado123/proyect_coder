class Productos {
	constructor(nombre, precio, stock) {

		this.nombre = nombre;
		this.precio = precio;
		this.stock = stock;
	}

	get_datos() {
		console.log("Nombre", this.nombre);
		console.log("Precio", this.precio);
		console.log("Stock", this.stock);
		console.log("");
	}

	get_stock() {
		if (this.stock <= 0) {
			return false;
		}
		else {
			return true;
		}
	}

	venta_articulos(cantidad) {
		if (this.stock >= cantidad) {
			this.stock = this.stock - cantidad;
			this.precio = this.precio * cantidad;
			return true;
		}
		else {
			return false;
		}
	}
}

function buscar_prod(producto) {
	return producto.nombre == compra_user;
}

function vuelto_compra(abonar, total) {
	if (abonar > total) {
		total = abonar - total;
		console.log("Su vuelto es: ", "$"+total);
	} else if (abonar == total) {
		total = abonar - total;
		console.log("Gracias por pagar exacto mi estimado");
	} else {
		console.log("No es suficiente para abonar ", parseFloat(abonar));
	}
}

function medios_de_pago(cuotas, total) {
	if (cuotas == 3) {
		let interes = total * 0.15;
		return interes;
	} else if (cuotas == 6) {
		let interes = total * 0.3;
		return interes;
	} else if (cuotas == 12) {
		let interes = total * 0.8;
		return interes;
	}
}

// PRODUCTOS POR DEFAULT
let lista_productos = [];

lista_productos.push(new Productos("Bicicleta", 50000, 6));
lista_productos.push(new Productos("Monopatin", 30000, 8));
lista_productos.push(new Productos("Casco", 800, 3));
lista_productos.push(new Productos("Rodillera", 600, 5));
lista_productos.push(new Productos("Cubierta", 1100, 4));

let admin = prompt("Si es supervisor y desea cargar articulos presione 1");

//CARGA DE PRODUCTOS MANUAL
if (admin == 1) {
	for (let i = 0; i <= 2; i++) {
		let nombre = prompt("Ingrese el nombre del articulo");
		let precio = prompt("Ingrese el precio del articulo");
		let stock = prompt("Ingrese el stock del articulo");

		let producto = new Productos(nombre, precio, stock);

		lista_productos.push(producto)
	}
} else {
	console.log("Bienvenido estos son los articulos en venta")
}

// MUESTRA LOS PRODUCTOS CARGAGOS

for (let producto of lista_productos) {
	producto.get_datos();
}


// VARIABLES
let opcion, compra_user;
let total = 0;
let cuotas, resumen, abonar;

// crea un nuevo objeto `Date`
var today = new Date();
 
// obtener la fecha y la hora
var now = today.toLocaleString();

// VENTA DEL ARTICULO
do {
	opcion = prompt("Si quire hacer una compra presione 1 sino 2")

	// USUARIO COMPRA ARTICULOS
	if (opcion == 1) {
		compra_user = prompt("Ingrese el nombre del producto a comprar");
		// BUSCO SI EXISTE EL ARTICULO
		let resul_search = lista_productos.find(buscar_prod);
		console.log(resul_search);
		if (resul_search != undefined) {
			// SE VALIDA EL STOCK
			if (resul_search.get_stock()) {
				let unidades = prompt("Ingresa cuanto unidades se va a llevar");
				if (resul_search.venta_articulos(unidades)) {
					console.log(`Usted esta llevando ${unidades} de ${resul_search.nombre}`);
					total += resul_search.precio;
				}
				else {
					console.log("No se puede realizar la compra del articulo, stock no disponible");
					console.log(`El stock disponible del articulo ${resul_search.nombre} es ${resul_search.stock}`);
				}
			}
			else {
				console.log("No hay mas stock del producto", resul_search.nombre);
			}
		}
		else {
			console.log("No se encontro el articulo ", compra_user);
		}
	} else if(opcion == 2){
		console.log("Gracias por su compra");
	}


} while (opcion != 2)


// SE SELECCIONA UN MEDIO DE PAGO
let medio_pago = prompt("Elegir su medio de pago EFECTIVO o TARJETA");

// Metodo para elegir el medio de pago 
while (medio_pago != "EFECTIVO" || medio_pago != "TARJETA") {
	if (medio_pago == "EFECTIVO") {
		console.log("Se paga de contado en 1 pago");
		console.log("Total de la compra: ", "$",total, " Fecha:", now);
		abonar = parseFloat(prompt("Con cuanto abonaria?"));
		vuelto_compra(abonar, total);
		console.log("Fin de la compra vuelva pronto");
		break;
	} else if (medio_pago == "TARJETA") {
		cuotas = prompt("Elija en cuantas cuotas desea hacerlo 3, 6, 12");
		resumen = total + medios_de_pago(cuotas, total);

		console.log("Total con interes: ", resumen);
		console.log("Total por cuotas seria: " , "$",resumen / cuotas , " Fecha:", now);

		abonar = parseFloat(prompt("Con cuanto abonaria?"));

		vuelto_compra(abonar, resumen);
		console.log("Fin de la compra vuelva pronto");
		break;
	} else {
		console.log("Medio de pago incorrecto")
		medio_pago = prompt("Elegir su medio de pago EFECTIVO o TARJETA");
	}
}


