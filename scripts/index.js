window.addEventListener('load', () => {
  setTimeout(() => {
    const typewriter = new Typewriter('#typewriter', {
      loop: true,
      delay: 75,
    });

    typewriter
      .typeString('I build fullstack WebApps.')
      .pauseFor(1500)
      .deleteAll()
      .typeString('I develop game engines.')
      .pauseFor(1500)
      .deleteAll()
      .typeString('I create open-source projects.')
      .pauseFor(1500)
      .deleteAll()
      .typeString('I build backend servers.')
      .pauseFor(1500)
      .deleteAll()
      .typeString('I design beautiful UIs.')
      .pauseFor(1500)
      .deleteAll()
      .typeString('I contribute to open-source.')
      .pauseFor(1500)
      .deleteAll()
      .typeString('I learn new languages.')
      .pauseFor(1500)
      .deleteAll()
      .typeString('I turn ideas into reality.')
      .pauseFor(1500)
      .start();
  }, 750); // 750 ms delay after page load
});

const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor-two');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let cursor2X = 0;
let cursor2Y = 0;
const speed = 0.05;  // Speed for delayed cursor

document.addEventListener('DOMContentLoaded', () => {
  const gradient = document.querySelector('.gradient');
  const circles = document.querySelectorAll('.circle');
  let posX = 0;
  let posY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  function animate() {
    // Smooth movement for background circles
    posX += (mouseX - posX) * 0.05;
    posY += (mouseY - posY) * 0.05;

    gradient.style.transform = `translate(
      ${posX * 0.2}px, 
      ${posY * 0.2}px
    )`;

    circles.forEach((circle, index) => {
      const multiplier = 0.1 + (index * 0.05);
      circle.style.transform = `translate(
        ${posX * multiplier}px, 
        ${posY * multiplier}px
      )`;
    });

    requestAnimationFrame(animate);
  }

  animate();

  // Handle window resize
  window.addEventListener('resize', () => {
    posX = window.innerWidth / 2;
    posY = window.innerHeight / 2;
  });
});

// Smooth cursor update
function updateCursor() {
  cursorX += (mouseX - cursorX) * speed;
  cursorY += (mouseY - cursorY) * speed;

  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;

  requestAnimationFrame(updateCursor);
}

// Instant cursor update
function updateCursor2() {
  cursor2X = mouseX;
  cursor2Y = mouseY;

  cursor2.style.left = `${cursor2X}px`;
  cursor2.style.top = `${cursor2Y}px`;

  requestAnimationFrame(updateCursor2);
}

// Start both cursor animation loops
updateCursor();
updateCursor2();
