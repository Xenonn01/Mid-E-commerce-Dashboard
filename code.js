function displayProducts(products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = `
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h5>${product.name}</h5>
                    <p>Price: $${product.price}</p>
                    <p>Stock: ${product.stock}</p>
                    <button class="btn btn-primary add-to-cart">Add to Cart</button>
                    <div class="notification"></div> <!-- Move the notification area here -->
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
           
            const notification = button.nextElementSibling; 
            notification.textContent = "The product has been successfully added to your cart!";
            notification.style.display = 'block'; 

            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        });
    });
}


fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayProducts(data);
    })
    .catch(error => {
        console.error('Error fetching the JSON data:', error);
    });

