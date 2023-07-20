const addToCartAllButtons = document.querySelectorAll(".shop-item-button");
const cartItemElement = document.querySelector(".cart-items");

addToCartAllButtons.forEach(function (singleBtn) {
    singleBtn.addEventListener("click", addToCartBtnHandler);
});
function addToCartBtnHandler(event) {
    event.preventDefault();
    const currentBtn = event.target;
    // console.log(currentBtn,'currentBtn');
    const cartItem = currentBtn.parentElement.parentElement;
    // console.log(cartItem,'cartItem');
    const cartItemTitle = cartItem.querySelector(".shop-item-title").innerText;
    // console.log(cartItemTitle,'cartItemTitle');
    const cartItemPrice = cartItem.querySelector(".shop-item-price").innerText;
    // console.log(cartItemPrice,'cartItemPrice');
    const cartItemImage = cartItem.querySelector(".shop-item-image").src;
    // console.log(cartItemImage,'cartItemImage');

    const allCartItemTitles = document.querySelectorAll(".cart-item-title");

    // console.log(allCartItemTitles,'allCartItemTitles');

    let isCartItemAlreadyExist = false;

    if (allCartItemTitles.length > 0) {
        allCartItemTitles.forEach(function (singleItem) {
            // console.log(singleItem,'singleItem');
            if (singleItem.innerText === cartItemTitle) {
                isCartItemAlreadyExist = true;
            }
        })
    };
    if (isCartItemAlreadyExist) {
        alert("This item already exists in the cart");
        return;
    };
    const createDivElement = document.createElement("div");
    createDivElement.className = 'cart-row';
    createDivElement.innerHTML = `<div class="cart-item cart-column">
    <img class="cart-item-image" src="${cartItemImage}" width="100" height="100">
    <span class="cart-item-title">${cartItemTitle}</span>
</div>
<span class=" cart-column">$ <span class="cart-price-item-item">${cartItemPrice}</span></span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger btn-remove" type="button">REMOVE</button>
</div>`;
// console.log(createDivElement,'createDivElement');
cartItemElement.appendChild(createDivElement);
}