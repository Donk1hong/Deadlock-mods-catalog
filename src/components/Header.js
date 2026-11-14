import './Header.css';

export class Header {
  render() {
    const header = document.createElement('header');
    header.classList.add('header');

    header.innerHTML = `
        <div class="header-brand">
          <img src="/logo.png" alt="ModLock" class="header-logo">
          <h1>Modlock</h1>
        </div>
        <nav class="header-pages">
          <a class="header-switch" href="#/catalog">Каталог</a>
          <a class="header-switch" href="#/favorites">Избранное</a>
        </nav>
      `;

    return header;
  }
}
