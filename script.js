
const cafeItems = [
    { name: "Drip Coffee", imgUrl: 'https://globalassets.starbucks.com/assets/bffaf0f27e124801abcabe09f05b0fb2.jpg', category:  "Coffee", description: "Regular drip style coffee. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  2.5 },
    { name: "Espresso", imgUrl: 'https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg', category:  "Coffee", description: "A double shot of espresso. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  2.5 },
    { name: "Americano", imgUrl: 'https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg', category:  "Coffee", description: "Espresso with hot water. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  3 },
    { name: "Latte", imgUrl: 'https://globalassets.starbucks.com/assets/edd75880341c437ab194c14835fbb24e.jpg', category:  "Coffee", description: "Espresso with steamed milk. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  4 },
    { name: "Cappucino", imgUrl: 'https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg', category:  "Coffee", description: "Espresso with foamed milk. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  4 },
    { name: "Tea", imgUrl: 'https://globalassets.starbucks.com/assets/6f780d5d392542c6b9b1a4412881cecc.jpg', category:  "Hot Drink", description: "Your choice of hot black or green tea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  2.5 },
    { name: "Hot Chocolate", imgUrl: 'https://globalassets.starbucks.com/assets/d39650cf28d44aa283a0f311581e3491.jpg', category:  "Hot Drink", description: "Chocolate syrup with steamed milk. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  2 },
    { name: "Mocha", imgUrl: 'https://globalassets.starbucks.com/assets/f4ec500b34624242b15c2d29e53f3c48.jpg', category: "Hot Drink", description: "Espresso with chocolate syrup and steamed milk. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 3 },
    { name: "Iced Tea", imgUrl: 'https://globalassets.starbucks.com/assets/9d487fd1bd5048ef8190689b2d4fe167.jpg', category:  "Cold Drink", description: "Sun-brewed black iced tea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  2.5 },
    { name: "Sparkling Water", imgUrl: 'https://globalassets.starbucks.com/assets/db9386b255ed440b893861e87f368934.jpg', category:  "Cold Drink", description: "A bottle of San Pellegrino. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  3 },
    { name: "Mate", imgUrl: 'https://globalassets.starbucks.com/assets/8cd203f920844ccc95dd514f8b0d4972.jpg', category: "Cold Drink", description: "A South American strong tea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 3},
    { name: "Salad", imgUrl: 'https://globalassets.starbucks.com/assets/4037795cf3b34c839cf444017aad2579.jpg', category:  "Food", description: "Mixed greens with your choice of dressing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  5 },
    { name: "Sandwich", imgUrl: 'https://globalassets.starbucks.com/assets/f7febd6b86084135b98a13fa95c72f51.jpg', category:  "Food", description:  "Sandwich with various contents. Varies daily. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  4 },
    { name: "Pastry", imgUrl: 'https://globalassets.starbucks.com/assets/7d4665b4af2541e387336966c6e3f1fb.jpg', category:  "Food", description: "Rotating pastry. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price:  3},
]

let name = document.querySelector('.name');
let price = document.querySelector('.price');
let description = document.querySelector('.description');
let menuItemDiv = document.querySelectorAll('.menuItems div');
let cartHeader = document.querySelector('.cartHeader');
let cartWrapper = document.querySelector('.cartWrapper');
cartWrapper.style.height = "0px";
let addButton = document.querySelector('.addCart');
let deleteButton = document.querySelectorAll('.delete');
let checkout = document.querySelector('.checkoutItems');
let checkoutOutside = document.getElementById('checkout');
let cartButton = document.querySelector('.cart');
let cost = document.querySelector('.totalCost');
let menuItems = document.querySelector('.menuItems');
let cart = [];
let totalCost = 0;
let newCartItem;
let index;
let totalCostPrice = document.querySelector('.totalCostPrice');
let checkoutButton = document.querySelector('.checkoutButton');

//Toggle cart open or close
const toggleCart = () => {

    if (cartWrapper.style.height == '0px'){
        cartWrapper.style.height = '500px';
        cartWrapper.style.transition = 'height 1s'
        checkout.style.display = 'block';
        cost.style.display = 'block';
        menuItems.style.opacity = '.5';
        menuItems.style.transition = 'opacity 1s';
        cartHeader.style.display = 'block';
        totalCostPrice.style.display = 'block';
        checkoutButton.style.display = 'block';
    } else {
        cartWrapper.style.height = '0px';
        checkout.style.display = 'none';
        cost.style.display = 'none';
        cartWrapper.style.transition = 'height 1s';
        menuItems.style.opacity = '1';
        menuItems.style.transition = 'opacity 1s';
        cartHeader.style.display = 'none';
        totalCostPrice.style.display = 'none';
        checkoutButton.style.display = 'none';
    }
}


const addToCart = () => {
    cart.push(cafeItems[itemId]);
    index = cart.length;
    newCartItem = document.createElement('div');
    let itemPicture = document.createElement(`IMG`);
    itemPicture.setAttribute("src", `${cafeItems[itemId].imgUrl}`)
    itemPicture.style.height = "75px"
    itemPicture.style.width = "75px"
    let itemDetails = document.createElement('div');
    itemDetails.innerHTML = `${cafeItems[itemId].name}`;
    let itemPrice = document.createElement('div');
    itemPrice.innerHTML = `${cafeItems[itemId].price}`;
    itemPrice.style.display = 'none';
    newCartItem.appendChild(itemPrice);
    newCartItem.appendChild(itemPicture);
    newCartItem.appendChild(itemDetails);
    newCartItem.classList.add('newCartItem');
    newCartItem.innerHTML = `${newCartItem.innerHTML} <button id=I${index} class ="delete" onclick='removeFromCart()'>X</button>`;
    checkout.appendChild(newCartItem);

    totalCost = cafeItems[itemId].price + totalCost; 
    totalCostPrice.innerHTML = totalCost;

}
addButton.addEventListener("click", addToCart);



//Remove items from cart function
let removeFromCart = function () {
    let cartItems = checkout.childNodes;

    cartItems.forEach((newCartItem) => {
        const deleteItem = () => {

            let deletedItem = newCartItem.lastChild.id;
            let deletedItemId = deletedItem.substring(1);
            let deletedItemElement = document.getElementById(deletedItem);
            deletedItemElement.parentNode.remove();
            cart.splice(deletedItemId, 1);

            let removePrice = newCartItem.firstChild.innerText;
            totalCost = totalCost - removePrice;
            totalCostPrice.innerHTML = totalCost;
        }
        newCartItem.addEventListener("click", deleteItem);
    })
    
}



//Observers to change items as user scrolls through items
let itemId;
let options = {
    root: document.querySelector('.menuItems'),
    rootMargin: '0px',
    threshold: 1
  }

const callback = entries => {
    for (const entry of entries) {
        if (entry.intersectionRatio === 1) {
            itemId = entry.target.id.substring(1);
            name.innerHTML = cafeItems[itemId].name;
            price.innerHTML = cafeItems[itemId].price;
            description.innerHTML = cafeItems[itemId].description;
        }
    }
}

const observer = new IntersectionObserver(callback, options);
for (const element of Array.from(menuItemDiv)) {
    observer.observe(element);
}

const backToMainMenu = () => {
    let bodyWrapper = document.querySelector('.wrapper');
    let headerWrapper = document.querySelector('header');
    let mainMenu = document.querySelector('.mainMenu');

    bodyWrapper.style.display = 'none';
    headerWrapper.style.display = 'none';
    mainMenu.style.display = 'flex';
    mainMenu.style.transition = 'opacity 5s';
    mainMenu.style.opacity = '.5';

}