const product = [
    {
        id: 0,
        image: 'images/plates.jpg',
        title: 'Snack Plate Set',
        price: 199,
        category: 'Tableware',
    },
    {
        id: 1,
        image: 'images/plate2.jpg',
        title: 'Dish Plate Set',
        price: 299,
        category: 'Tableware',
    },
    {
        id: 2,
        image: 'images/Tea Cup.jpg',
        title: 'Tea Cup Set Set',
        price: 199,
        category: 'Tableware',
    },
    {
        id: 3,
        image: 'images/Wooden Cup & Saucer Set.jpg',
        title: 'Wooden Cup & Saucer Set',
        price: 399,
        category: 'Tableware',
    },
    {
        id: 4,
        image: 'images/serving-platter.jpg',
        title: 'Serving Platter',
        price: 399,
        category: 'Tableware',
    },
    {
        id: 5,
        image: 'images/Large Wooden Soup Bowl.jpg',
        title: 'Large Wooden Soup Bowl',
        price: 399,
        category: 'Tableware',
    },
    {
        id: 6,
        image: 'images/bowl.jpg',
        title: 'Salad Bowl Set',
        price: 299,
        category: 'Tableware',
    },
    {
        id: 7,
        image: 'images/Large Fruit Bowl.jpg',
        title: 'Large Fruit Bowl',
        price: 499,
        category: 'Tableware',
    },
    {
        id: 8,
        image: 'images/Large Serving Platter.jpg',
        title: 'Large Serving Platter',
        price: 299,
        category: 'Tableware',
    },
    {
        id: 9,
        image: 'images/spatulas.jpg',
        title: 'Spatula Set',
        price: 299,
        category: 'Utensils',
    },
    {
        id: 10,
        image: 'images/Spatula and  Soup Spoon Set.jpg',
        title: 'Spatula and Soup Spoon Set',
        price: 399,
        category: 'Utensils',
    },
    {
        id: 11,
        image: 'images/Mortar & Pestle.jpg',
        title: 'Mortar & Pestle',
        price: 399,
        category: 'Utensils',
    },
    {
        id: 12,
        image: 'images/Wooden Measuring Cups.jpg',
        title: 'Wooden Measuring Cups',
        price: 299,
        category: 'Utensils',
    },
    {
        id: 13,
        image: 'images/utensils.jpg',
        title: 'Spoon and Fork Set',
        price: 199,
        category: 'Cutlery',
    },
    {
        id: 14,
        image: 'images/straws.jpg',
        title: 'Straw',
        price: 99,
        category: 'Cutlery',
    },
    {
        id: 15,
        image: 'images/Salad Serving Spoon Fork Set.jpg',
        title: 'Salad Serving Spoon Fork Set',
        price: 299,
        category: 'Cutlery',
    },
    {
        id: 16,
        image: 'images/Bento Box Set.jpg',
        title: 'Bento Box Set',
        price: 299,
        category: 'Food Storage and Container',
    },
    {
        id: 17,
        image: 'images/Wood Spice Tower.jpg',
        title: 'Wood Spice Tower',
        price: 299,
        category: 'Food Storage and Container',
    },
    {
        id: 18,
        image: 'images/spice jar set3.jpg',
        title: 'Wood Spice Jar Set 3',
        price: 399,
        category: 'Food Storage and Container',
    },
    {
        id: 19,
        image: 'images/bento box_2 (1).jpg',
        title: 'Bento Box Set 2',
        price: 199,
        category: 'Food Storage and Container',
    },
];

