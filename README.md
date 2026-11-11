# Deadlock Mods Catalog

[Русский](README.ru.md) · **English**

A mod catalog for **Deadlock**, a game by **Valve**. The project aims to bring modifications together in one place and make them easier to discover.

Built as a JavaScript learning project, it is currently in early development: the Vite application foundation is in place, while the catalog functionality has yet to be implemented.

### Tech stack

- JavaScript (ES Modules)
- HTML and CSS
- Vite — development server and builds
- ESLint — code linting

### Run locally

You need Node.js **20.19+ on the 20.x release line** or **22.12+**, along with npm.

```bash
git clone https://github.com/Donk1hong/Deadlock-mods-catalog.git
cd Deadlock-mods-catalog
npm ci
npm run dev
```

Open the address printed by Vite in your terminal.

### Commands

| Command            | Purpose                                   |
| ------------------ | ----------------------------------------- |
| `npm run dev`      | Start the development server              |
| `npm run build`    | Build the application into `dist/`        |
| `npm run preview`  | Preview the built application locally     |
| `npm run lint`     | Check the code with ESLint                |
| `npm run lint:fix` | Automatically fix supported ESLint issues |

Run `npm run build` before `npm run preview`.

### Project structure

```text
├── public/           # Static assets
├── src/
│   ├── main.js       # JavaScript entry point
│   └── style.css     # Application styles
├── index.html        # HTML page
├── eslint.config.js  # ESLint configuration
└── package.json      # Dependencies and scripts
```

### Contributing

Share ideas and report bugs in [Issues](https://github.com/Donk1hong/Deadlock-mods-catalog/issues). Contributions through pull requests are welcome.

### License and credits

The license declared in `package.json` is MIT. A separate `LICENSE` file has not been added yet.

An independent community project with no affiliation with Valve. Deadlock and related game assets belong to their respective owners.
