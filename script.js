function goBack() {
    window.location.href = "index.html";  // Replace with your home page URL
}

// Confetti function to make the page celebratory
function launchConfetti() {
    const duration = 3 * 1000; // Duration of the confetti in milliseconds
    const end = Date.now() + duration;

    // Verify confetti is defined to avoid errors
    if (typeof confetti === 'function') {
        const colors = ['#00D4FF', '#FFD700', '#FF7F50', '#22c55e', '#0075FF'];

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors,
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors,
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    } else {
        console.error("Confetti library did not load.");
    }
}

// Start the confetti when the page loads
window.onload = launchConfetti;
