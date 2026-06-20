const numeroWhatsApp = "526621668765";

const productos = [
  {
    nombre: "Americano",
    descripcion: "Café americano clásico, preparado con granos de alta calidad",
    precio: 35,
    categoria: "Bebidas",
    imagen: "imagen/americano.png",
    destacado: true
  },
  {
    nombre: "Frappe",
    descripcion: "Frappe cremoso con sabor a café, ideal para refrescarte",
    precio: 60,
    categoria: "Bebidas",
    imagen: "imagen/frappe.jpg",
    destacado: false
  },
    {
    nombre: "Chilaquiles",
    descripcion: "Chilaquiles con salsa roja y queso",
    precio: 100,
    categoria: "Desayunos",
    imagen: "imagen/chilaquiles.png",
    destacado: false
  },
];

let carrito = [];

function mostrarProductos(lista = productos) {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  lista.forEach((producto) => {
    const indexReal = productos.indexOf(producto);

    contenedor.innerHTML += `
      <div class="producto">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div>
          <h4>${producto.nombre}</h4>
          <p>${producto.descripcion}</p>
          <strong>$${producto.precio}.00</strong>
          <br>
          <button onclick="agregarAlCarrito(${indexReal})">Agregar</button>
        </div>
      </div>
    `;
  });
}

function mostrarDestacados() {
  const contenedor = document.getElementById("destacados");
  const destacados = productos.filter(producto => producto.destacado);

  contenedor.innerHTML = "";

  destacados.forEach((producto) => {
    const indexReal = productos.indexOf(producto);

    contenedor.innerHTML += `
      <div class="destacado-card">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="destacado-info">
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <strong>$${producto.precio}.00</strong>
          <br><br>
          <button onclick="agregarAlCarrito(${indexReal})">Agregar al pedido</button>
        </div>
      </div>
    `;
  });
}

function filtrarProductos(categoria, boton) {
  document.querySelectorAll(".categorias button").forEach(btn => {
    btn.classList.remove("activo");
  });

  boton.classList.add("activo");

  if (categoria === "Todos") {
    mostrarProductos(productos);
  } else {
    const filtrados = productos.filter(producto => producto.categoria === categoria);
    mostrarProductos(filtrados);
  }
}

function agregarAlCarrito(index) {
  const producto = productos[index];

  const productoExistente = carrito.find(item => item.nombre === producto.nombre);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1
    });
  }

  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  const miniCantidad = document.getElementById("miniCantidad");
const miniTotal = document.getElementById("miniTotal");
const miniCarrito = document.querySelector(".mini-carrito");
  const contenedor = document.getElementById("itemsCarrito");
  const totalSpan = document.getElementById("total");

  contenedor.innerHTML = "";

  let total = 0;

  let cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
let totalMini = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

miniCantidad.textContent = cantidadTotal;
miniTotal.textContent = totalMini;

if (cantidadTotal === 0) {
  miniCarrito.classList.add("vacio");
} else {
  miniCarrito.classList.remove("vacio");
}
  if (carrito.length === 0) {
    contenedor.innerHTML = `<p style="color:#777;">Aún no has agregado productos.</p>`;
    totalSpan.textContent = "0";
    return;
  }

  carrito.forEach((item, index) => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    contenedor.innerHTML += `
      <div class="item-carrito">
        <div>
          <p>${item.cantidad} x ${item.nombre}</p>
          <span>$${subtotal}.00</span>
        </div>

        <button class="eliminar" onclick="eliminarDelCarrito(${index})">✕</button>
      </div>
    `;
  });

  totalSpan.textContent = total;
}

function enviarWhatsApp() {
  if (carrito.length === 0) {
    alert("Agrega productos al pedido antes de enviar.");
    return;
  }

  let mensaje = "Hola, quiero hacer el siguiente pedido:%0A%0A";
  let total = 0;

  carrito.forEach(item => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    mensaje += `• ${item.cantidad} x ${item.nombre} - $${subtotal}%0A`;
  });

  mensaje += `%0ATotal: $${total}%0A%0A`;
  mensaje += "Nombre:%0A";
  mensaje += "Dirección:%0A";
  mensaje += "Forma de pago:%0A";
  mensaje += "Comentarios:";

  const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

  window.open(url, "_blank");
}

function toggleCarrito() {
  document.querySelector(".carrito").classList.toggle("abierto");
}

function cerrarCarrito() {
  document.querySelector(".carrito").classList.remove("abierto");
}

document.addEventListener("click", function(e){

  const carrito = document.querySelector(".carrito");
  const miniCarrito = document.querySelector(".mini-carrito");

  if(
    carrito.classList.contains("abierto") &&
    !carrito.contains(e.target) &&
    !miniCarrito.contains(e.target)
  ){
    carrito.classList.remove("abierto");
  }

});

mostrarProductos();
mostrarDestacados();
actualizarCarrito();