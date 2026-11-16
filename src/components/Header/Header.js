import './Header.css';

export class Header {
  render() {
    const header = document.createElement('header');
    header.classList.add('header');

    header.innerHTML = `
        <div class="header-brand">
          <a class="header-switch" href="#/catalog">
            <img src="/logo.png" alt="ModLock" class="header-logo">
            <h1>Modlock</h1>
          </a>
        </div>
        <nav class="header-pages">
          <a class="header-switch" href="#/catalog">Моды</a>
          <a class="header-switch" href="#/heroes">Герои</a>
          <a class="header-switch" href="#/builds">Билды</a>
        </nav>

        <div class="header-actions">
          <a class="header-favorites" href="#/favorites">
            <span aria-hidden="true">♡</span>
              Избранное
          </a>
        </div>
      `;

    return header;
  }
}
