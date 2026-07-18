// ─── Iluminated letters ────────────────────────────────────────────
document.querySelectorAll('.letter p').forEach(p => {
    const text = p.textContent;
    p.innerHTML = [...text].map(char =>
        char === ' ' ? ' ' : `<span class="char">${char}</span>`
    ).join('');

    p.addEventListener('mouseenter', function () {
        const chars = this.querySelectorAll('.char');
        chars.forEach((char, i) => {
            setTimeout(() => {
                char.classList.add('glow');
                setTimeout(() => {
                    char.classList.remove('glow');
                }, 300);
            }, i * 50);
        });
    });
});

// ─── Petal hearts (floating hearts) ──────────────────────────
function heart() {
    const heartEl = document.createElement('div');

    const isSpecial = Math.random() < 0.1;

    heartEl.setAttribute('class', isSpecial ? 'heart heart-special' : 'heart');
    document.body.appendChild(heartEl);
    heartEl.style.left = Math.random() * innerWidth + 'px';

    const size = Math.random() * 12;
    const duration = Math.random() * 3;

    heartEl.style.fontSize = 15 + size + 'px';

    if (isSpecial) {
        heartEl.style.animationDuration = (6 + duration) + 's';
        heartEl.addEventListener('click', function (e) {
            const computedStyle = window.getComputedStyle(this);
            const transform = computedStyle.transform;

            const matrix = new DOMMatrix(transform);
            const currentY = matrix.m42;
            const currentRotation = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);

            this.style.setProperty('--current-y', `${currentY}px`);
            this.style.setProperty('--current-rotation', `${currentRotation}deg`);

            this.classList.add('explode');
            setTimeout(() => {
                if (document.body.contains(this)) {
                    document.body.removeChild(this);
                }
            }, 500);
        });
    } else {
        heartEl.style.animationDuration = (2 + duration) + 's';
    }

    setTimeout(function () {
        if (document.body.contains(heartEl)) {
            document.body.removeChild(heartEl);
        }
    }, 5000);
}
setInterval(heart, 290);

// ─── Shake the envelope for inactivity ──────────────────────────────
let lastInteraction = Date.now();

document.addEventListener('mousemove', () => lastInteraction = Date.now());
document.addEventListener('click', () => lastInteraction = Date.now());

setInterval(() => {
    if (Date.now() - lastInteraction > 10000) {
        document.querySelector('.envelope').classList.add('shake');
        setTimeout(() => {
            document.querySelector('.envelope').classList.remove('shake');
        }, 500);
    }
}, 5000);

// ─── Opening the envelope on page load ───────────────────────
// The 'opened' class (defined in envelope.css) is added instead of
// touching the inline transform, so that .envelope:hover can continue
// working after the entrance animation.
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.envelope').classList.add('opened');
    }, 500);
});
