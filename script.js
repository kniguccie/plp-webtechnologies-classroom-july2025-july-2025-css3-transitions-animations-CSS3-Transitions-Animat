// Function to toggle slide animation for the box
function toggleSlide(elementId, className) {
    // Local scope: element is only accessible within this function
    const element = document.getElementById(elementId);
    
    // Check if element exists to avoid errors
    if (!element) {
        console.error(`Element with ID ${elementId} not found`);
        return false;
    }
    
    // Toggle the specified class
    element.classList.toggle(className);
    
    // Return whether the class is currently applied
    return element.classList.contains(className);
}

// Function to toggle card flip animation
function toggleFlip(elementId) {
    const card = document.getElementById(elementId);
    if (!card) {
        console.error(`Card with ID ${elementId} not found`);
        return false;
    }
    
    card.classList.toggle('flipped');
    return card.classList.contains('flipped');
}

// Function to start/stop continuous pulse animation
function togglePulse(elementId) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with ID ${elementId} not found`);
        return false;
    }
    
    element.classList.toggle('pulse');
    return element.classList.contains('pulse');
}

// Event listener for button to trigger slide and pulse
document.getElementById('slideBtn').addEventListener('click', () => {
    const isSliding = toggleSlide('box', 'slide');
    const isPulsing = togglePulse('box');
    
    // Update button text based on animation state
    const button = document.getElementById('slideBtn');
    button.textContent = isSliding ? 'Reset Box' : 'Slide Box';
    
    // Log animation state (demonstrating return value usage)
    console.log(`Box is ${isSliding ? 'sliding' : 'reset'}`);
    console.log(`Pulse is ${isPulsing ? 'active' : 'inactive'}`);
});

// Event listener for card click to trigger flip
document.getElementById('card').addEventListener('click', () => {
    const isFlipped = toggleFlip('card');
    console.log(`Card is ${isFlipped ? 'flipped' : 'not flipped'}`);
});

// Global scope variable (for demonstration)
const animationCount = 0;

// Function to track animation triggers (demonstrating global vs local scope)
function trackAnimation(animationType) {
    // Local variable
    let count = animationCount + 1;
    
    // This won't affect the global animationCount
    console.log(`Animation ${animationType} triggered ${count} times (local scope)`);
    
    // Return the local count
    return count;
}

// Example usage of trackAnimation
document.getElementById('slideBtn').addEventListener('click', () => {
    trackAnimation('slide');
});

