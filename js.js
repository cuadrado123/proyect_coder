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


// PRODUCTOS POR DEFAULT
let lista_productos = [];

lista_productos.push(new Productos("Bicicleta", 50000, 6));
lista_productos.push(new Productos("Monopatin", 30000, 8));
lista_productos.push(new Productos("Casco", 800, 3));
lista_productos.push(new Productos("Rodillera", 600, 5));
lista_productos.push(new Productos("Cubierta", 1100, 4));

// MUESTRA LOS PRODUCTOS CARGAGOS
console.log("Productos");

for (let producto of lista_productos) {
	producto.get_datos();
}


// VENTA DEL ARTICULO
let opcion, compra_user, total;

do {
	opcion = prompt("Si quire hacer una compra presione 1 sino 2")

	// USUARIO COMPRA ARTICULOS
	if (opcion == 1) {
		compra_user = prompt("Ingrese el nombre del producto a comprar");

		let resul_search = lista_productos.find(buscar_prod);
		console.log(resul_search);
		if (resul_search != undefined) {
			if (resul_search.get_stock()) {
				let unidades = prompt("Ingresa cuanto de va a llevar");
				if (resul_search.venta_articulos(unidades)) {
					console.log(`Usted esta llevando ${unidades} de ${resul_search.nombre}`);
					console.log(`El total es ${resul_search.precio}`);
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
	} else {
		console.log("Fin de la compra vuelva pronto");
	}
	
} while (opcion != 2)




