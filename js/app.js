// Variables
const carrito = document.querySelector('#carrito');
const listaJoyas = document.querySelector('#lista-joyas');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaJoyas.addEventListener('click', agregarJoyas);

     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarJoya);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}


// Funciones
// Función que añade la joya al carrito
function agregarJoyas(e) {
    e.preventDefault();
    // Delegation para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')) {
         const joya = e.target.parentElement.parentElement;
         // Enviamos la joya seleccionado para tomar sus datos
         leerDatosJoya(joya);
    }
}

// Lee los datos dla joya
function leerDatosJoya(joya) {
    const infojoya = {
         imagen: joya.querySelector('img').src,
         titulo: joya.querySelector('h4').textContent,
         precio: joya.querySelector('.precio span').textContent,
         id: joya.querySelector('a').getAttribute('data-id'), 
         cantidad: 1
    }


    if( articulosCarrito.some( joya => joya.id === infojoya.id ) ) { 
         const joyas = articulosCarrito.map( joya => {
              if( joya.id === infojoya.id ) {
               joya.cantidad++;
                    return joya;
               } else {
                    return joya;
            }
         })
         articulosCarrito = [...joyas];
    }  else {
         articulosCarrito = [...articulosCarrito, infojoya];
    }

    // console.log(articulosCarrito)

    

    // console.log(articulosCarrito)
    carritoHTML();
}

// Elimina la joya del carrito en el DOM
function eliminarJoya(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar-joya') ) {
         // e.target.parentElement.parentElement.remove();
         const joyaId = e.target.getAttribute('data-id')
         
         // Eliminar del arreglo del carrito
         articulosCarrito = articulosCarrito.filter(joya => joya.id !== joyaId);

         carritoHTML();
    }
}


// Muestra la joya seleccionado en el Carrito
function carritoHTML() {

    vaciarCarrito();

    articulosCarrito.forEach(joya => {
         const row = document.createElement('tr');
         row.innerHTML = `
              <td>  
                   <img src="${joya.imagen}" width=100>
              </td>
              <td>${joya.titulo}</td>
              <td>${joya.precio}</td>
              <td>${joya.cantidad} </td>
              <td>
                   <a href="#" class="borrar-joya" data-id="${joya.id}">X</a>
              </td>
         `;
         contenedorCarrito.appendChild(row);
    });

}

// Elimina las joyas del carrito en el DOM
function vaciarCarrito() {
    // forma lenta
    // contenedorCarrito.innerHTML = '';


    // forma rapida (recomendada)
    while(contenedorCarrito.firstChild) {
         contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     }
}