const cart = [];

        const addToCart = (productId) => {
            cart.push({ ...product[productId] });
            displayCart();
            document.getElementById("count").innerHTML = cart.length; 
        };

        const removeCartItem = (index) => {
            cart.splice(index, 1);
            displayCart();
            document.getElementById("count").innerHTML = cart.length; 
            console.log("Item removed from cart. New cart count:", cart.length);
        };

        const displayCart = () => {
            const cartItemDiv = document.getElementById('cartItem');
            cartItemDiv.innerHTML = '';
            let total = 0;
            if (cart.length === 0) {
                cartItemDiv.textContent = "Your cart is empty";
                document.getElementById("total").innerHTML = "Php 0.00";
            } else {
                cart.forEach((item, index) => {
                    total += item.price; 
                    const cartItem = document.createElement('div');
                    cartItem.classList.add('cart-item');
                    cartItem.innerHTML = `
                        <div class='row-img'>
                            <img class='rowing' src='${item.image}' alt='${item.title}'>
                        </div>
                        <p style='font-size:12px;'>${item.title}</p>
                        <h2 style='font-size:15px;'>Php ${item.price}.00</h2>
                        <button class='remove-button' onclick='removeCartItem(${index})'>Remove</button>
                    `;
                    cartItemDiv.appendChild(cartItem);
                });
                document.getElementById("total").innerHTML = "Php " + total.toFixed(2); 
            }
        };

        const rootDiv = document.getElementById('root');
        product.forEach((item, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('box');
            productDiv.innerHTML = `
                <div class="img-box">
                    <img class="images" src="${item.image}" alt="${item.title}">
                </div>
                <div class="bottom">
                    <p>${item.title}</p>
                    <h3> ${item.category}</h3>
                    <h2>Php ${item.price}.00</h2>
                    <button onclick="addToCart(${index})">Add to cart</button>
                </div>
            `;
            rootDiv.appendChild(productDiv);
        });
        const placeOrder = () => {
            document.getElementById('root').innerHTML = '';
            document.getElementById('cartItem').innerHTML = '';
        
            const orderForm = document.createElement('form');
            orderForm.innerHTML = `
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br><br>
                <label for="address">Address:</label>
                <textarea id="address" name="address" required></textarea><br><br>
                <div class="button-container">
                    <button type="submit" class="order-button">Submit Order</button>
                </div>
            `;
            
            document.getElementById('root').appendChild(orderForm);
            
            function calculateTotal(cart) {
                let total = 0;
                cart.forEach(item => {
                    total += item.price; 
                });
                return total;
            }
            
            orderForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const formData = new FormData(orderForm);
                const orderData = {};
                formData.forEach((value, key) => {
                    orderData[key] = value;
                });
            
                const name = orderData['name'];
                const email = orderData['email'];
                const address = orderData['address'];
                const total = calculateTotal(cart); 
            
                const confirmationMessage = `Order Details:
            Name: ${name}
            Email: ${email}
            Address: ${address}
            Amount: Php ${total.toFixed(2)}
            
            Your order has been placed and will be delivered in 3 working days.
            Thank you for your order!`;
            
                const isConfirmed = confirm(confirmationMessage);
                
                if (isConfirmed) {
                    window.location.href = "mainpage.html"; 
                }
            });
    
            const style = `
                form {
                    width: 80vh;
                    margin: 0 auto;
                    padding: 20px;
                    border: 5px solid #ccc;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    background-color: #f9f9f9;
                }
                label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                }
                input, textarea {
                    width: calc(100% - 22px);
                    padding: 10px;
                    margin-bottom: 20px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                textarea {
                    resize: vertical;
                    height: 100px;
                }
                .button-container {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                }
                .order-button {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    background-color: #B99470;
                    color: white;
                    cursor: pointer;
                    margin-top: 10px;
                }
                .order-button:hover {
                    background-color: #948979;
                }
            `;
        
            const styleSheet = document.createElement("style");
            styleSheet.type = "text/css";
            styleSheet.innerText = style;
            document.head.appendChild(styleSheet);
        };
        
        document.getElementById('placeOrderButton').addEventListener('click', placeOrder);
        
        
        const categories = [...new Set(product.map((item) => { return item }))]

        document.getElementById('searchBar').addEventListener('keyup', (e) => {
            const searchData = e.target.value.toLowerCase();
            const filteredData = categories.filter((item) => {
                return (
                    item.title.toLowerCase().includes(searchData)
                )
            })
            displayItem(filteredData)
        });
        const displayItem = (items) => {
            const rootDiv = document.getElementById('root');
            rootDiv.innerHTML = items.map((item, index) => {
                return `
                    <div class="product">
                        <div class="img-box">
                            <img class="images" src="${item.image}" alt="${item.title}">
                        </div>
                        <div class="bottom">
                            <p>${item.title}</p>
                            <h3>${item.category}</h3>
                            <h2>Php ${item.price}.00</h2>
                            <button onclick="addToCart(${index})">Add to cart</button>
                        </div>
                    </div>`;
            }).join('');
        };
        displayItem(categories);