function removeCartItem(id){
    Cart.removefromCart(id);
    renderCartItems();
}

function renderCartItems(){
    const cartItems = Cart.getAllItems();
    let wishlistItem = 0;

    const myOrderCard = cartItems.reduce((prev, curr)=>{

          // for Rating STAR
          let star = '';
          let lowstar = '';
          for (let i = 1; i <= 5; i++) {
              if (i <= curr.ratings) {
                  star += '<i class="fa fa-star"></i> ';
              }else{
                  lowstar += '<i class="far fa-star low-star"></i> ';
              }
          };
        wishlistItem++;
        return prev + `<div class="returnproduct row d-flex justify-content-between align-items-start p-4 mb-5">
        <div class="d-flex" ><img src="images/${curr.imageName}.png" width="150px" height="150px">
        <div class="ml-3">

            <h5>${curr.name}...</h5>
            <div class="rating my-2  d-flex">
                <div class="star">${star}</div><div class="lowstar ml-1">${lowstar}</div>
            </div>
            <div class="d-flex mt-2 align-items center">
                <p class="price mr-3 font-weight-bold">Rs ${curr.priceAfterDiscount}</p>
                <p class="market-price mr-3">Rs ${curr.price}</p>
            </div>
            
        </div>
        </div>
        <div class="ml-2 myorder-track">
          <h6 class=" font-weight-bold">Deliver Expected by 18 july</h6>
          <p class="text-secondary">Your order has been placed</p>
          <a href="Track-Order.html">TRACK YOUR ORDER</a>
        </div>
    </div>`;
    }, '');
    document.getElementById('myorder-card-wrapper').innerHTML = myOrderCard;
    document.querySelector('.wishlistItem').innerHTML = wishlistItem;

}
function incrementQty(id){
    Cart.incrementQty(id);
    renderCartItems();
}
function decrementQty(id){
    Cart.decrementQty(id);
    renderCartItems();
}
renderCartItems();

