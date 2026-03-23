// Scroll-reveal: animate pillar sections into view as they enter the viewport
const pillars = document.querySelectorAll('.pillar');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // only animate once
      }
    });
  },
  { threshold: 0.12 }
);

pillars.forEach((el) => observer.observe(el));

// Active nav link highlight on scroll
const sections = document.querySelectorAll('.pillar[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? '#fff'
            : 'rgba(255,255,255,0.6)';
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((section) => navObserver.observe(section));
