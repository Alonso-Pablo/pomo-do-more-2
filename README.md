# pomo-do-more-2
This is a remake of pomo-do-more
Version 1: https://github.com/Alonso-Pablo/pomo-do-more

## Technologies:
```
TypeScript
React
Vite
Redux (toolkit)
PostCSS
Storybook
Git
Tailwind
Docker
Jest
```

## Start the project:
### With Docker (you must have docker installed: https://docs.docker.com/engine/install/)
`docker-compose build`
`docker-compose up`
Then go to `http://localhost:3000` or `http://192.168.1.39:3000/`

### Or just
`yarn install`
`yarn dev`

## Run tests:
`yarn test`

## Run Storybook:
`yarn storybook`

## Resume of folders and files
### src/
`assets/`: contains the main file for Tailwind (style).
`components/`: contains components made in React.
`pages/`: contains one view per page.
`public/`: resources that are public, such as favicon and fonts.
`redux/`: contains the logic for caching using Redux toolkit.
`ts/`: contains the types that are exported for use throughout the app (TypeScript).
`utils/`: contains functions that can be reused in different places.
`main.tsx`: You could say that it is the center of the application, where React starts its work. You can also find the routes of the application.