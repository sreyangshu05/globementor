// Enable custom cursor on desktop
function enableCustomCursor() {
  if (window.innerWidth > 700) {
    document.body.classList.add('custom-cursor-enabled');
    let cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);
    document.addEventListener('mousemove', function(e) {
      cursor.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`;
    });
    // Placeholder for cursor animation logic
  }
}

function renderAnimatedGlobe() {
  const globeDiv = document.getElementById('animated-globe');
  if (!globeDiv) return;
  // SVG globe with animated latitude/longitude lines
  globeDiv.innerHTML = `
    <svg id="globe-svg" width="320" height="320" viewBox="0 0 320 320">
      <defs>
        <radialGradient id="globeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#e3f0ff"/>
          <stop offset="100%" stop-color="#3ec6e0"/>
        </radialGradient>
      </defs>
      <circle cx="160" cy="160" r="120" fill="url(#globeGradient)" stroke="#1a4fa0" stroke-width="4"/>
      <g id="latitudes">
        <ellipse cx="160" cy="160" rx="110" ry="30" fill="none" stroke="#1a4fa0" stroke-width="1.5" opacity="0.5"/>
        <ellipse cx="160" cy="160" rx="110" ry="60" fill="none" stroke="#1a4fa0" stroke-width="1.2" opacity="0.3"/>
        <ellipse cx="160" cy="160" rx="110" ry="90" fill="none" stroke="#1a4fa0" stroke-width="1" opacity="0.2"/>
      </g>
      <g id="longitudes">
        <ellipse cx="160" cy="160" rx="30" ry="110" fill="none" stroke="#1a4fa0" stroke-width="1.5" opacity="0.5"/>
        <ellipse cx="160" cy="160" rx="60" ry="110" fill="none" stroke="#1a4fa0" stroke-width="1.2" opacity="0.3"/>
        <ellipse cx="160" cy="160" rx="90" ry="110" fill="none" stroke="#1a4fa0" stroke-width="1" opacity="0.2"/>
      </g>
      <g id="dots">
        <circle cx="160" cy="60" r="5" fill="#3ec6e0"/>
        <circle cx="260" cy="160" r="5" fill="#3ec6e0"/>
        <circle cx="160" cy="260" r="5" fill="#3ec6e0"/>
        <circle cx="60" cy="160" r="5" fill="#3ec6e0"/>
      </g>
    </svg>
  `;
  // Animate rotation
  let angle = 0;
  function animate() {
    angle += 0.5;
    const svg = document.getElementById('globe-svg');
    if (svg) {
      const lat = svg.getElementById('latitudes');
      const lon = svg.getElementById('longitudes');
      if (lat && lon) {
        lat.setAttribute('transform', `rotate(${angle} 160 160)`);
        lon.setAttribute('transform', `rotate(${-angle} 160 160)`);
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

document.addEventListener('DOMContentLoaded', function() {
  enableCustomCursor();

  // WhatsApp button hover animation (handled by CSS)

  // Hero animation: animated SVG globe
  renderAnimatedGlobe();

  // Initialize AOS for scroll animations
  if (window.AOS) {
    AOS.init({
      once: true, // Only animate once
      duration: 800, // Animation duration in ms
    });
  }
}); 