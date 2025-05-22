let libros = [];
let carrito = [];
let total = 0;

function agregarLibro() {
  const titulo = document.getElementById('titulo').value.trim();
  const precio = parseFloat(document.getElementById('precio').value.trim());


  error.textContent = "";

  if (!titulo || isNaN(precio) || precio <= 0) {
    error.textContent = "Error! Ingresar título válido y  precio mayor a 0.";
    return;
  }

  const libro = { titulo, precio };
  libros.push(libro);

  mostrarLibros();

//   esto sirve para que cada vez que cargo un libro, se limpie el innput 

//   // Limpiar inputs
//   document.getElementById('titulo').value = "";
//   document.getElementById('precio').value = "";
}

function mostrarLibros() {
  const contenedor = document.getElementById('librosdisp');
  contenedor.innerHTML = "";

  libros.forEach((libro, index) => {
    const div = document.createElement('div');
    div.innerHTML = `${libro.titulo} - $${libro.precio.toFixed(2)}
  <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
`;
    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(index) {
  const libro = libros[index];
  carrito.push(libro);
  total += libro.precio;
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  total = total- carrito[index].precio;
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('carrito');
  lista.innerHTML = "";

  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.titulo} - $${item.precio.toFixed(2)}
      <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    lista.appendChild(li);
  });

  document.getElementById('total').textContent = total.toFixed(2);
//   esto me permite mostrar solo dos decimales 
}
