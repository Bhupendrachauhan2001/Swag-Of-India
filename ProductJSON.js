let productsListUrl = 'Products.json';
var productsList;
let htmlToReturn;
async function loadProducts(productsListUrl) {
    fetch(productsListUrl)
        .then(response => response.json())
        .then(json => {
            productsList = json;
            productsList.Products.forEach(product => {
                // for NEW 
                let New = '';
                if(product.isNew === "TRUE"){
                    New = '<span>New</span>';
                }else {
                    New = '';
                };
                // for Rating STAR
                let star = '';
                for (let i = 1; i <= 5; i++) {
                    if (i <= product.ratings) {
                        star += '<i class="far fa-star"></i>';
                    }else{
                        star += '<i class="far fa-star low-star"></i>';
                    }
                };
                htmlToReturn = `<div class="col-xl-4 col-lg-4 col-md-6">
            <div class="single-product" id="product${product.id}">
            <div class="product-img">
                <img src="images/${product.imageName}.png" alt="">
                <div class="new-product">
                    ${New}
                </div>
                <div class="product-hover">
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <div onclick="Cart.addToCart('${encodeURI(JSON.stringify(product))}')"><img src="images/cart.png"  alt=""></div>
                            </div>
                            <div class="col-4">
                                <div onclick="VIEW.addToView('${encodeURI(JSON.stringify(product))}')"><img src="images/view.png" alt=""></div>
                            </div>
                            <div class="col-4">
                                <div onclick="WISHLIST.addToWishlist('${encodeURI(JSON.stringify(product))}')"><img src="images/wishlist.png" alt=""></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-caption">
                <div class="product-rating">
                    ${star}
                </div>
                <h4><a href="#">${product.name}</a></h4>
                <div class="price">
                    <ul>
                        <li>$${product.priceAfterDiscount}</li>
                        <li class="discount">$${product.price}</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>`
                document.getElementById('ProductListArea').innerHTML += htmlToReturn;
            });
            document.querySelectorAll(".product-hover").forEach(product => {
                product.classList.add('Hide');
                product.classList.remove('blur');

            })
            document.querySelectorAll('div[id^=product]').forEach(product => {
                product.addEventListener('mouseover', event => {
                    product.querySelector('.product-img').classList.add('blur');
                    product.querySelector('.product-img').querySelector('.product-hover').classList.remove('Hide');
                    product.querySelector('.product-img').querySelector('.product-hover').classList.add('Show');
                })
                product.addEventListener('mouseleave', event => {
                    product.querySelector('.product-img').classList.remove('blur');
                    product.querySelector('.product-img').querySelector('.product-hover').classList.remove('Show');
                    product.querySelector('.product-img').querySelector('.product-hover').classList.add('Hide');
                })

            })
        })
}
loadProducts(productsListUrl);