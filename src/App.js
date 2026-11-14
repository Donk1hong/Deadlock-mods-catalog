import { CatalogView } from './views/CatalogView.js';
import { FavoritesView } from './views/FavoritesView.js';
import { Header } from './components/Header.js';

export class App {
  constructor(app) {
    this.app = app;
    this.currentView = null;
    this.header = new Header();
    this.content = document.createElement('main');
    this.app.appendChild(this.header.render());
    this.app.appendChild(this.content);
    window.addEventListener('hashchange', () => {
      this.navigate();
    });
  }

  render() {
    this.content.innerHTML = this.currentView.render();
  }

  getRoute() {
    return window.location.hash;
  }

  navigate() {
    if (this.currentView !== null) {
      this.currentView.destroy();
    }

    if (this.getRoute() === '#/favorites') {
      this.currentView = new FavoritesView();
    } else {
      this.currentView = new CatalogView();
    }

    this.render();
  }
}
