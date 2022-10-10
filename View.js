
const VIEW = {
    addToView : function(product){
        let newProduct = product;
        if(typeof product === "string"){
           newProduct = JSON.parse(decodeURI(product));
        }
        const myViewItems = this.getAllItems();
        const filteredItem = myViewItems.filter(item => item.id === newProduct.id);
        if(filteredItem.length == 1){
            filteredItem[0].qty += 1;
        }else{
            myViewItems.push({
                ...newProduct,
                qty: 1
            })
        }

        localStorage.setItem('MY_VIEW', JSON.stringify(myViewItems));

    },
    removefromView : function(id){
        const myViewItems = this.getAllItems();
        const filteredItem = myViewItems.filter(item => item.id != id);
        localStorage.setItem('MY_VIEW', JSON.stringify(filteredItem));


    },
    getAllItems : function(){
        return JSON.parse(localStorage.getItem('MY_VIEW')) || [];
    },
    removeAllItems : function(){
        localStorage.removeItem('MY_VIEW')
    },
    incrementQty: function(id){
        const myViewItems = this.getAllItems();
        const filteredItem = myViewItems.filter(item => item.id == id);
        if(filteredItem.length === 1 && filteredItem[0].qty < 10){
            filteredItem[0].qty += 1;
        }
        localStorage.setItem('MY_VIEW', JSON.stringify(myViewItems));

    },
    decrementQty: function(id){
        const myViewItems = this.getAllItems();
        const filteredItem = myViewItems.filter(item => item.id == id);
        if(filteredItem.length === 1 && filteredItem[0].qty > 1){
            filteredItem[0].qty -= 1;
        }
        localStorage.setItem('MY_VIEW', JSON.stringify(myViewItems));

    }
}
// Cart.addToCart();

// function myfunction(){
//     alert(
//         "hello rinku"
//     );
// }