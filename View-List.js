

function renderViewItems(){
    const ViewlistItems = VIEW.getAllItems();
    let viewlistItem = 0;

    const ViewlistCard = ViewlistItems.reduce((prev, curr)=>{

          // for Rating STAR
          let star = '';
          let lowstar = '';
          for (let i = 1; i <= 5; i++) {
              if (i <= curr.ratings) {
                  star += '<i class="far fa-star"></i> ';
              }else{
                  lowstar += '<i class="far fa-star low-star"></i> ';
              }
          }; 
        prev = '';
        return prev + `<div class="row">
        <!--Product Image and Images View -->
        <div class="col-6">
            <div class="Images d-flex justify-content-start">
                <div class="small-img mr-3 d-flex flex-column align-items-center ">
                    <img src="images/${curr.imageName}.png" alt="small-img" width="65px" height="70px">
                    <img src="images/${curr.imageName}.png" alt="small-img" width="65px" height="70px">
                    <img src="images/${curr.imageName}.png" alt="small-img" width="65px" height="70px">
                    <img src="images/${curr.imageName}.png" alt="small-img" width="65px" height="70px">
                </div>
                <!-- <div class="big-img"> -->
                <img src="images/${curr.imageName}.png" alt="">
            </div>
            <!-- </div> -->
        </div>
        <div class="col-6 d-flex flex-column ">
            <div class="products-details">
                <h6>Classic Chinos Pants</h6>

                <div class="mt-3 mb-0">
                    <a href="#review" class="rating d-flex text-decoration-none">
                        <div class="star">${star}</div><div class="lowstar ml-1">${lowstar}</div>
                        <span class="rating-count mx-2 text-success font-weight-bold">39,122 ratings</span>
                        <span class="rating-count text-success font-weight-bold">1000+ Answered Qustion</span>
                    </a>
                </div>
                <br>
                <div class="prices d-flex justify-conten ">
                    <p class="price mr-3 ">Rs ${curr.priceAfterDiscount}</p>
                    <p class="market-price mr-3">Rs ${curr.price}</p>
                    <p class="discount">(60% OFF)</p>
                </div>
                <div class="short-description">
                    <h6>Short Description</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis est nam labore et
                        adipisci rem esse! Ea saepe ad nobis quis, cumque tempora consectetur dignissimos
                        aliquid voluptate, possimus maiores dolorum!</p>
                </div>

                <!-- Size and Quantity of product -->

                <div class="Size-Qty d-flex justify-content-between align-items-center">
                    <div class="size text-left">
                        <h6>SELECT SIZE</h6>
                        <div class="select-size d-flex justify-content-center align-items-center">
                            <div class="size-number">39</div>
                            <div class="size-number">40</div>
                            <div class="size-number">42</div>
                            <div class="size-number">44</div>
                        </div>
                    </div>
                    <div class="quantity ">
                        <h6>QTY</h6>
                        <div class="select-quantity d-flex justify-content-start align-items-center">
                            <div class="decreament" onclick="Decrementqty(${curr.id})" id="Quantitydecrease">-</div>
                            <div class="count" id="QuantityCount" value="3">${curr.qty}</div>
                            <div class="increament" onclick="Incrementqty(${curr.id})" id="Quantityincrease">+</div>
                        </div>
                    </div>
                </div>

                <!-- BUY , ADD-TO-CART AND WISHLIST BUUTON -->
                <div class="products-listening-btn d-flex align-items-center mt-4 ">
                    <button class="cart-btn" onclick="Cart.addToCart('${encodeURI(JSON.stringify(curr))}')" id="">Add to cart</button>
                    <button class="buy-btn" id="main-btn">Buy Now</button>
                    <button class="wishlist-btn" onclick="WISHLIST.addToWishlist('${encodeURI(JSON.stringify(curr))}')"  id="main-btn"><i class="far fa-heart"
                            aria-hidden="true"></i></button>
                </div>
                <div class="products-share mt-4 d-flex justify-content-start align-content-center">
                    <h6 class="d-block mt-2 mr-3">SHARE THIS</h6>
                    <div class="icons">
                        <a class="" href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-youtube"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                    </div>
                </div>



            </div>
            <div class="diliverySupport  d-flex justify-content-between align-items-center text-center">
                <div class="d-flex justify-content-between align-items-center">
                    <img src="images/Image 170.png" alt="" width="40px" height="40px">
                    <span class="text-center">DIILIVERY AND RETURN</span>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <img src="images/Image 171.png" alt="" width="40px" height="40px">
                    <span>ONILE SUPPORT 24/7</span>
                </div>
            </div>
        </div>
    </div>`;
    }, '');
    document.getElementById('Listening-card-wrapper').innerHTML = ViewlistCard;
    // document.querySelector('.wishlistItem').innerHTML = wishlistItem;

}
function Incrementqty(id){
    console.log("NIDHIIIIIIIIII RINKUUUU")
    VIEW.incrementQty(id);
    renderViewItems();
}
function Decrementqty(id){
    VIEW.decrementQty(id);
    renderViewItems();
}
renderViewItems();

