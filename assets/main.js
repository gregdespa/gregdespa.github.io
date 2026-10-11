// Révélation douce des blocs au défilement
document.documentElement.classList.add('js');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Année courante dans le pied de page
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

// Mémorise la langue choisie via le sélecteur FR / EN
document.querySelectorAll('.lang a[hreflang]').forEach((a) => {
  a.addEventListener('click', () => { try { localStorage.setItem('lang', a.hreflang); } catch (e) {} });
});
