function detail() {
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;

    // Check if name and number are not empty
    if (name.trim() === "" || number.trim() === "") {
        alert("Please fill in all the details.");
    }
        else{
            alert("Message sent successfully!");
        }
}


let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("showData");

  if (ul.className == "showData") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

const containerr = document.getElementById('container1');
const kart = document.querySelector('.kart');


kart.addEventListener("click", () => {
    hideAndNavigate();
    console.log(cartProduct);

    showCart();
    calculateTotal(cartProduct);

    console.log(total);

});

function hideAndNavigate() {
    // Toggle the visibility of the container
    if (containerr.style.display = "none") {
        containerr.style.display = "block";
    } else {
        containerr.style.display = "none";
    }
}


const products = [
    {
        id: 1,
        image: 'c1.webp',
        name: 'FUNKY',
        price: '40',

    },
    {
        id: 2,
        image: 'c2.webp',
        name: 'SHIRT',
        price: '50',

    },
    {
        id: 3,
        image: 'c3.webp',
        name: 'T-SHIRT',
        price: '20',

    },
    {
        id: 4,
        image: 'c4.webp',
        name: 'TOP',
        price: '55',

    },
    {
        id: 5,
        image: 'c5.webp',
        name: 'SWEAT-SHIRT',
        price: '150',

    },
    {
        id: 6,
        image: 'c6.webp',
        name: 'JEANS',
        price: '100',

    },
    {
        id: 7,
        image: 'c7.webp',
        name: 'USPA',
        price: '200',

    },
    {
        id: 8,
        image: 'c8.webp',
        name: 'LOAFER',
        price: '300',

    },
    {
        id: 9,
        image: 'c9.webp',
        name: 'SPORTS',
        price: '250',

    },
    
];

function showProduct(){
    let cards = document.querySelector('.cards');
    products.map((product) =>{
        cards.innerHTML += `<div class="crd">
        <img src="${product.image}" alt="">
        <h3>${product.name}</h3>
        <div class="rate">
        <h3>$${product.price} : Only</h3>

        </div>
        <div class="cartt" onclick="cart(${product.id})">Add to cart <i class="fa-solid fa-cart-shopping"></i> </div>

    </div>`
    })
    
}
showProduct();

const cartProduct =  [];


function cart(id){

    let  product = products.filter((prod)=> (
     prod.id === id
    ));
        let obj = {
            id:product[0].id ,
            image:product[0].image,
            name:product[0].name,
            price:product[0].price,
        }
        cartProduct.push(obj);
        alert("Added to Cart");
}

function showCart(){
    const cartItems = document.querySelector('.cartItem');
    if(cartProduct.length===0){
        cartItems.innerHTML='<h1>Your Cart is Empty!</h1>'
    }else {
       cartProduct.map((item)=> {
        cartItems.innerHTML+= `
        <div  class="temp">
       <div><img src="${item.image}"></div>
       <div>${item.name}</div>
       <div>$${item.price}</div>
       </div>`
       })

}
}

function calculateTotal(cartProduct){
        let sum = 0;
        for(let i = 0; i < cartProduct.length; i++) {
            sum += Number(cartProduct[i].price);
            
        }
     document.getElementById('total').innerText= ` $${sum}` ;
    
    
}
// const total = calculateTotalFromArray(cartProduct);

