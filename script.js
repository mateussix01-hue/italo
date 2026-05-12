const items = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
items.forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 55, 380)}ms`;
  io.observe(el);
});
