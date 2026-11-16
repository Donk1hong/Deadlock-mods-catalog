import { AbstractView } from '../AbstractView.js';
import './Favorites.css';

export class FavoritesView extends AbstractView {
  render() {
    return `<section class="favorites-page" aria-labelledby="favorites-title">
      <header class="favorites-intro">
        <span class="favorites-eyebrow">MODLOCK / ТВОЯ КОЛЛЕКЦИЯ</span>
        <h1 id="favorites-title">Избранное</h1>
        <p>Сохраняй интересные модификации, чтобы быстро находить их снова.</p>
      </header>

      <section class="favorites-content" aria-label="Сохранённые модификации"></section>
    </section>`;
  }
}
