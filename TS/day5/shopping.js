var productArray = [];
var map = {};
productArray.push({
    title: "Essence Mascara Lash Princess",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/2/394197451/ZZ/RI/MB/60935377/1-500x500.png",
    description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    price: 9999,
    category: "beauty"
}, {
    title: "L'Oreal Paris Lipstick",
    image: "https://m.media-amazon.com/images/I/71fajUXqn+L.jpg",
    description: "L'Oreal Paris Lipstick provides vibrant color and a smooth matte finish, perfect for any occasion.",
    price: 1499,
    category: "beauty"
}, {
    title: "Apple iPhone 15 Pro",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14qUZqT0M49gz5cv1skXQuWjXUKC0RLAXTQ&s",
    description: "The iPhone 15 Pro features an A17 chip, ProMotion display, and advanced camera system for the best mobile experience.",
    price: 129999,
    category: "electronics"
}, {
    title: "Samsung 4K Smart TV",
    image: "https://images.samsung.com/is/image/samsung/p6pim/in/ua85du8300uxxl/gallery/in-crystal-uhd-du8000-ua85du8300uxxl-540319934?$684_547_PNG$",
    description: "Experience ultra-HD visuals and smart TV features with the Samsung 4K Smart TV, perfect for home entertainment.",
    price: 79999,
    category: "electronics"
}, {
    title: "Gaming Laptop ASUS ROG",
    image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg",
    description: "The ASUS ROG Gaming Laptop delivers high-performance gaming with a powerful GPU, RGB keyboard, and cooling system.",
    price: 159999,
    category: "electronics"
}, {
    title: "Sony Wireless Headphones",
    image: "https://www.sony.co.in/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
    description: "Sony Wireless Headphones provide noise cancellation and immersive sound for music lovers and travelers.",
    price: 19999,
    category: "electronics"
}, {
    title: "Nike Air Max Sneakers",
    image: "https://assets.ajio.com/medias/sys_master/root/20210610/WGFy/60c23519aeb269a9e3e39c02/-1117Wx1400H-460886348-black-MODEL.jpg",
    description: "Nike Air Max Sneakers combine comfort, style, and durability for everyday wear and sports activities.",
    price: 7999,
    category: "fashion"
}, {
    title: "Adidas Running Shoes",
    image: "https://m.media-amazon.com/images/I/717k-AM84LL._AC_UY1000_.jpg",
    description: "Adidas Running Shoes offer superior cushioning and grip, ideal for athletes and fitness enthusiasts.",
    price: 6999,
    category: "fashion"
}, {
    title: "Fossil Men's Leather Watch",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/y/r/z/-original-imagphkzsajh8rjf.jpeg?q=90&crop=false",
    description: "The Fossil Men's Leather Watch is a stylish and classic timepiece, perfect for formal and casual wear.",
    price: 12999,
    category: "accessories"
}, {
    title: "Wooden Study Table",
    image: "https://www.lakkadhaara.com/cdn/shop/products/NewProject-8.png?v=1669977245",
    description: "A premium-quality wooden study table with a sleek design and ample storage space for home or office use.",
    price: 15999,
    category: "furniture"
}, {
    title: "Samsung Galaxy Watch",
    image: "https://m.media-amazon.com/images/I/71162EQnpKL._AC_UF1000,1000_QL80_.jpg",
    description: "The Samsung Galaxy Watch offers fitness tracking, heart rate monitoring, and seamless smartphone integration.",
    price: 24999,
    category: "electronics"
}, {
    title: "Leather Office Chair",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_sk39M1CQ_d53Sd1G8zfWxZ9YqIm21UXYQ&s",
    description: "A comfortable and ergonomic leather office chair designed for long hours of work and productivity.",
    price: 18999,
    category: "furniture"
});
//save into local storage
function saveProduct() {
    var allProduct = document.getElementById("cardsDiv");
    localStorage.setItem("allProduct", JSON.stringify(allProduct));
    console.log(allProduct);
}
saveProduct();
//reload function
function reload() {
}
var totalCount = 0;
var totalProductInCart = [];
var headDiv = document.getElementById("headDiv");
var cardDiv = document.getElementById("cardsDiv");
for (var idx = 0; idx < 12; idx++) {
    createDiv(productArray[idx]);
}
function createDiv(product) {
    var divCard = document.createElement("div");
    divCard.id = "productCard";
    var tittle = document.createElement("h3");
    tittle.textContent = product.title;
    tittle.className = "tittleCard";
    tittle.style.fontSize = "100%";
    tittle.style.textAlign = "center";
    divCard.appendChild(tittle);
    var img = document.createElement("img");
    img.style.width = "200px";
    img.style.height = "150px";
    img.alt = product.title;
    img.src = product.image;
    img.className = "imgCard";
    divCard.appendChild(img);
    var description = document.createElement("p");
    description.id = "descriptionCard";
    description.textContent = product.description;
    description.className = "descriptionCard";
    divCard.appendChild(description);
    var price = document.createElement("h5");
    price.textContent = "Cost $ ".concat((product.price));
    price.className = "priceCard";
    divCard.appendChild(price);
    //adding into cart
    var divAdd = document.createElement("div");
    divAdd.id = "addButton";
    var btnAdd = document.createElement("button");
    btnAdd.type = "button";
    btnAdd.innerHTML = "ADD";
    //total calculation of item in each div
    var divCalculation = document.createElement("div");
    divCalculation.id = "divCalculation";
    divCalculation.style.display = "none";
    //counter
    var countEachProduct = document.createElement("span");
    countEachProduct.id = product.title; //count span block........
    countEachProduct.textContent = "1";
    var add = document.createElement("button");
    add.innerHTML = "+";
    add.type = "button";
    add.className = "buttonAM";
    add.onclick = function () {
        var currCount = parseInt(countEachProduct.textContent || "1", 10);
        countEachProduct.textContent = (currCount + 1).toString();
        addToCart(product, currCount + 1);
    };
    var minus = document.createElement("button");
    minus.innerHTML = "-";
    minus.type = "button";
    minus.className = "buttonAM";
    minus.onclick = function () {
        var currCount = parseInt(countEachProduct.textContent || "1", 10);
        if (currCount <= 1) {
            divCalculation.style.display = "none";
            divAdd.style.display = "block";
            countEachProduct.textContent = "1";
            addToCart(product, -1);
        }
        else {
            countEachProduct.textContent = (currCount - 1).toString();
            addToCart(product, currCount - 1);
        }
    };
    divCalculation.appendChild(minus);
    divCalculation.appendChild(countEachProduct);
    divCalculation.appendChild(add);
    btnAdd.onclick = function () {
        totalProductInCart.push(product);
        divAdd.style.display = "none";
        divCalculation.style.display = "flex";
        addToCart(product, 1);
    };
    divAdd.appendChild(btnAdd);
    divCard.appendChild(divAdd);
    divCard.appendChild(divCalculation);
    var divCat = document.createElement("div");
    var category = document.createElement("h5");
    category.id = "category";
    var label = document.createElement("label");
    label.textContent = "Category  :";
    category.textContent = product.category;
    label.style.fontSize = "15px";
    label.style.fontWeight = "bold";
    category.className = "categoryCard";
    divCat.appendChild(label);
    divCat.appendChild(category);
    divCat.style.display = "flex";
    divCat.style.alignItems = "center";
    divCard.append(divCat);
    divCard.style.width = "250px";
    divCard.style.height = "450px";
    divCard.style.display = "flex";
    divCard.style.flexDirection = "column";
    divCard.style.margin = "10px";
    divCard.style.padding = "10px";
    divCard.style.justifyContent = "center";
    divCard.style.alignItems = "center";
    divCard.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
    cardDiv === null || cardDiv === void 0 ? void 0 : cardDiv.appendChild(divCard);
    if (cardDiv) {
        cardDiv.style.display = "flex";
        cardDiv.style.flexWrap = "wrap";
        cardDiv.style.gap = "20px";
        cardDiv.style.flex = "row";
        cardDiv.style.margin = "10px";
        cardDiv.style.justifyContent = "center";
    }
}
//cart function
function cart() {
    var mainDiv = document.getElementById("cardsDiv");
    var cartDiv = document.getElementById("cartDiv") || null;
    var selectOption = document.getElementById("selectOption");
    if (selectOption)
        selectOption.disabled = true;
    if (mainDiv)
        mainDiv.style.display = "none";
    if (!cartDiv) {
        cartDiv = document.createElement("div");
        cartDiv.id = "cartDiv";
        var btnBack_1 = document.createElement("button");
        btnBack_1.id = "btnBack";
        btnBack_1.innerHTML = "Home";
        btnBack_1.onclick = function () {
            cartDiv.style.display = "none";
            if (mainDiv)
                mainDiv.style.display = "flex";
            selectOption.disabled = false;
        };
        cartDiv.appendChild(btnBack_1);
        document.body.appendChild(cartDiv);
        console.log("This if block");
    }
    var btnBack = document.getElementById("btnBack");
    cartDiv.innerHTML = "";
    cartDiv.appendChild(btnBack);
    cartDiv.style.display = "block";
    var div2 = document.createElement("div");
    var _loop_1 = function (elem) {
        var product = map[elem].product;
        var item = map[elem].count;
        var divCart = document.createElement("div");
        divCart.className = "cartDiv1";
        var tittle = document.createElement("h3");
        tittle.textContent = product.title;
        tittle.className = "tittleCard";
        tittle.style.fontSize = "100%";
        tittle.style.textAlign = "center";
        divCart.appendChild(tittle);
        var img = document.createElement("img");
        img.style.width = "200px";
        img.style.height = "150px";
        img.alt = product.title;
        img.src = product.image;
        img.className = "imgCard";
        divCart.appendChild(img);
        var description = document.createElement("p");
        description.id = "descriptionCard";
        description.textContent = product.description;
        description.className = "descriptionCard";
        divCart.appendChild(description);
        var price = document.createElement("h5");
        price.textContent = "Cost $ ".concat((product.price));
        price.className = "priceCard";
        divCart.appendChild(price);
        var quantityDiv = document.createElement("div");
        quantityDiv.style.width = "100px";
        quantityDiv.style.display = "flex";
        quantityDiv.style.justifyContent = "space-between";
        var countSpan = document.createElement("span");
        countSpan.innerText = item.toString();
        var homeDivSpan = document.getElementById(product.title);
        // Create "-" button (decrease quantity)
        var minusBtn = document.createElement("button");
        minusBtn.innerText = "-";
        minusBtn.className = "buttonAM";
        minusBtn.onclick = function () {
            if (map[elem].count > 1) {
                map[elem].count--; // Decrease quantity
                countSpan.textContent = map[elem].count.toString();
                if (homeDivSpan)
                    homeDivSpan.textContent = map[elem].count.toString();
            }
            else {
                delete map[elem]; // Remove product from cart if count = 0
            }
            cart(); // Refresh cart
        };
        var plusBtn = document.createElement("button");
        plusBtn.innerText = "+";
        plusBtn.onclick = function () {
            map[elem].count++; // Increase quantity
            countSpan.textContent = map[elem].count.toString();
            if (homeDivSpan)
                homeDivSpan.textContent = map[elem].count.toString();
            cart(); // Refresh cart
        };
        plusBtn.className = "buttonAM";
        // Add buttons and count to quantity div
        quantityDiv.appendChild(minusBtn);
        quantityDiv.appendChild(countSpan);
        quantityDiv.appendChild(plusBtn);
        //style
        divCart.appendChild(quantityDiv);
        div2.appendChild(divCart);
        div2.style.display = "flex";
        div2.style.flexWrap = "wrap";
        div2.style.justifyContent = "center";
        div2.style.gap = "20px";
        div2.style.padding = "20px";
    };
    for (var elem in map) {
        _loop_1(elem);
    }
    cartDiv.appendChild(div2);
}
//function addToCart
function addToCart(products, count) {
    if (count == -1) {
        delete map[products.title];
    }
    else {
        if (map[products.title]) {
            map[products.title].count = count;
        }
        else {
            map[products.title] = { product: products, count: count };
        }
    }
}
//filter
function filterCart() {
    var _a;
    var filter = document.getElementById("selectOption").value;
    var divAll = document.getElementById('cardsDiv');
    var product = divAll === null || divAll === void 0 ? void 0 : divAll.children;
    if (product) {
        for (var idx = 0; idx < (product === null || product === void 0 ? void 0 : product.length); idx++) {
            var card = product[idx];
            if (card) {
                var category = card.querySelector("#category");
                if (category) {
                    var text = (_a = category.textContent) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
                    if (filter == text || filter == 'all') {
                        card.style.display = "flex";
                    }
                    else {
                        card.style.display = "none";
                    }
                }
            }
        }
    }
}
