// Global variables
let frontImage = null;
let backImage = null;
let photoImage = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Load template images
    loadTemplateImages();
    
    // Initialize event listeners
    initializeForm();
    initializeCardFlip();
    initializePreview();
});

// Load front and back template images
function loadTemplateImages() {
    frontImage = new Image();
    frontImage.src = '/idcard/front.png';
    frontImage.onload = () => updateCardPreview();
    frontImage.onerror = () => console.error('Failed to load front.png');

    backImage = new Image();
    backImage.src = '/idcard/back.png';
    backImage.onload = () => updateCardPreview();
    backImage.onerror = () => console.error('Failed to load back.png');
}

// Initialize form inputs
function initializeForm() {
    const form = document.getElementById('patientForm');
    const inputs = form.querySelectorAll('input, select');
    const photoInput = document.getElementById('photo');

    // Update preview on input change
    inputs.forEach(input => {
        if (input.id !== 'photo') {
            input.addEventListener('input', updateCardPreview);
            input.addEventListener('change', updateCardPreview);
        }
    });

    // Handle photo upload
    photoInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                photoImage = new Image();
                photoImage.src = event.target.result;
                photoImage.onload = updateCardPreview;
            };
            reader.readAsDataURL(file);
        } else {
            photoImage = null;
            updateCardPreview();
        }
    });

    // Reset button
    document.getElementById('resetBtn').addEventListener('click', function() {
        form.reset();
        photoImage = null;
        updateCardPreview();
    });

    // Print button
    document.getElementById('printBtn').addEventListener('click', printCard);
}

// Initialize card flip animation
function initializeCardFlip() {
    const cardWrapper = document.getElementById('cardWrapper');
    
    cardWrapper.addEventListener('click', function() {
        cardWrapper.classList.toggle('flipped');
    });

    // View buttons
    document.getElementById('viewFrontBtn').addEventListener('click', function() {
        cardWrapper.classList.remove('flipped');
        updateViewButtons();
    });

    document.getElementById('viewBackBtn').addEventListener('click', function() {
        cardWrapper.classList.add('flipped');
        updateViewButtons();
    });
}

function updateViewButtons() {
    const isFront = !document.getElementById('cardWrapper').classList.contains('flipped');
    document.getElementById('viewFrontBtn').classList.toggle('active', isFront);
    document.getElementById('viewBackBtn').classList.toggle('active', !isFront);
}

// Initialize preview
function initializePreview() {
    // Set canvas sizes on window resize
    window.addEventListener('resize', updateCardPreview);
    updateCardPreview();
}

// Update card preview on canvas
function updateCardPreview() {
    updateFrontCard();
    updateBackCard();
}

// Draw front card
function updateFrontCard() {
    const canvas = document.getElementById('frontCanvas');
    if (!canvas || !frontImage || !frontImage.complete) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    const displayWidth = rect.width;
    const displayHeight = rect.height;

    // Draw background template
    ctx.drawImage(frontImage, 0, 0, displayWidth, displayHeight);

    // Get form data
    const patientID = document.getElementById('patientID').value || 'DS-0000-0000';
    const patientName = document.getElementById('patientName').value || 'Bismark Asiamah Kofi';
    const gender = document.getElementById('gender').value || 'MALE';
    const contact = document.getElementById('contact').value || '(024) 272-0000';

    // Draw photo if available (on the left side)
    if (photoImage && photoImage.complete) {
        const photoX = displayWidth * 0.05;
        const photoY = displayHeight * 0.15;
        const photoSize = displayHeight * 0.55;
        
        // Clip to rounded rectangle
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(photoX, photoY, photoSize, photoSize, 10);
        ctx.clip();
        
        // Draw photo
        ctx.drawImage(photoImage, photoX, photoY, photoSize, photoSize);
        ctx.restore();
    }

    // Text styling
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'left';

    // Draw patient name - shifted to the right
    ctx.font = 'bold 18px Arial';
    ctx.fillText('NAME: ' + patientName.substring(0, 30), displayWidth * 0.45, displayHeight * 0.35);

    // Draw patient ID - shifted to the right
    ctx.font = 'bold 18px Arial';
    ctx.fillText('PATIENT ID #:: ' + patientID, displayWidth * 0.45, displayHeight * 0.55);

    // Draw gender - shifted to the right
    ctx.font = '16px Arial';
    ctx.fillText('GENDER: ' + gender, displayWidth * 0.45, displayHeight * 0.72);

    // Draw contact - shifted to the right
    ctx.fillText('CONTACT: ' + contact, displayWidth * 0.45, displayHeight * 0.88);
}

