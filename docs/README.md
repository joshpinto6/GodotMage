## 📘 GodotMage Documentation Website 
GodotMage Tutorial website. All tutorials are hosted here!

This website is built using [🐱‍🐉 Docusaurus 2](https://docusaurus.io/), a modern static website generator. 

Docusaurus 2 requires Node.js 16+ (You can use nvm to manage node versions) I would recommend installing npm as a package manager (rather than yarn)

All blog posts are located in the `docs/blog` directory.

### Installation

with yarn:
```
$ yarn
```

with npm:
```
$ npm ci
```
### Local Development

with yarn:
```
$ yarn start
```

with npm:
```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

**with yarn:**
```
$ yarn build
```

**with npm:**
```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Manual Deployment
> This section is likely to be outdated or incompatible. If you need to use it, make sure to read the [Docusaurus Deployment Docs](https://docusaurus.io/docs/deployment) Instead, we recommend using the "Deploy to Pages" action.

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
