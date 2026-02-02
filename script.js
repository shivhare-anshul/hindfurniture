// Global variables
let cart = [];

// Product data with detailed descriptions
const products = {
    1: {
        name: 'Premium Fabric Sofa',
        subtitle: 'Elegant and comfortable sofa perfect for your living room',
        image: 'Images/Sofa/Sofa.jpeg',
        category: 'sofas',
        description: 'Transform your living room with this elegant premium fabric sofa featuring luxurious upholstery and plush cushioning. Designed for maximum comfort and style, this sofa combines contemporary aesthetics with exceptional durability. The premium fabric is soft to touch yet resistant to wear, making it perfect for daily use. The deep seating and supportive cushions provide ultimate relaxation for family gatherings, entertaining guests, or simply unwinding after a long day. The sturdy frame ensures years of reliable use while maintaining its elegant appearance.',
        specs: {
            'Material': 'Premium Fabric, High-Density Foam, Solid Wood Frame',
            'Seating Capacity': '3-4 People',
            'Style': 'Modern Contemporary',
            'Cushion Type': 'Plush, Removable',
            'Frame': 'Solid Wood Construction',
            'Warranty': '2 Years',
            'Maintenance': 'Easy to Clean',
            'Color Options': 'Available in Multiple Colors'
        }
    },
    2: {
        name: 'Modern 3-Seater Sofa',
        subtitle: 'Contemporary design with premium comfort',
        image: 'Images/Sofa/Sofa2.jpeg',
        category: 'sofas',
        description: 'Experience modern luxury with this stunning 3-seater sofa that combines sleek contemporary design with exceptional comfort. The clean lines and elegant silhouette make it a perfect centerpiece for any modern living space. Crafted with attention to detail, this sofa features premium materials that ensure both style and longevity. The comfortable seating and supportive backrest make it ideal for lounging, reading, or watching TV. Its versatile design complements various interior styles, from minimalist to eclectic.',
        specs: {
            'Material': 'Premium Upholstery, High-Quality Foam, Hardwood Frame',
            'Seating Capacity': '3 People Comfortably',
            'Design': 'Contemporary Modern',
            'Comfort Level': 'Premium Plush',
            'Durability': 'High-Quality Construction',
            'Warranty': '2 Years',
            'Assembly': 'Professional Assembly Available',
            'Style': 'Sleek and Modern'
        }
    },
    3: {
        name: 'Luxury Sectional Sofa',
        subtitle: 'Spacious and stylish for modern homes',
        image: 'Images/Sofa/Sofa3.jpeg',
        category: 'sofas',
        description: 'Create a luxurious living space with this elegant sectional sofa that offers both style and functionality. This spacious piece is perfect for larger rooms and provides ample seating for family and guests. The sectional design allows for flexible arrangement to suit your space. With premium materials and expert craftsmanship, this sofa offers exceptional comfort and durability. The elegant design and plush cushions make it the perfect spot for relaxation, socializing, or family movie nights.',
        specs: {
            'Material': 'Luxury Fabric, Premium Foam, Reinforced Frame',
            'Seating Capacity': '4-5 People',
            'Configuration': 'Sectional (Modular)',
            'Comfort': 'Ultra-Plush Cushioning',
            'Design': 'Luxury Contemporary',
            'Warranty': '3 Years',
            'Size': 'Spacious Sectional',
            'Style': 'Elegant and Luxurious'
        }
    },
    4: {
        name: 'Premium Comfort Chair',
        subtitle: 'Ergonomic design with excellent support',
        image: 'Images/Chairs/Chair.jpeg',
        category: 'furnishings',
        description: 'Enhance your comfort with this premium chair designed for both style and ergonomic support. Whether for your office, study, or living room, this chair provides excellent lumbar support and comfortable seating. The elegant design complements any decor while the high-quality materials ensure durability. Perfect for long hours of work or relaxation, this chair promotes proper posture and reduces strain. The sophisticated appearance makes it a beautiful addition to any space.',
        specs: {
            'Material': 'Premium Upholstery, High-Density Foam, Sturdy Frame',
            'Ergonomic Support': 'Excellent Lumbar Support',
            'Design': 'Elegant and Modern',
            'Comfort': 'Premium Cushioning',
            'Use': 'Office, Study, Living Room',
            'Warranty': '1 Year',
            'Style': 'Sophisticated Design',
            'Durability': 'High-Quality Materials'
        }
    },
    5: {
        name: 'Modern Shoe Rack',
        subtitle: 'Organize your footwear with style',
        image: 'Images/Shoe_Rack/Shoe_Rack.jpeg',
        category: 'furnishings',
        description: 'Keep your entryway organized and clutter-free with this modern shoe rack. Designed with both functionality and aesthetics in mind, this shoe rack provides ample storage space for your footwear collection. The sleek design complements modern interiors while the sturdy construction ensures durability. Perfect for hallways, entryways, or closets, this shoe rack helps maintain a tidy and organized home. The open design allows for easy access to your shoes while keeping them neatly displayed.',
        specs: {
            'Material': 'Durable Wood/MDF Construction',
            'Storage Capacity': 'Multiple Pairs',
            'Design': 'Modern and Sleek',
            'Placement': 'Entryway, Hallway, Closet',
            'Assembly': 'Easy Assembly',
            'Warranty': '1 Year',
            'Style': 'Contemporary',
            'Functionality': 'Space-Efficient Design'
        }
    },
    6: {
        name: 'Spacious Wardrobe',
        subtitle: 'Ample storage with elegant design',
        image: 'Images/Almira/Almira.jpeg',
        category: 'furniture',
        description: 'Maximize your bedroom storage with this spacious and elegant wardrobe. This wardrobe offers extensive storage space for all your clothing, accessories, and personal items. The well-designed interior includes hanging space, shelves, and compartments to keep everything organized. The elegant exterior design adds sophistication to your bedroom while the quality construction ensures years of reliable use. Perfect for organizing your entire wardrobe in one convenient location.',
        specs: {
            'Material': 'Premium Wood/MDF Construction',
            'Storage': 'Ample Hanging and Shelving Space',
            'Doors': 'Smooth Sliding or Hinged',
            'Interior': 'Organized Compartments',
            'Design': 'Elegant and Functional',
            'Warranty': '3 Years',
            'Size': 'Spacious Storage',
            'Style': 'Classic Elegant Design'
        }
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Hindfurniture initialized!');
    updateCartDisplay();
    
    // Make cart button open cart
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }
});

