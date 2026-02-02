// Product Inquiry Form Functionality

// Initialize EmailJS (using public key - you'll need to set this up)
// For now, we'll use a fallback mailto approach

// Open Inquiry Form
function openInquiryForm(productId) {
    const product = products[productId];
    if (!product) return;
    
    const modal = document.getElementById('inquiryModal');
    const productNameInput = document.getElementById('inquiryProduct');
    const productIdInput = document.getElementById('inquiryProductId');
    const productNameHidden = document.getElementById('inquiryProductName');
    
    if (modal && productNameInput && productIdInput && productNameHidden) {
        productNameInput.value = product.name;
        productIdInput.value = productId;
        productNameHidden.value = product.name;
        modal.classList.add('show');
        
        // Reset form
        document.getElementById('inquiryForm').reset();
        productNameInput.value = product.name; // Set again after reset
        productIdInput.value = productId;
        productNameHidden.value = product.name;
    }
}

// Close Inquiry Form
function closeInquiryForm() {
    const modal = document.getElementById('inquiryModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// Submit Inquiry Form
function submitInquiryForm(event) {
    event.preventDefault();
    
    const submitBtn = document.getElementById('submitInquiryBtn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    const formData = {
        name: document.getElementById('inquiryName').value,
        mobile: document.getElementById('inquiryMobile').value,
        email: document.getElementById('inquiryEmail').value,
        city: document.getElementById('inquiryCity').value,
        productName: document.getElementById('inquiryProductName').value,
        productId: document.getElementById('inquiryProductId').value
    };
    
    const product = products[formData.productId];
    if (!product) {
        alert('Product not found!');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        return;
    }
    
    // Build product specifications text
    const specsText = Object.entries(product.specs).map(([key, value]) => 
        `${key}: ${value}`
    ).join('\n');
    
    // Build product link
    let productLink = '';
    if (window.location.pathname.includes('category.html')) {
        productLink = window.location.origin + window.location.pathname + window.location.search;
    } else {
        productLink = window.location.origin + window.location.pathname.replace('index.html', '') + 
                     `category.html?cat=${product.category}`;
    }
    
    // Log for testing
    console.log('=== INQUIRY FORM SUBMISSION ===');
    console.log('Product:', product.name);
    console.log('Customer:', formData.name);
    console.log('Email:', formData.email);
    console.log('Product Link:', productLink);
    
    // Build email body
    const emailBody = `Hi Team,

A customer has shown interest in the following product:

Product Name: ${product.name}
Product Subtitle: ${product.subtitle}
Product Description: ${product.description}

Product Specifications:
${specsText}

Product Link: ${productLink}

Customer Details:
Name: ${formData.name}
Mobile Number: ${formData.mobile}
Email Address: ${formData.email}
City: ${formData.city}

Please contact the customer soon to understand their requirements and provide assistance.

Thank you!`;

    // Build email subject
    const emailSubject = `New Inquiry for ${product.name} - ${formData.name}`;
    
    // For testing: Use shivhareanshul78@gmail.com
    // For production: Use soumyarawat51@gmail.com
    const recipientEmail = 'shivhareanshul78@gmail.com';
    
    // Try to send email using EmailJS if available
    try {
        // Check if EmailJS is initialized
        if (typeof emailjs !== 'undefined' && emailjs.send) {
            // EmailJS template parameters
            const emailParams = {
                to_email: recipientEmail,
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.mobile,
                city: formData.city,
                product_name: product.name,
                product_subtitle: product.subtitle,
                product_description: product.description,
                product_specs: specsText,
                product_link: productLink,
                message: emailBody,
                subject: emailSubject
            };
            
            // Initialize EmailJS with your public key
            // You'll need to get this from EmailJS dashboard
            // emailjs.init("YOUR_PUBLIC_KEY");
            
            // Send email
            // Replace with your actual Service ID and Template ID from EmailJS
            // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams)
            //     .then(function(response) {
            //         console.log('Email sent successfully!', response.status, response.text);
            //         alert('Thank you! We have received your inquiry. Our executive will contact you soon.');
            //         closeInquiryForm();
            //     }, function(error) {
            //         throw error; // Fall through to mailto
            //     });
            
            // For now, fall through to mailto
            throw new Error('EmailJS not configured');
        } else {
            throw new Error('EmailJS not available');
        }
    } catch (error) {
        console.log('Using mailto fallback:', error);
        console.log('Email Subject:', emailSubject);
        console.log('Email Body:', emailBody);
        console.log('Recipient:', recipientEmail);
        
        // Fallback: Use mailto link
        const mailtoSubject = encodeURIComponent(emailSubject);
        const mailtoBody = encodeURIComponent(emailBody);
        const mailtoLink = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
        
        console.log('Mailto Link:', mailtoLink);
        
        // Show email preview in console for testing
        console.log('\n=== EMAIL PREVIEW ===');
        console.log('To:', recipientEmail);
        console.log('Subject:', emailSubject);
        console.log('\nBody:\n', emailBody);
        console.log('===================\n');
        
        // Try to open mailto
        window.location.href = mailtoLink;
        
        // Show success message
        setTimeout(() => {
            alert('Thank you! Your email client should open with a pre-filled email.\n\nIf it doesn\'t open, check the browser console for the email details.\n\nOur executive will contact you soon!');
            closeInquiryForm();
        }, 100);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}
