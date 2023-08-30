const shopContent = document.getElementById('shopContent');
//carrito
const cart = [];

products.forEach((product) => {
    const content = document.createElement('div');
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.productName}</h3>
        <p>${product.price} $</p>
    `;
    shopContent.append(content);

    //generando el boton de comprar
    const buyButton = document.createElement('button');
    buyButton.innerText = 'Comprar';

    content.append(buyButton);

    buyButton.addEventListener('click', () => {
        cart.push({
            id: product.id,
            productName: product.productName,
            price: product.price,
            quanty: product.quanty,
            img: product.img,
        });
        console.log(cart);
    });
})