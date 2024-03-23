const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.textShadow = '0 0 5px #007bff'; 
    });

    link.addEventListener('mouseout', () => {
        link.style.textShadow = ''; 
    });
});