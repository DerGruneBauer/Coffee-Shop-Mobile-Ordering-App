
const cafeItems = [
    { name: "Drip Coffee", category:  "Coffee", description: "Regular drip style coffee. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  2.5 },
    { name: "Espresso", category:  "Coffee", description: "A double shot of espresso. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  2.5 },
    { name: "Americano", category:  "Coffee", description: "Espresso with hot water. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  3 },
    { name: "Latte", category:  "Coffee", description: "Espresso with steamed milk. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  4 },
    { name: "Cappucino", category:  "Coffee", description: "Espresso with foamed milk. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  4 },
    { name: "Tea", category:  "Hot Drink", description: "Your choice of hot black or green tea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  2.5 },
    { name: "Hot Chocolate", category:  "Hot Drink", description: "Chocolate syrup with steamed milk. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  2 },
    { name: "Mocha", category: "Hot Drink", description: "Espresso with chocolate syrup and steamed milk. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 3 },
    { name: "Iced Tea", category:  "Cold Drink", description: "Sun-brewed black iced tea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  2.5 },
    { name: "Sparkling Water", category:  "Cold Drink", description: "A bottle of San Pellegrino. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  3 },
    { name: "Mate", category: "Cold Drink", description: "A South American strong tea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 3},
    { name: "Salad", category:  "Food", description: "Mixed greens with your choice of dressing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  5 },
    { name: "Sandwich", category:  "Food", description:  "Sandwich with various contents. Varies daily. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  4 },
    { name: "Pastry", category:  "Food", description: "Rotating pastry. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  3},
]

let addButton = document.querySelectorAll('.addCart');
let deleteButton = document.querySelectorAll('.delete');
let checkout = document.querySelector('.checkoutItems');
let checkoutOutside = document.getElementById('checkout');
checkoutOutside.style.height = "0px";
let cartButton = document.querySelector('.cart');
let cost = document.querySelector('.totalCost');
let menuItems = document.querySelector('.menuItems');
let cart = [];
let totalCost = 0;
let newCartItem;
let index;

//Toggle cart open or close
const toggleCart = () => {

    if (checkoutOutside.style.height == '0px'){
        checkoutOutside.style.height = '300px';
        checkoutOutside.style.transition = 'height 1s'
        checkout.style.display = 'block';
        cost.style.display = 'block';
        menuItems.style.opacity = '.5';
        menuItems.style.transition = 'opacity 1s';
    } else {
        checkoutOutside.style.height = '0px';
        checkout.style.display = 'none';
        cost.style.display = 'none';
        checkoutOutside.style.transition = 'height 1s';
        menuItems.style.opacity = '1';
        menuItems.style.transition = 'opacity 1s';
    }
}

//Add to cart function
addButton.forEach((addButton) => {
    addButton.addEventListener("click", (addToCart) => {
       let imageParent = image.parentNode;
       let imageId = imageParent.id;
        index = cart.length;
        let idNum = imageId.substring(1);
        cart.push(cafeItems[idNum]);
        
        newCartItem = document.createElement("div");
        let itemDetails = document.createTextNode(`${cafeItems[idNum].name} • ${cafeItems[idNum].price}`);
        newCartItem.appendChild(itemDetails);
        checkout.appendChild(newCartItem);
        newCartItem.innerHTML = `${newCartItem.innerHTML} <button id=I${index} class ="delete" onclick='removeFromCart()'>X</button>`;
        totalCost = cafeItems[idNum].price + totalCost;
        newCartItem.style.display = 'flex';
        newCartItem.style.justifyContent = 'space-between';
        cost.innerHTML = (`<strong>Total Cost: </strong>${totalCost}`);
        // cartButton.innerHTML = `${cart.length} items in your cart`;
    }) 

})

//Remove items from cart function

let removeFromCart = function () {
    let cartItems = checkout.childNodes;

    cartItems.forEach((newCartItem) => {
       const deleteItem = () => {
        let item = newCartItem.lastChild.id;
        let itemsIndex = document.getElementById(item);
        let str =  itemsIndex.parentNode.innerText;
        let price = str.match(/[\d\.]+/); 
        let priceNumber = parseFloat(price[0]);
        totalCost = totalCost - priceNumber;
        cost.innerHTML = `<strong>Total Cost: </strong>${totalCost}`;
        cart.splice(itemsIndex, 1);
        // cartButton.innerHTML = `${cart.length} items in your cart`;
        if (cost.innerHTML == `<strong>Total Cost: </strong>0`){
            cost.innerHTML = ``;
            checkoutOutside.style.height = 'auto';
        checkoutOutside.style.width = '0px';
        checkoutOutside.style.padding = '0px';
        checkout.style.display = 'none';
        cost.style.display = 'none';
        checkoutOutside.style.transition = 'width 1s'
        }
        itemsIndex.parentNode.remove();
       }
       newCartItem.addEventListener("click", deleteItem);
    })
}


//Additions of names, descriptions and prices
let name = document.querySelector('.name');
let price = document.querySelector('.price');
let description = document.querySelector('.des');

name.innerHTML = cafeItems[0].name;
price.innerHTML = cafeItems[0].price;
 description.innerHTML = cafeItems[0].description;

let options = {
    root: document.querySelector('.menuItems'),
    rootMargin: '0px',
    threshold: .85
  }
  //oberserver for drip coffee
  let dcObserver = new IntersectionObserver((dcCallback) => {
    name.innerHTML = cafeItems[0].name;
   price.innerHTML = cafeItems[0].price;
    description.innerHTML = cafeItems[0].description;
    document.querySelector('.name')
  }, options);
  let dcTarget = document.querySelector('.dripCoffee');
    dcObserver.observe(dcTarget);
//observer for espresso
let eObserver = new IntersectionObserver((eCallback) => {
    name.innerHTML = cafeItems[1].name;
    price.innerHTML = cafeItems[1].price;
    description.innerHTML = cafeItems[1].description;
}, options)
let eTarget = document.querySelector('.espresso');
    eObserver.observe(eTarget);
//obeserver for americano
    let aObserver = new IntersectionObserver((aCallback) => {
        name.innerHTML = cafeItems[2].name;
        price.innerHTML = cafeItems[2].price;
        description.innerHTML = cafeItems[2].description;
    }, options)
    let aTarget = document.querySelector('.americano');
        aObserver.observe(aTarget);
//observer for latte
let lObserver = new IntersectionObserver((lCallback) => {
    name.innerHTML = cafeItems[3].name;
    price.innerHTML = cafeItems[3].price;
    description.innerHTML = cafeItems[3].description;
}, options)
let lTarget = document.querySelector('.latte');
    lObserver.observe(lTarget);
//observer for cappucino
let cObserver = new IntersectionObserver((cCallback) => {
    name.innerHTML = cafeItems[4].name;
    price.innerHTML = cafeItems[4].price;
    description.innerHTML = cafeItems[4].description;
}, options)
let cTarget = document.querySelector('.cappucino');
    cObserver.observe(cTarget);
//observer for tea
let tObserver = new IntersectionObserver((tCallback) => {
    name.innerHTML = cafeItems[5].name;
    price.innerHTML = cafeItems[5].price;
    description.innerHTML = cafeItems[5].description;
}, options)
let tTarget = document.querySelector('.tea');
    tObserver.observe(tTarget);
//observer for hot chocolate
let hcObserver = new IntersectionObserver((hcCallback) => {
    name.innerHTML = cafeItems[6].name;
    price.innerHTML = cafeItems[6].price;
    description.innerHTML = cafeItems[6].description;
}, options)
let hcTarget = document.querySelector('.hotChoco');
    hcObserver.observe(hcTarget);
//observer for mocha
let mObserver = new IntersectionObserver((mCallback) => {
    name.innerHTML = cafeItems[7].name;
    price.innerHTML = cafeItems[7].price;
    description.innerHTML = cafeItems[7].description;
}, options)
let mTarget = document.querySelector('.mocha');
    mObserver.observe(mTarget);



// document.querySelector('.icedTeaDes').innerHTML = `${cafeItems[8].name}<br>${cafeItems[8].description}<br>${cafeItems[8].price}`;
// document.querySelector('.waterDes').innerHTML = `${cafeItems[9].name}<br>${cafeItems[9].description}<br>${cafeItems[9].price}`;
// document.querySelector('.mateDes').innerHTML = `${cafeItems[10].name}<br>${cafeItems[10].description}<br>${cafeItems[10].price}`;
// document.querySelector('.saladDes').innerHTML = `${cafeItems[11].name}<br>${cafeItems[11].description}<br>${cafeItems[11].price}`;
// document.querySelector('.soupDes').innerHTML = `${cafeItems[12].name}<br>${cafeItems[12].description}<br>${cafeItems[12].price}`;
// document.querySelector('.pastryDes').innerHTML = `${cafeItems[13].name}<br>${cafeItems[13].description}<br>${cafeItems[13].price}`;