// Draw back card
function updateBackCard() {
    const canvas = document.getElementById('backCanvas');
    if (!canvas || !backImage || !backImage.complete) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    const displayWidth = rect.width;
    const displayHeight = rect.height;

    // Draw background template only - no text
    ctx.drawImage(backImage, 0, 0, displayWidth, displayHeight);
}

// Print functionality
function printCard() {
    const printSection = document.getElementById('printSection');
    const printFront = document.getElementById('printFrontCanvas');
    const printBack = document.getElementById('printBackCanvas');

    // Get form data
    const patientID = document.getElementById('patientID').value || 'DS-0000-0000';
    const patientName = document.getElementById('patientName').value || 'Bismark Asiamah Kofi';
    const gender = document.getElementById('gender').value || 'MALE';
    const contact = document.getElementById('contact').value || '(024) 272-0000';

    // Set high-quality print canvas dimensions
    const width = 1125;
    const height = 675;

    // ===== RENDER FRONT CARD =====
    printFront.width = width;
    printFront.height = height;
    const ctxFront = printFront.getContext('2d');
    
    // Draw front template
    if (frontImage && frontImage.complete) {
        ctxFront.drawImage(frontImage, 0, 0, width, height);
    }

    // Draw photo on front if available
    if (photoImage && photoImage.complete) {
        const photoX = width * 0.05;
        const photoY = height * 0.15;
        const photoSize = height * 0.55;
        
        ctxFront.save();
        ctxFront.beginPath();
        ctxFront.roundRect(photoX, photoY, photoSize, photoSize, 10);
        ctxFront.clip();
        ctxFront.drawImage(photoImage, photoX, photoY, photoSize, photoSize);
        ctxFront.restore();
    }

    // Draw text on front card
    ctxFront.fillStyle = '#000000';
    ctxFront.textAlign = 'left';

    // Patient name
    ctxFront.font = 'bold 18px Arial';
    ctxFront.fillText('NAME: ' + patientName.substring(0, 30), width * 0.45, height * 0.35);

    // Patient ID
    ctxFront.font = 'bold 18px Arial';
    ctxFront.fillText('PATIENT ID #:: ' + patientID, width * 0.45, height * 0.55);

    // Gender
    ctxFront.font = '16px Arial';
    ctxFront.fillText('GENDER: ' + gender, width * 0.45, height * 0.72);

    // Contact
    ctxFront.fillText('CONTACT: ' + contact, width * 0.45, height * 0.88);

    // ===== RENDER BACK CARD =====
    printBack.width = width;
    printBack.height = height;
    const ctxBack = printBack.getContext('2d');
    
    // Draw back template image only (no text)
    if (backImage && backImage.complete) {
        ctxBack.drawImage(backImage, 0, 0, width, height);
    } else {
        // Fallback to white background if template not loaded
        ctxBack.fillStyle = '#ffffff';
        ctxBack.fillRect(0, 0, width, height);
    }

    // Show print section
    printSection.classList.remove('hidden');
    printSection.classList.add('block');
    printSection.style.display = 'block';

    // Trigger print with delay to ensure rendering is complete
    setTimeout(() => {
        window.print();
        
        // Hide print section after print dialog closes
        setTimeout(() => {
            printSection.classList.add('hidden');
            printSection.classList.remove('block');
            printSection.style.display = 'none';
        }, 500);
    }, 300);
}

// Polyfill for roundRect if needed
if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius) {
        if (typeof radius === 'undefined') {
            radius = 5;
        }
        this.beginPath();
        this.moveTo(x + radius, y);
        this.lineTo(x + width - radius, y);
        this.quadraticCurveTo(x + width, y, x + width, y + radius);
        this.lineTo(x + width, y + height - radius);
        this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        this.lineTo(x + radius, y + height);
        this.quadraticCurveTo(x, y + height, x, y + height - radius);
        this.lineTo(x, y + radius);
        this.quadraticCurveTo(x, y, x + radius, y);
        this.closePath();
    };
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printCard();
    }
    
    // Space to flip card in preview
    if (e.code === 'Space' && !['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        document.getElementById('cardWrapper').click();
    }
});
