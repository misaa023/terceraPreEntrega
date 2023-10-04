// muestro el carrito de compra
const CargarCarrito = () => {
    modalContainer.innerHTML = '';
    modalContainer.style.display = 'block';
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    modalHeader.innerHTML = `
    <h1 class ="modal-header-tittle"> Compras realizadas </h1>

    `;
    modalContainer.append(modalHeader);

    // creo mi boton para poder cerrar la ventana del carrito
    const modalButton = document.createElement('h1');
    modalButton.innerText = '❌';
    modalButton.className = 'modal-header-button';
    modalButton.addEventListener('click', () => {
        modalContainer.style.display = 'none';
    });

    modalHeader.append(modalButton);

    // creo la ventana del carrito para mostrar las compras de las bebidas
    carrito.forEach((producto) => {
        const carritoContent = document.createElement('div');
        carritoContent.className = 'modal-content';
        carritoContent.innerHTML = `
        <img src="${producto.img}" class="img-producto">
        <h3>${producto.nombre}</h3>
        <p>$ ${producto.precio}</p>
        `;
        modalContainer.append(carritoContent);

        // creo el boton elimiar producto
        const eliminar = document.createElement('span');
        eliminar.innerText = '🗑️';
        eliminar.className = 'delete-product';
        carritoContent.append(eliminar);

        eliminar.addEventListener('click', eliminarBebida);
    });

    // muestro el total de la compra realizada
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalComprado = document.createElement('div');
    totalComprado.className = 'total-content';
    totalComprado.innerHTML = `total a pagar: $ ${total} `;
    modalContainer.append(totalComprado);
};

verCarrito.addEventListener('click', CargarCarrito);
// funcion en la cual elimino el prodcuto por el ID
const eliminarBebida = () => {
    const eliminarId = carrito.find((e) => e.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== eliminarId;
    });
    //elimino del localStorage el producto
    stlocal();
    CargarCarrito();
};
