let cart = [];


function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.add('active');
        sectionToShow.classList.remove('hidden');
    }
    if (sectionId === 'home') displayHomeProducts();
    if (sectionId === 'cart') displayCartItems();
}


function addToCart() {
    const product = {
        title: "гоё пүүз",
        description: "орчин үеийн гоё пүүз",
        price: "$20.00",
        image: "/download (1).jpg",
    };
    cart.push(product);
    alert("таний бүтээгдэхүүн сагсруу нэмэгдсэн!");
}


function displayHomeProducts() {
    const homeContainer = document.getElementById('home-products');
    homeContainer.innerHTML = '';

    if (cart.length === 0) {
        homeContainer.innerHTML = '<p>бүтээгдэүүн байхгүй байна.</p>';
    } else {
        cart.forEach((product, index) => {
            const productCard = `
                <div class="product-card">
                    <img src="${product.image}" alt="Product Image">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <span>${product.price}</span>
                    <button onclick="editProduct(${index})">Edit</button>
                    <button onclick="deleteProduct(${index})">Delete</button>
                </div>
            `;
            homeContainer.innerHTML += productCard;
        });
    }
}


function editProduct(index) {
    const newDescription = prompt("шинэ тайбар оруул:", cart[index].description);
    if (newDescription) {
        cart[index].description = newDescription;
        alert("бүтээгдэхүүн шинэчлэгдсэн!");
        displayHomeProducts();
    }
}


function deleteProduct(index) {
    cart.splice(index, 1);
    alert("бүтээгдэхүүнийг устгасан!");
    displayHomeProducts();
}


function displayCartItems() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; 

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>таний сагс хоосон байна.</p>';
    } else {
        cart.forEach((product, index) => {
            const cartItem = `
                <div class="product-card">
                    <img src="${product.image}" alt="Product Image">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <span>${product.price}</span>
                    <button onclick="deleteProduct(${index})">Delete</button>
                </div>
            `;
            cartContainer.innerHTML += cartItem;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => showSection('home'));
