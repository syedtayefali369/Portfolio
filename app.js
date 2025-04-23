// Initialize Spline 3D Scene
async function initSpline() {
    const canvas = document.getElementById('3d-container');
    const spline = new SplineRuntime.Spline({
        canvas,
        url: './assets/spline-scene.splinecode',
    });

    // Mouse Parallax
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        spline.setCameraPosition(x, y, 10);
    });

    // Scroll Interactions
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY / window.innerHeight;
        spline.setCameraRotation(0, 0, scrollY * 10);
    });
}

// Smooth Scroll
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.getElementById(item.dataset.section);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Project Card Hover Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.transform = `
            rotateY(${(x - rect.width/2) / 10}deg)
            rotateX(${(y - rect.height/2) / -10}deg)
            translateZ(20px)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0) rotateX(0) translateZ(0)';
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', initSpline);