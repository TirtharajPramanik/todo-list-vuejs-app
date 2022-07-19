# Todo List - Vuejs Offline PWA

## Demo Pictures

<img alt="mobile create dark" src="demo/mobile_create_dark.png" width="250px"/>

## Table of Content

- [Todo List - Vuejs Offline PWA](#todo-list---vuejs-offline-pwa)
  - [Demo Pictures](#demo-pictures)
  - [Table of Content](#table-of-content)
  - [Project Structure](#project-structure)
  - [Libraries and Frameworks](#libraries-and-frameworks)
  - [Project setup](#project-setup)
        - [Start development server](#start-development-server)
        - [Start production server](#start-production-server)

## Project Structure

```sh
./
├── README.md
├── package.json
├── postcss.config.js
├── src/
│   ├── App.vue
│   ├── assets/
│   ├── components/
│   ├── main.ts
│   ├── registerServiceWorker.ts
│   ├── router/
│   ├── shims-vue.d.ts
│   ├── types/
│   ├── utils/
│   └── views/
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock

7 directories, 10 files
```

## Libraries and Frameworks

| Title       | Description                                                                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vuejs       | An approachable, performant and versatile framework for building web user interfac                                                                                      |
| Tailwindcss | A utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup. |
| Flowbite    | Flowbite is an ecosystem built on top of Tailwind CSS including a component library, block sections, a Figma design system and other resources.                         |
| Dexie       | A Minimalistic Wrapper for IndexedDB                                                                                                                                    |

## Project setup

```bash
npm install
or
yarn install
```

##### Start development server

```bash
npm run serve
or
yarn serve
```

##### Start production server

```bash
npm run build && npm run serve
or
yarn build && yarn serve
```

<br/>

> ```sh
> Local server will start on `http://localhost:3000`
> ```

<!-- | Pinia       | Pinia is a store library for Vue, it allows you to share a state across components/pages.                                                                               | -->
