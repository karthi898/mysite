// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Bubble Effect
const homeSection = document.getElementById('home');
homeSection.addEventListener('mousemove', (e) => {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    homeSection.appendChild(bubble);

    const size = Math.random() * 60 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${e.pageX - size/2}px`;
    bubble.style.top = `${e.pageY - size/2}px`;

    setTimeout(() => {
        bubble.remove();
    }, 1000);
});
