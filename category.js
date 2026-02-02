// Category page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get category from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('cat');
    
    if (!category) {
        // Redirect to home if no category
        window.location.href = 'index.html';
        return;
    }
    
    // Category name mapping
    const categoryNames = {
        'furniture': 'Furniture',
        'sofas': 'Sofas & Seating',
        'mattresses': 'Mattresses',
        'bed': 'Bed',
        'decor': 'Home Decor',
        'furnishings': 'Furnishings',
        'lighting': 'Lamps & Lighting',
        'kitchen': 'Kitchen & Dining',
        'luxury': 'Luxury'
    };
    
    // Update page title
    const categoryTitle = document.getElementById('categoryTitle');
    const categorySubtitle = document.getElementById('categorySubtitle');
    
    if (categoryTitle) {
        categoryTitle.textContent = categoryNames[category] || category;
    }
    
    if (categorySubtitle) {
        categorySubtitle.textContent = `Browse our ${categoryNames[category] || category} collection`;
    }
    
    // Filter and display products
    displayCategoryProducts(category);
    
    // Initialize cart display
    updateCartDisplay();
    
    // Make cart button open cart
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }
    
    // Override search to work with category page
    window.performSearch = function() {
        const searchInput = document.getElementById('searchInput');
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (!searchTerm) {
            displayCategoryProducts(category);
            return;
        }
        
        const productCards = document.querySelectorAll('.product-card');
        let foundAny = false;
        
        productCards.forEach(card => {
            const productId = parseInt(card.getAttribute('data-product-id'));
            const product = products[productId];
            
            if (product) {
                const productName = product.name.toLowerCase();
                const productDescription = product.description.toLowerCase();
                const productSubtitle = product.subtitle.toLowerCase();
                
                const matches = productName.includes(searchTerm) || 
                              productDescription.includes(searchTerm) || 
                              productSubtitle.includes(searchTerm);
                
                if (matches) {
                    card.style.display = '';
                    foundAny = true;
                } else {
                    card.style.display = 'none';
                }
            }
        });
        
        const noResultsMsg = document.getElementById('noProductsMessage');
        if (!foundAny && noResultsMsg) {
            noResultsMsg.style.display = 'block';
            noResultsMsg.innerHTML = `
                <p style="font-size: 1.2rem;">No products found matching "${searchTerm}".</p>
                <a href="category.html?cat=${category}" style="color: #8B6914; text-decoration: underline;">Show all ${categoryNames[category] || category} products</a>
            `;
        } else if (foundAny && noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
    };
    
    window.handleSearch = function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    };
});

// Display products for the selected category
function displayCategoryProducts(category) {
    const productsGrid = document.getElementById('categoryProductsGrid');
    const noProductsMessage = document.getElementById('noProductsMessage');
    
    if (!productsGrid) return;
    
    // Filter products by category
    const categoryProducts = Object.entries(products).filter(([id, product]) => {
        return product.category === category;
    });
    
    if (categoryProducts.length === 0) {
        productsGrid.style.display = 'none';
        if (noProductsMessage) {
            noProductsMessage.style.display = 'block';
        }
        return;
    }
    
    productsGrid.style.display = 'grid';
    if (noProductsMessage) {
        noProductsMessage.style.display = 'none';
    }
    
    // Generate product cards
    productsGrid.innerHTML = categoryProducts.map(([id, product]) => {
        const productId = parseInt(id);
        const badge = getProductBadge(productId);
        
        return `
            <div class="product-card" data-product-id="${productId}" onclick="showProductDetails(${productId})">
                ${badge ? `<div class="product-badge">${badge}</div>` : ''}
                <div class="product-image">
                    ${product.image ? 
                        `<img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                         <div class="product-placeholder" style="display:none;">🛋️</div>` :
                        `<div class="product-placeholder">🛋️</div>`
                    }
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.subtitle}</p>
                    <div class="product-rating">⭐⭐⭐⭐⭐ (4.8)</div>
                    <div class="product-footer">
                        <button class="contact-info-btn" onclick="event.stopPropagation(); scrollToContact()">
                            Contact Information
                        </button>
                        <button class="inquiry-btn" onclick="event.stopPropagation(); openInquiryForm(${productId})">
                            Get Quote
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Get product badge based on product ID
function getProductBadge(productId) {
    const badges = {
        1: 'BESTSELLER',
        2: 'NEW',
        3: 'PREMIUM',
        4: 'HOT',
        5: 'NEW',
        6: 'BESTSELLER'
    };
    return badges[productId] || null;
}

// Scroll to contact section (redirects to home page contact)
function scrollToContact() {
    window.location.href = 'index.html#contact-us';
}
