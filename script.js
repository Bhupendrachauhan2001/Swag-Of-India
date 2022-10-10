

// /* @@@@@@@@@@@@@@@@@@@@@@@@ INDEX FILE'S JS CODE START @@@@@@@@@@@@@@@@@@@@@ */

// // // Change flag and contact according Country  
function CountryChange() {
    const usaContact = "+1 9734639740"
    const uaeContact = "+971 8028080455"
    const canadaContact = "+1 5983472380"
    const indiaContact = "+91 8188888888"


    const c = document.getElementById("select1");
    const country = c.options[c.selectedIndex].text;
    if (country === "India") {
        let flagimg = document.getElementById('flag');
        flagimg.src = 'images/india.png';

        let Contact = document.getElementById('contact');
        Contact.innerHTML = indiaContact;

    }
    else if (country === "USA") {
        let flagimg = document.getElementById('flag');
        flagimg.src = 'images/usa.png';

        let Contact = document.getElementById('contact');
        Contact.innerHTML = usaContact;


    }
    else if (country === "UAE") {
        let flagimg = document.getElementById('flag');
        flagimg.src = 'images/uae.png';
        console.log("its uae flag")

        let Contact = document.getElementById('contact');
        Contact.innerHTML = uaeContact;
    }
    else if (country === "CANADA") {
        let flagimg = document.getElementById('flag');
        flagimg.src = 'images/canada.png';
        console.log("its canada flag");

        let Contact = document.getElementById('contact');
        Contact.innerHTML = canadaContact;

    }

};



// // ******* STICKY NAVBAR  SATRT********

const bottomheader = document.getElementById('header-sticky');
const jumbotron = document.getElementById('Jumbotron')
addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        bottomheader.classList.add("sticky");
        jumbotron.classList.add("sticky-active-jumbotron"); //JUMBOTRON WHEN STICKY NAVBAR ACTIVE
    }
    else {
        bottomheader.classList.remove("sticky")
        jumbotron.classList.remove("sticky-active-jumbotron"); // JUMBOTRON WHEN STICKY NAVBAR DEACTIVE

    }
})
// //  GO TO TOP PAGE BUTTON 
const toTop = document.getElementById('TopBtn');
addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("go-top-active");
    }
    else {
        toTop.classList.remove("go-top-active");
    }
})

// ******************LATEST ARIA PRODUCTS*******************
// the efects hover on all Products
document.querySelectorAll(".product-hover").forEach(product => {
    product.classList.add('Hide');
    product.classList.remove('blur');

})
document.querySelectorAll('div[id^=product]').forEach(product => {
    product.addEventListener('mouseover', event =>{
        product.querySelector('.product-img').classList.add('blur');
        product.querySelector('.product-img').querySelector('.product-hover').classList.remove('Hide');
        product.querySelector('.product-img').querySelector('.product-hover').classList.add('Show');
    })
    product.addEventListener('mouseleave', event =>{
        product.querySelector('.product-img').classList.remove('blur');
        product.querySelector('.product-img').querySelector('.product-hover').classList.remove('Show');
        product.querySelector('.product-img').querySelector('.product-hover').classList.add('Hide');
    })

})

// // * ************************************************************************************** */
// /* LEAVING INDEX.HTML OTHER HTML PAGE'S JAVASCRIPT CODE START  */
// /* ************************************************************************************** */


// // *************** P-R-O-D-U-C-T-S L-I-S-T-E-N-I-N-G P-A-G-E-S START ************
// // // *************** F-A-Q JS CODE START *********************************
// show & hide Answer by click 
$(document).ready(function () {
    $('#showAnswer1').click(function () {
        if($('#showAnswer1').text()==='+'){
            $('#showAnswer1').text('-')
        }else{
            $('#showAnswer1').text('+')
        }

        $("#help-answer1").toggle()
    });

})

// // // *************** F-A-Q JS CODE END*********************************


// // // *************** P-R-O-D-U-C-T-S L-I-S-T-E-N-I-N-G P-A-G-E-S END ************

