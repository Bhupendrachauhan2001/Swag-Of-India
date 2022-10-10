
renderCartItems();

function renderCartItems(){
    const cartItems = Cart.getAllItems();

    let PriceDetails = 0;
    let BigDiscount = 0;
    let OrderTotal = 0
    const cards = cartItems.reduce((prev, curr)=>{

        let ProductPrice = Math.floor(curr.qty * curr.price);
        let DiscountPrice = Math.floor(curr.qty * curr.priceAfterDiscount);
        PriceDetails = PriceDetails + ProductPrice;
        BigDiscount = BigDiscount + DiscountPrice; 
        OrderTotal = PriceDetails - BigDiscount;

        return prev + `<div class="myCart-product mb-4">
                <div class="d-flex p-4 justify-content-between">

                    <div class="d-flex justify-content-between">
                        <img src="images/${curr.imageName}.png" width="150px" height="150px" />

                        <div class="ml-3">
                            <h3>${curr.name}</h3>
                            <p class="my-1 text-secondary">Color: white</p>
                            <p class="my-2 text-secondary">Sold By: The fashion club Private Limited</p>
                            <div class="d-flex p-0 mt-3 qty-btn">
                                <button class="font-weight-bold" onclick="decrementQty(${curr.id})">-</button>
                                <div class="font-weight-bold px-3 product-qty">${curr.qty}</div>
                                <button class="font-weight-bold" onclick="incrementQty(${curr.id})">+</button>
                            </div>
                        </div> 
                    </div>

                    <div class="price-details">
                        <h5>Price: Rs ${ProductPrice}</h5>
                        <h5>Discount: Rs ${DiscountPrice}</h5> 
                    </div>

                </div>
                <div class="Cart-btn py-2">
                <button onclick="removeCartItem('${curr.id}')">Remove Item</button>
                <button onclick="WISHLIST.addToWishlist('${encodeURI(JSON.stringify(curr))}')"> Add to Wishlist</button>
                </div>
            </div>`;
    }, '');
    document.getElementById('cart-card-wrapper').innerHTML = cards;
    document.querySelector('.Price-Details').innerHTML= PriceDetails;
    document.querySelector('.Big-discount').innerHTML= BigDiscount;
    document.querySelector('.Order-Total').innerHTML= OrderTotal;
    document.querySelector('.TOTAL').innerHTML= OrderTotal;


}
function removeCartItem(id){
    Cart.removefromCart(id);
    renderCartItems();
}
function incrementQty(id){
    Cart.incrementQty(id);
    renderCartItems();
}
function decrementQty(id){
    Cart.decrementQty(id);
    renderCartItems();
}




