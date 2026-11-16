import { CatalogView } from './views/Catalog/CatalogView.js';
import { BuildsView } from './views/Builds/BuildsView.js';
import { HeroesView } from './views/Heroes/HeroesView.js';
import { Header } from './components/Header/Header.js';

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

    if (this.getRoute() === '#/heroes') {
      this.currentView = new HeroesView();
    } else if (this.getRoute() === '#/builds') {
      this.currentView = new BuildsView();
    } else {
      this.currentView = new CatalogView();
    }

    this.render();
  }
}
