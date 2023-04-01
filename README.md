## Carlos Alva prueba tecnica

**step 1** - setup `core`
```
install pnpm and yalc as global dependency 
with npm 
npm install yalc -G

https://pnpm.io/installation

```

**step 2** - setup `core`

```
$ cd core
$ pnpm install
$ pnpm build
$ npx yalc publish
```

**note:** install [pnpm](https://pnpm.io/) and [yalc](https://www.npmjs.com/package/yalc)

**step 3** - setup `vue app`

```
$ cd vue3-app
$ pnpm install
$ yalc add pkg-users-core
$ pnpm install
```


**step 4** - running the app

```
$ pnpm dev
```

### If you want to make some changes to the `core` folder, then you have to do the following on every change.

```
$ cd core
$ pnpm build
$ yalc push
```

and in the vue app, restart the server. If that doesn't work, then run this command as well.

```
$ cd vue3-app
$ yalc update
```

Happy Coding :)
