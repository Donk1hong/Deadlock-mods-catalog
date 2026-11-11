# Deadlock Mods Catalog

**Русский** · [English](README.md)

Каталог модов для **Deadlock**, игры от **Valve**. Цель проекта — собрать модификации в одном месте и сделать их поиск удобнее.

Проект создаётся для практики JavaScript и находится на ранней стадии разработки: подготовлена основа приложения на Vite, функциональность каталога ещё предстоит реализовать.

### Технологии

- JavaScript (ES Modules)
- HTML и CSS
- Vite — сервер разработки и сборка
- ESLint — проверка кода

### Запуск локально

Понадобятся Node.js **20.19+ в ветке 20.x** или **22.12+** и npm.

```bash
git clone https://github.com/Donk1hong/Deadlock-mods-catalog.git
cd Deadlock-mods-catalog
npm ci
npm run dev
```

Откройте адрес, который Vite выведет в терминале.

### Команды

| Команда | Назначение |
| --- | --- |
| `npm run dev` | Запустить сервер разработки |
| `npm run build` | Собрать приложение в папку `dist/` |
| `npm run preview` | Посмотреть собранное приложение локально |
| `npm run lint` | Проверить код с помощью ESLint |
| `npm run lint:fix` | Исправить автоматически устранимые замечания ESLint |

Перед `npm run preview` выполните `npm run build`.

### Структура проекта

```text
├── public/           # Статические файлы
├── src/
│   ├── main.js       # Точка входа JavaScript
│   └── style.css     # Стили приложения
├── index.html        # HTML-страница
├── eslint.config.js  # Настройки ESLint
└── package.json      # Зависимости и команды
```

### Участие в разработке

Идеи и сообщения об ошибках можно оставлять в [Issues](https://github.com/Donk1hong/Deadlock-mods-catalog/issues). Изменения можно предлагать через pull request.

### Лицензия и авторство

В `package.json` указана лицензия MIT. Отдельный файл `LICENSE` пока не добавлен.

Независимый проект сообщества, не связанный с Valve. Deadlock и связанные с игрой материалы принадлежат их правообладателям.
