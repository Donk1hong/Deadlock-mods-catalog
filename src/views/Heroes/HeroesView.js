import { AbstractView } from '../AbstractView.js';
import './Heroes.css';

export class HeroesView extends AbstractView {
  render() {
    return `<section class="heroes-page" aria-labelledby="heroes-title">
      <header class="heroes-intro">
        <span class="heroes-eyebrow">MODLOCK / ГЕРОИ</span>
        <h1 id="heroes-title">Герои Deadlock</h1>
        <p>Знакомься с героями и находи модификации, созданные для любимых персонажей.</p>
      </header>

      <section class="heroes-content" aria-label="Каталог героев"></section>
    </section>`;
  }
}
