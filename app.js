const productos = [
  // BEBIDAS CALIENTES
  {
    nombre: "Americano",
    descripcion: "Café espresso con agua caliente.",
    precio: 45,
    categoria: "Calientes",
    imagen: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500"
  },
  {
    nombre: "Cappuccino",
    descripcion: "Espresso con leche vaporizada y espuma cremosa.",
    precio: 65,
    categoria: "Calientes",
    imagen: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500"
  },
  {
    nombre: "Latte",
    descripcion: "Café suave con leche cremosa.",
    precio: 68,
    categoria: "Calientes",
    imagen: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500"
  },
  {
    nombre: "Mocha",
    descripcion: "Café con chocolate y leche vaporizada.",
    precio: 72,
    categoria: "Calientes",
    imagen: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500"
  },
  {
    nombre: "Chocolate Caliente",
    descripcion: "Chocolate cremoso preparado con leche.",
    precio: 60,
    categoria: "Calientes",
    imagen: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500"
  },

  // BEBIDAS FRÍAS
  {
    nombre: "Cold Brew",
    descripcion: "Café frío extraído lentamente.",
    precio: 75,
    categoria: "Frías",
    imagen: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500"
  },
  {
    nombre: "Latte Frío",
    descripcion: "Espresso con leche fría y hielo.",
    precio: 70,
    categoria: "Frías",
    imagen: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500"
  },
  {
    nombre: "Té Helado",
    descripcion: "Té frío natural con toque cítrico.",
    precio: 55,
    categoria: "Frías",
    imagen: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500"
  },
  {
    nombre: "Limonada Mineral",
    descripcion: "Limonada fresca con agua mineral.",
    precio: 55,
    categoria: "Frías",
    imagen: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500"
  },

  // FRAPPÉS
  {
    nombre: "Frappé de Caramelo",
    descripcion: "Bebida fría cremosa con caramelo.",
    precio: 85,
    categoria: "Frappés",
    imagen: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500"
  },
  {
    nombre: "Frappé de Chocolate",
    descripcion: "Chocolate frío, cremoso y dulce.",
    precio: 85,
    categoria: "Frappés",
    imagen: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=500"
  },
  {
    nombre: "Frappé Oreo",
    descripcion: "Frappé con galleta Oreo y crema.",
    precio: 90,
    categoria: "Frappés",
    imagen: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500"
  },

  // DESAYUNOS
  {
    nombre: "Hot Cakes",
    descripcion: "Hot cakes con mantequilla, miel y fruta.",
    precio: 95,
    categoria: "Desayunos",
    imagen: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500"
  },
  {
    nombre: "Waffles",
    descripcion: "Waffles dorados con fruta y miel.",
    precio: 105,
    categoria: "Desayunos",
    imagen: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500"
  },
  {
    nombre: "Croissant de Jamón y Queso",
    descripcion: "Croissant horneado con jamón y queso.",
    precio: 89,
    categoria: "Desayunos",
    imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500"
  },
  {
    nombre: "Toast de Aguacate",
    descripcion: "Pan artesanal con aguacate y especias.",
    precio: 98,
    categoria: "Desayunos",
    imagen: "https://images.unsplash.com/photo-1603046891744-76e6300f82ef?w=500"
  },

  // COMIDA
  {
    nombre: "Sándwich Club",
    descripcion: "Pan artesanal, pollo, tocino, queso y vegetales.",
    precio: 125,
    categoria: "Comida",
    imagen: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500"
  },
  {
    nombre: "Bagel de Pollo",
    descripcion: "Bagel con pollo, queso crema y vegetales.",
    precio: 115,
    categoria: "Comida",
    imagen: "https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?w=500"
  },
  {
    nombre: "Ensalada César",
    descripcion: "Lechuga, pollo, crutones, parmesano y aderezo César.",
    precio: 120,
    categoria: "Comida",
    imagen: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500"
  },
  {
    nombre: "Panini Italiano",
    descripcion: "Panini con jamón, queso, tomate y pesto.",
    precio: 118,
    categoria: "Comida",
    imagen: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500"
  },

  // POSTRES
  {
    nombre: "Brownie",
    descripcion: "Brownie de chocolate intenso.",
    precio: 55,
    categoria: "Postres",
    imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500"
  },
  {
    nombre: "Cheesecake",
    descripcion: "Rebanada cremosa de cheesecake.",
    precio: 75,
    categoria: "Postres",
    imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500"
  },
  {
    nombre: "Pay de Limón",
    descripcion: "Pay frío de limón con base crujiente.",
    precio: 68,
    categoria: "Postres",
    imagen: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500"
  },
  {
    nombre: "Galleta Choco Chips",
    descripcion: "Galleta grande con chispas de chocolate.",
    precio: 45,
    categoria: "Postres",
    imagen: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500"
  }
];

let carrito = [];

