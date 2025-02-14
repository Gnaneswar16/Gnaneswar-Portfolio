// script.js
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Typing Effect for Header
const headerText = "THUNGA GNANESWAR REDDY";
const headerSubtext = "Data Analyst | Machine Learning | Business Analytics";
let i = 0;
let j = 0;

function typeHeader() {
    if (i < headerText.length) {
        document.querySelector('header h1').textContent += headerText.charAt(i);
        i++;
        setTimeout(typeHeader, 100);
    } else if (j < headerSubtext.length) {
        document.querySelector('header p').textContent += headerSubtext.charAt(j);
        j++;
        setTimeout(typeHeader, 50);
    }
}

typeHeader();

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.background = '#333';
darkModeToggle.style.color = '#fff';
darkModeToggle.style.border = 'none';
darkModeToggle.style.padding = '10px';
darkModeToggle.style.borderRadius = '50%';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.zIndex = '1000';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️';
    } else {
        darkModeToggle.textContent = '🌙';
    }
});

// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
});
