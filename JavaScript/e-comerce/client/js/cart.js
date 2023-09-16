//const { error } = require("console");

const modalContainer = document.getElementById('modal-container');
const modalOverlay = document.getElementById('modal-overlay');

const cartBtn = document.getElementById('cart-btn');
const cartCounter = document.getElementById('cart-counter');

const displayCart = () => {
    modalContainer.innerHTML = '';

    modalContainer.style.display = 'block';
    modalOverlay.style.display = 'block';
    //modal header
    const modalHeader = document.createElement('div');
    const modalClose = document.createElement('div');
    modalClose.innerText = '❌';
    modalClose.className = 'modal-close';
    modalHeader.append(modalClose);

    modalClose.addEventListener('click', () => {
        modalContainer.style.display = 'none';
        modalOverlay.style.display = 'none';
    });

    const modalTitle = document.createElement('div');
    modalTitle.innerText = 'Carrito';
    modalTitle.className = 'modal-title';
    modalHeader.append(modalTitle);
    modalContainer.append(modalHeader);
    //modal Body
    if(cart.length > 0){
    cart.forEach((products) => {
        const modalBody = document.createElement('div');
        modalBody.className = 'modal-body';
        modalBody.innerHTML = `
            <div class="product">
                <img class="product-img" src="${products.img}">
                <div class="product-info">
                    <h4>${products.productName}</h4>
                </div>
                <div class="quantity">
                    <span class="quantity-btn-decrease">-</span>
                    <span class="quantity-input">${products.quanty}</span>
                    <span class="quantity-btn-increase">+</span>
                </div>
                    <div class="price">${products.price * products.quanty} $</div> 
                    <div class="delete-product">❌</div>
                </div>
                `;     
        modalContainer.append(modalBody);

        const decrease = modalBody.querySelector('.quantity-btn-decrease');
        decrease.addEventListener('click', () => {
            if (products.quanty !== 1) {
                products.quanty --;
                displayCart();
                displayCartCounter();
            }
        });
        const increase = modalBody.querySelector('.quantity-btn-increase');
        increase.addEventListener('click', () => {
            products.quanty ++;
            displayCart();
            displayCartCounter();
        });

        const deleteProduct = modalBody.querySelector('.delete-product');
        deleteProduct.addEventListener('click', () => {
            deleteCartProduct(products.id);
        });

    });

    //modal footer
    const total = cart.reduce((acc, element) => acc + element.price * element.quanty, 0);

    const modalFooter = document.createElement('div');
    modalFooter.className = 'modal-footer';
    modalFooter.innerHTML = `
        <div class="total-price">Total: ${total}</div>
        <button class="btn-primary" id="checkout-btn">ir al checkout</button>
        <div id="button-checkout"></div>
        `;
    modalContainer.append(modalFooter);    
    //mp;
    const mercadopago = new MercadoPago("TEST-117058bd-d769-4ac9-b02d-5fca56637329",{
        locale: "es-AR", //las mas comunes son: 'pt-BR', 'es-AR' y 'en-US'
    });

    const checkoutButton = modalFooter.querySelector("#checkout-btn");

    checkoutButton.addEventListener("click", function() {
        //para evitar dos ordenes de compra
        checkoutButton.remove();
            const orderData = {
                quantity: 1,
                description: "Compra de E-comerce",
                price: total,
            };

            fetch("http://localhost:8080/create_preference", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (preference) {
                createCheckoutButton(preference.id);;
            })
            .then(function () {
                alert("Error Inesperado");
            });
        });

        function createCheckoutButton(preferenceId) {
            const bricksBuilder = mercadopago.bricks();

            const renderComponent = async (bricksBuilder) => {
                //if(window.checkoutButton) checkoutButton.unmount();

                await bricksBuilder.create(
                    "wallet",
                    "button-checkout",// class/id donde el boton de pago sera mostrado
                    {
                        initialization: {
                            preferenceId: preferenceId,
                        },
                        callbacks: {
                            onError: (error) => console.log(error),
                            onReady: ()=>{},
                        },
                    }
                );
        };
        window.checkoutButton = renderComponent(bricksBuilder);
    }

    }else{
      const modalText = document.createElement('h2');
      modalText.className = 'modalBody';
      modalText.innerText = 'No hay productos en el carrito';
      modalContainer.append(modalText);
    }
};

cartBtn.addEventListener('click', displayCart);

const deleteCartProduct = (id) => {
    const foundId = cart.findIndex((element) => element.id === id);
    console.log(foundId);

    cart.splice(foundId, 1);
    displayCart();
    displayCartCounter();
};


const displayCartCounter = () => {
  const cartLength = cart.reduce((acc, element) => acc + element.quanty, 0);
  if(cartLength>0){
    cartCounter.style.display = 'block';
    cartCounter.innerText = cartLength;
  }else{
    cartCounter.style.display = 'none';
  }

};
