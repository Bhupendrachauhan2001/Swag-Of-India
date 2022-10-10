function removeWishlistItem(id){
    WISHLIST.removefromWishlist(id);
    renderWishlistItems();
}

function renderWishlistItems(){
    const WishlistItems = WISHLIST.getAllItems();
    let wishlistItem = 0;

    const WishlistCard = WishlistItems.reduce((prev, curr)=>{

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
        return prev + `<div class="returnproduct d-flex justify-content-between align-items-start p-4 mb-5">
        <img src="images/${curr.imageName}.png" width="150px" height="150px">
        <div class="ml-3">

            <h5>${curr.name}...</h5>
            <div class="rating my-2  d-flex">
                <div class="star">${star}</div><div class="lowstar ml-1">${lowstar}</div>
            </div>
            <div class="d-flex mt-2 align-items center">
                <p class="price mr-3 font-weight-bold">Rs ${curr.priceAfterDiscount}</p>
                <p class="market-price mr-3">Rs ${curr.price}</p>
                <div class="d-flex justify-content-between align-items-center ml-5 qty-btn">
                    <button class="" onclick="DecrementQty(${curr.id})">-</button>
                    <div class=" product-qty">${curr.qty}</div>
                    <button class="" onclick="IncrementQty(${curr.id})">+</button>
                </div>
            </div>
            <div class="wishlist-btn mt-3">
                <button class="addToCart-btn" onclick="Cart.addToCart('${encodeURI(JSON.stringify(curr))}')">Add To Cart</button>
                <b>|</b>
                <button class="removeToWishlist-btn" onclick="removeWishlistItem('${curr.id}')">Remove To Wishlist</button>
            </div>
        </div>
    </div>`;
    }, '');
    document.getElementById('wishlist-card-wrapper').innerHTML = WishlistCard;
    document.querySelector('.wishlistItem').innerHTML = wishlistItem;

}
function IncrementQty(id){
    console.log("nidhi")
    WISHLIST.incrementQty(id);
    renderWishlistItems();
}
function DecrementQty(id){
    console.log("nidhi")
    WISHLIST.decrementQty(id);
    renderWishlistItems();
}
renderWishlistItems();

