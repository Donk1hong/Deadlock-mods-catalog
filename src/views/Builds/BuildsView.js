import { AbstractView } from '../AbstractView.js';
import './Builds.css';

export class BuildsView extends AbstractView {
  render() {
    return `<section class="builds-page" aria-labelledby="builds-title">
      <header class="builds-intro">
        <span class="builds-eyebrow">MODLOCK / БИЛДЫ</span>
        <h1 id="builds-title">Билды сообщества</h1>
        <p>Подборки предметов и стратегий, которыми игроки делятся друг с другом.</p>
      </header>

      <div class="builds-filters" role="search" aria-label="Поиск и фильтры билдов">
        <input
          class="builds-search"
          type="search"
          placeholder="Поиск по названию билда..."
          aria-label="Поиск по названию билда"
        />

        <select class="builds-hero-filter" aria-label="Фильтр по герою">
          <option value="">Все герои</option>
        </select>

        <select class="builds-sort" aria-label="Сортировка билдов">
          <option value="popular">По популярности</option>
          <option value="newest">Сначала новые</option>
          <option value="oldest">Сначала старые</option>
          <option value="name">По названию</option>
          <option value="hero">По герою</option>
        </select>
      </div>

      <section class="builds-content" aria-label="Подборки билдов"></section>
    </section>`;
  }
}