const contenedorProductos = document.getElementById("productos");
const itemsCarrito = document.getElementById("itemsCarrito");
const totalHTML = document.getElementById("total");
const miniCantidad = document.getElementById("miniCantidad");
const miniTotal = document.getElementById("miniTotal");

function mostrarProductos(lista) {
  contenedorProductos.innerHTML = "";

  lista.forEach((producto, index) => {
    const card = document.createElement("div");
    card.classList.add("producto");

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div>
        <h4>${producto.nombre}</h4>
        <p>${producto.descripcion}</p>
        <strong>$${producto.precio}</strong>
        <br>
        <button onclick="agregarCarrito(${productos.indexOf(producto)})">
          Agregar
        </button>
      </div>
    `;

    contenedorProductos.appendChild(card);
  });
}

function filtrarProductos(categoria, boton) {
  document.querySelectorAll(".categorias button").forEach(btn => {
    btn.classList.remove("activo");
  });

  boton.classList.add("activo");

  if (categoria === "Bebidas") {
    mostrarBebidasSeccionadas();
    return;
  }

  if (categoria === "Todos") {
    mostrarProductos(productos);
  } else {
    mostrarProductos(productos.filter(producto => producto.categoria === categoria));
  }
}

function filtrarSubcategoria(subcategoria, boton) {
  document.querySelectorAll(".subcategorias button").forEach(btn => {
    btn.classList.remove("activo");
  });

  boton.classList.add("activo");

  mostrarProductos(productos.filter(producto => producto.categoria === subcategoria));
}

function agregarCarrito(index) {
  const producto = productos[index];

  const productoExistente = carrito.find(item => item.nombre === producto.nombre);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({
      ...producto,
      cantidad: 1
    });
  }

  actualizarCarrito();
}

function agregarCarritoPorNombre(nombre) {
  const producto = productos.find(item => item.nombre === nombre);

  if (!producto) return;

  const productoExistente = carrito.find(item => item.nombre === producto.nombre);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({
      ...producto,
      cantidad: 1
    });
  }

  actualizarCarrito();
}

function actualizarCarrito() {
  itemsCarrito.innerHTML = "";

  let total = 0;
  let cantidadTotal = 0;

  carrito.forEach((item, index) => {
    total += item.precio * item.cantidad;
    cantidadTotal += item.cantidad;

    const div = document.createElement("div");
    div.classList.add("item-carrito");

    div.innerHTML = `
      <div>
        <p>${item.nombre}</p>
        <span>${item.cantidad} x $${item.precio}</span>
      </div>
      <button class="eliminar" onclick="eliminarProducto(${index})">×</button>
    `;

    itemsCarrito.appendChild(div);
  });

  totalHTML.textContent = total;
  miniCantidad.textContent = cantidadTotal;
  miniTotal.textContent = total;

const miniCarrito = document.querySelector(".mini-carrito");

if (miniCarrito) {
  if (carrito.length === 0) {
    miniCarrito.classList.add("vacio");
  } else {
    miniCarrito.classList.remove("vacio");
  }
}
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function enviarWhatsApp() {
  if (carrito.length === 0) {
    alert("Agrega productos a tu pedido.");
    return;
  }

  let mensaje = "Hola, quiero hacer el siguiente pedido:%0A%0A";
  let total = 0;

  carrito.forEach(item => {
    mensaje += `• ${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}%0A`;
    total += item.precio * item.cantidad;
  });

  mensaje += `%0ATotal: $${total}`;

  window.open(`https://wa.me/526621668765?text=${mensaje}`, "_blank");
}

function toggleCarrito() {
  document.querySelector(".carrito").classList.toggle("abierto");
}

function cerrarCarrito() {
  document.querySelector(".carrito").classList.remove("abierto");
}

mostrarProductos(productos);
actualizarCarrito();

function mostrarBebidasSeccionadas() {
  contenedorProductos.innerHTML = "";

  const secciones = [
    { titulo: "☕ Bebidas Calientes", categoria: "Calientes" },
    { titulo: "🧊 Bebidas Frías", categoria: "Frías" },
    { titulo: "🥤 Frappés", categoria: "Frappés" }
  ];

  secciones.forEach(seccion => {
    const productosSeccion = productos.filter(producto => producto.categoria === seccion.categoria);

    if (productosSeccion.length > 0) {
      const titulo = document.createElement("h3");
      titulo.classList.add("titulo-subseccion");
      titulo.textContent = seccion.titulo;

      contenedorProductos.appendChild(titulo);

      productosSeccion.forEach(producto => {
        const index = productos.indexOf(producto);

        const card = document.createElement("div");
        card.classList.add("producto");

        card.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <div>
            <h4>${producto.nombre}</h4>
            <p>${producto.descripcion}</p>
            <strong>$${producto.precio}</strong>
            <br>
            <button onclick='agregarCarritoPorNombre(${JSON.stringify(producto.nombre)})'>
              Agregar
            </button>
          </div>
        `;

        contenedorProductos.appendChild(card);
      });
    }
  });
}