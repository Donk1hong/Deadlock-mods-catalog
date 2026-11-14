import { CatalogView } from './views/CatalogView.js';
import { FavoritesView } from './views/FavoritesView.js';

export class App {
  constructor(app) {
    this.app = app;
    this.currentView;

    window.addEventListener('hashchange', () => {
      this.navigate();
    });
  }

  render() {
    this.app.innerHTML = this.currentView.render();
  }

  getRoute() {
    return window.location.hash;
  }

  navigate() {
    if (this.currentView === null) {
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
