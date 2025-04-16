// Scroll Reveal Animation
const sections = document.querySelectorAll('.section');
const revealOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const revealOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
};

const observer = new IntersectionObserver(revealOnScroll, revealOptions);
sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
}
