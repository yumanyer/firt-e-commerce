const productos = [
  {
    id: 1,
    nombre: "Hamburguesa Clásica",
    img: "imagen1.jpg",
    precio: 5.99,
    categoria: "Las mas pedidas",
    descripcion:
      "Una deliciosa hamburguesa clásica con carne de res jugosa, lechuga, tomate y salsa especial, servida en un pan suave.",
    stock: 100,
  },
  {
    id: 2,
    nombre: "Hamburguesa de Pollo BBQ",
    img: "imagen2.jpg",
    precio: 6.49,
    categoria: "Las mas pedidas",
    descripcion:
      "Una sabrosa hamburguesa de pollo a la parrilla con salsa BBQ casera, cebolla caramelizada y queso fundido, todo en un pan de sésamo tostado.",
    stock: 80,
  },
  {
    id: 3,
    nombre: "Combo Familiar de Hamburguesas",
    img: "imagen3.jpg",
    precio: 19.99,
    categoria: "Las mas pedidas",
    descripcion:
      "¡Un combo perfecto para toda la familia! Incluye cuatro hamburguesas clásicas, papas fritas crujientes y cuatro refrescos de su elección.",
    stock: 30,
  },
  {
    id: 4,
    nombre: "Hamburguesa Vegana de Garbanzos",
    img: "imagen4.jpg",
    precio: 7.99,
    categoria: "Nuevas",
    descripcion:
      "Una opción vegana deliciosa y saludable, hecha con garbanzos, espinacas y condimentos frescos, servida con aguacate y salsa de tahini en un pan integral.",
    stock: 50,
  },
  {
    id: 5,
    nombre: "Hamburguesa Doble de Carne",
    img: "imagen5.jpg",
    precio: 8.99,
    categoria: "Nuevas",
    descripcion:
      "¡Doble la carne, doble el sabor! Dos jugosas hamburguesas de carne de res con doble queso cheddar, bacon crujiente, lechuga y tomate fresco, todo en un pan de brioche.",
    stock: 60,
  },
  {
    id: 6,
    nombre: "Hamburguesa Picante Mexicana",
    img: "imagen6.jpg",
    precio: 7.49,
    categoria: "Nuevas",
    descripcion:
      "Una explosión de sabores mexicanos en cada bocado. Carne de res sazonada con especias mexicanas, jalapeños picantes, guacamole fresco y queso pepper jack, servida en un pan de maíz.",
    stock: 70,
  },
  {
    id: 7,
    nombre: "Combo de Hamburguesa y Alitas",
    img: "imagen7.jpg",
    precio: 12.99,
    categoria: "Nuevas",
    descripcion:
      "¿No puedes decidir entre una hamburguesa y alitas? ¡No hay problema! Este combo incluye una hamburguesa de tu elección y seis alitas de pollo crujientes con salsa a elección.",
    stock: 40,
  },
];

// simulamos peticion al server
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};
//devolvemos un productos
// en base al id devolvemos un cierto producto
export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (productos.length > 0) {
      // Convertir el parámetro id a un número usando parseInt
      const itemId = parseInt(id);

      // Buscar el elemento con el id correspondiente
      const item = productos.find((product) => product.id === itemId);

      // Si se encuentra el item, resolver la promesa con el item
      if (item) {
        setTimeout(() => {
          resolve(item);
        }, 1500);
      } else {
        // Si no se encuentra el item, rechazar la promesa con un mensaje de error
        reject(`No se encuentra el producto con el  ${itemId}`);
      }
    } else {
      // Si no hay productos, rechazar la promesa con un mensaje de error
      reject("NO HAY PRODUCTOS");
    }
  });
};
