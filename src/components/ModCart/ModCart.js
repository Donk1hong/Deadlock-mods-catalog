import './ModCart.css';

export class ModCart {
  constructor(mod) {
    this.mod = mod;
  }

  render() {
    const images = this.mod.thumbnailUrl || this.mod.images?.[0];
    return `
    <article class="mod-card">
      <a class="mod-card__link" href="${this.mod.remoteId}">
        <div class="mod-card__image">
          <img
            src="${images ? images : ''}"
            alt="Предпросмотр модификации"
            loading="lazy"
            decoding="async"
            width="640"
            height="400"
          />

          <span class="mod-card__category">${this.mod.category}</span>
        </div>

        <div class="mod-card__body">
          <div class="mod-card__meta">
            ${
              this.mod.hero
                ? `
            <span class="mod-card__hero">${this.mod.hero}</span>
            <span class="mod-card__separator"></span>
            `
                : ''
            }
            <span class="mod-card__type">${this.mod.category}</span>
          </div>

          <h3 class="mod-card__title">${this.mod.name}</h3>

          <p class="mod-card__author">
            Автор: <span>${this.mod.author}</span>
          </p>

          <div class="mod-card__footer">
            <div class="mod-card__stat" title="Количество скачиваний">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12"></path>
                <path d="m7 10 5 5 5-5"></path>
                <path d="M5 17v3h14v-3"></path>
              </svg>
              <span>${this.mod.downloadCount}</span>
            </div>

            <div class="mod-card__stat" title="Количество лайков">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-8.3 1.1-1.1a5.5 5.5 0 0 0-.1-7Z"></path>
              </svg>
              <span>${this.mod.likes}</span>
            </div>
          </div>
        </div>
      </a>
    </article>
    `;
  }
}
