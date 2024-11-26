const messages = ["Developer.","Designer.", "Freelancer."];
let messageIndex = 0;
let charIndex = 0;
const typingSpeed = 100; 
const erasingSpeed = 50; 
const delayBetweenMessages = 1000; 

const typewriterElement = document.getElementById("typewriter");
function typeMessage() {
    if (charIndex < messages[messageIndex].length) {
        typewriterElement.textContent += messages[messageIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeMessage, typingSpeed);
    } else {
        setTimeout(eraseMessage, delayBetweenMessages);
    }
}

function eraseMessage() {
    if (charIndex > 0) {
        typewriterElement.textContent = messages[messageIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseMessage, erasingSpeed);
    } else {
        messageIndex = (messageIndex + 1) % messages.length;
        setTimeout(typeMessage, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", typeMessage);


