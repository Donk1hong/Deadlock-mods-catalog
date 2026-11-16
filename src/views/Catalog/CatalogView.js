import { AbstractView } from '../AbstractView.js';
import './Catalog.css';

export class CatalogView extends AbstractView {
  render() {
    return `<section class="catalog-page">
      <div class="catalog-intro">
        <span class="catalog-eyebrow">MODLOCK / КАТАЛОГ</span>
        <h1>Моды для Deadlock</h1>
        <p>Открой новые скины и модификации сообщества.</p>
      </div>

      <div class="catalog-filters">
        <input
          class="catalog-search"
          type="search"
          placeholder="Поиск модов..."
          aria-label="Поиск модов"
        />

        <select class="catalog-hero-filter" aria-label="Фильтр по героям">
          <option value="">Все герои</option>
        </select>

        <select class="catalog-sort" aria-label="Сортировка модов">
          <option value="popular">Популярные</option>
          <option value="downloads">Больше всего скачиваний</option>
          <option value="newest">Сначала новые</option>
          <option value="oldest">Сначала старые</option>
          <option value="name">По названию</option>
        </select>

      </div>

       <section class="catalog-results" aria-label="Подборка модов"></section>
    </section>
`;
  }
}
