const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#main-navigation');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});

navigation?.addEventListener('click', event => {
  if (!event.target.closest('a')) return;
  menuButton?.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
});

document.querySelector('[data-copy-checksum]')?.addEventListener('click', async event => {
  const button = event.currentTarget;
  const checksum = document.querySelector('#checksum')?.textContent.trim();
  if (!checksum) return;
  try {
    await navigator.clipboard.writeText(checksum);
    button.textContent = 'Copied';
    setTimeout(() => { button.textContent = 'Copy SHA-256'; }, 1800);
  } catch {
    button.textContent = 'Select and copy the code';
  }
});

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const targets = document.querySelectorAll('.flow-card, .step, .feature, .faq-list details');
  targets.forEach(target => target.classList.add('reveal'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .08 });
  targets.forEach(target => observer.observe(target));
}
