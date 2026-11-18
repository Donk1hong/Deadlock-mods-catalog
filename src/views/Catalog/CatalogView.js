import './Catalog.css';
import { AbstractView } from '../AbstractView.js';
import { ModCart } from '../../components/ModCart/ModCart.js';
import { ModsApi } from '../../api/ModsApi.js';

export class CatalogView extends AbstractView {
  constructor() {
    super();
    this.mods = new ModsApi();
    this.allMods = [];
    this.currentPage = 1;
    this.pageSize = 12;
  }

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

       <section class="catalog-results" aria-label="Подборка модов">
          <div class="catalog-grid"></div>
       </section>

       <nav class="catalog-pagination" aria-label="Страницы каталога">
         <button class="pagination-prev" type="button">
           ← Назад
         </button>

         <div class="pagination-info">
           <span class="pagination-current"></span>
           <span class="pagination-divider">из</span>
           <span class="pagination-total"></span>
         </div>

         <button class="pagination-next" type="button">
           Вперёд →
         </button>
       </nav>
    </section>`;
  }

  async loadMods() {
    this.allMods = await this.mods.getMods();
  }

  renderPage() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    const html = this.allMods
      .slice(start, end)
      .map((mod) => new ModCart(mod).render())
      .join('');

    document.querySelector('.catalog-grid').innerHTML = html;
    document.querySelector('.pagination-current').textContent =
      this.currentPage;
  }

  renderPagination() {
    const paginate = document.querySelector('.catalog-pagination');
    const totalPages = Math.ceil(this.allMods.length / this.pageSize);
    document.querySelector('.pagination-total').textContent = totalPages;
    paginate.addEventListener('click', (event) => {
      if (event.target.closest('.pagination-prev')) {
        if (this.currentPage <= 1) {
          this.currentPage = 1;
        } else {
          this.currentPage--;
        }
      } else if (event.target.closest('.pagination-next')) {
        if (this.currentPage >= totalPages) {
          this.currentPage = totalPages;
        } else {
          this.currentPage++;
        }
      }
      this.renderPage();
    });
  }

  async afterRender() {
    await this.loadMods();
    this.renderPage();
    this.renderPagination();
  }
}