// Update cart display
function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
    
    updateCartItems();
    updateCartTotal();
}

// Update cart items in modal
function updateCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Your cart is empty</p>
                <p class="empty-cart-hint">Add some furniture to get started!</p>
            </div>
        `;
        return;
    }
    
    cartItemsContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${index})">Remove</button>
        </div>
    `).join('');
}

// Update cart total
function updateCartTotal() {
    const cartTotal = document.getElementById('cartTotal');
    if (cartTotal) {
        cartTotal.textContent = `${cart.length} item${cart.length !== 1 ? 's' : ''}`;
    }
    
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
    }
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

// Open cart
function openCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.add('show');
    }
}

// Close cart
function closeCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.remove('show');
    }
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add items to cart first!');
        return;
    }
    
    const itemNames = cart.map(item => item.name).join(', ');
    
    // Clear cart
    cart = [];
    updateCartDisplay();
    closeCart();
    
    // Show success message
    alert(`Thank you for your interest!\n\nItems: ${itemNames}\n\nPlease contact us for pricing and to complete your order.`);
    scrollToContact();
}

// Hero section functions
function scrollToProducts() {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll to contact section
function scrollToContact() {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Search functionality
function handleSearch(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        // Show all products if search is empty
        showAllProducts();
        return;
    }
    
    // Get all product cards
    const productCards = document.querySelectorAll('.product-card');
    let foundAny = false;
    
    productCards.forEach(card => {
        const productId = parseInt(card.getAttribute('data-product-id'));
        const product = products[productId];
        
        if (product) {
            const productName = product.name.toLowerCase();
            const productDescription = product.description.toLowerCase();
            const productSubtitle = product.subtitle.toLowerCase();
            
            // Search in name, description, and subtitle
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
    
    // Show message if no results found
    const productsGrid = document.querySelector('.products-grid');
    if (!foundAny && productsGrid) {
        const noResultsMsg = document.getElementById('no-results-message');
        if (!noResultsMsg) {
            const message = document.createElement('div');
            message.id = 'no-results-message';
            message.style.textAlign = 'center';
            message.style.padding = '2rem';
            message.style.color = '#666';
            message.innerHTML = '<p>No products found matching your search.</p>';
            productsGrid.appendChild(message);
        }
    } else {
        const noResultsMsg = document.getElementById('no-results-message');
        if (noResultsMsg) {
            noResultsMsg.remove();
        }
    }
}

function showAllProducts() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.display = '';
    });
    
    const noResultsMsg = document.getElementById('no-results-message');
    if (noResultsMsg) {
        noResultsMsg.remove();
    }
}

// Show product details modal
function showProductDetails(productId) {
    const product = products[productId];
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    // Build specs HTML
    const specsHTML = Object.entries(product.specs).map(([key, value]) => `
        <div class="spec-item">
            <span class="spec-label">${key}</span>
            <span class="spec-value">${value}</span>
        </div>
    `).join('');
    
    // Build image HTML if available
    const imageHTML = product.image ? `
        <div class="modal-product-image-container">
            <img src="${product.image}" alt="${product.name}" class="modal-product-image" onerror="this.style.display='none';">
        </div>
    ` : '';
    
    modalBody.innerHTML = `
        ${imageHTML}
        <h2 class="modal-product-title">${product.name}</h2>
        <p class="modal-product-subtitle">${product.subtitle}</p>
        <div class="modal-product-description">${product.description}</div>
        <div class="modal-product-specs">
            ${specsHTML}
        </div>
        <div class="modal-product-footer">
            <button class="modal-contact-btn" onclick="closeProductModal(); scrollToContact();">Contact for Information</button>
            <button class="modal-inquiry-btn" onclick="closeProductModal(); openInquiryForm(${productId});">Get Quote</button>
        </div>
    `;
    
    modal.classList.add('show');
}

// Close product modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// Add to cart from modal
function addToCartFromModal(productId) {
    const product = products[productId];
    if (!product) return;
    
    addToCart(productId, product.name, product.price);
    closeProductModal();
}

// Add to cart function
function addToCart(productId, productName, price) {
    const product = {
        id: productId,
        name: productName,
        price: price
    };
    
    cart.push(product);
    updateCartDisplay();
    
    // Animate cart button
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.style.transform = 'scale(1.05)';
        setTimeout(() => {
            cartBtn.style.transform = 'scale(1)';
        }, 200);
    }
}
