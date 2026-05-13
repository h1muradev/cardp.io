import './bootstrap';

/**
 * Interações pequenas substituem useState do React:
 * - menu mobile da navegação pública e dashboard;
 * - alternância de senha visível/oculta;
 * - abas do cardápio público/preview;
 * - filtros visuais simples em listas estáticas.
 */
document.addEventListener('click', (event) => {
  const toggle = event.target.closest('[data-toggle]');
  if (!toggle) return;

  const target = document.querySelector(toggle.dataset.toggle);
  if (target) target.classList.toggle('hidden');
});

document.querySelectorAll('[data-password-toggle]').forEach((button) => {
  button.addEventListener('click', () => {
    const input = document.querySelector(button.dataset.passwordToggle);
    if (!input) return;
    input.type = input.type === 'password' ? 'text' : 'password';
    button.textContent = input.type === 'password' ? '👁️' : '🙈';
  });
});

document.querySelectorAll('[data-menu-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    const group = button.closest('[data-menu-tabs]');
    const category = button.dataset.menuTab;
    group.querySelectorAll('[data-menu-tab]').forEach((tab) => {
      tab.classList.toggle('bg-[#DC2626]', tab === button);
      tab.classList.toggle('text-white', tab === button);
      tab.classList.toggle('text-[#64748B]', tab !== button);
    });
    document.querySelectorAll('[data-menu-panel]').forEach((panel) => {
      panel.classList.toggle('hidden', panel.dataset.menuPanel !== category);
    });
  });
});

document.querySelectorAll('[data-filter-list]').forEach((form) => {
  const search = form.querySelector('[data-search]');
  const select = form.querySelector('[data-category-filter]');
  const cards = document.querySelectorAll(`[data-filter-card="${form.dataset.filterList}"]`);
  const apply = () => {
    const term = (search?.value || '').toLowerCase();
    const category = select?.value || 'all';
    cards.forEach((card) => {
      const matchesTerm = card.dataset.name.toLowerCase().includes(term);
      const matchesCategory = category === 'all' || card.dataset.category === category;
      card.classList.toggle('hidden', !(matchesTerm && matchesCategory));
    });
  };
  search?.addEventListener('input', apply);
  select?.addEventListener('change', apply);
});
