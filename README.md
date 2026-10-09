# Factorio Wiki (Vue)

Фанатская вики по Factorio на Vue 3: логистика, производство, военная промышленность.
Страницы предметов генерируются из `src/data.json`.

## Стек

Vue 3 · Vue Router · Vite

## Запуск

```sh
npm install
npm run dev      # dev-сервер
npm run build    # сборка в dist/
```

## Данные

`extract_data.cjs` разбирает старые `.vue`-страницы через jsdom и собирает из них `src/data.json`:

```sh
node extract_data.cjs
```

---

Factorio и игровые ассеты принадлежат [Wube Software](https://factorio.com). Это фанатский проект.
