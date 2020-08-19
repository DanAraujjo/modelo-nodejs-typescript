# Setup NodeJS com Typescript

### Criando o projeto

```bash
yarn init -y
git init
```

### Express

```bash
yarn add express
yarn add @types/express -D
```

### TypeScript

```bash
yarn add typescript -D
yarn tsc --init
yarn add ts-node-dev tsconfig-paths -D
```

Incluir no **package.json**

```json
  "scripts": {
    "dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpileOnly --ignore-watch node_modules --no-notify src/server.ts"
  },
```

Alterar o **tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "module": "CommonJS",
    "lib": ["ES6"],
    "allowJs": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "removeComments": true,
    "typeRoots": ["./node_modules/@types", "./src/@types"],
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "baseUrl": ".",
    "paths": {
      "@controllers/*": ["./src/app/controllers/*"],
      "@models/*": ["./src/app/models/*"],
      "@validators/*": ["./src/app/validators/*"],
      "@views/*": ["./src/app/views/*"],
      "@config/*": ["./src/config/*"]
    }
  },
  "include": ["src/**/*"]
}
```

### Eslint

```bash
yarn add eslint -D
yarn eslint --init
```

Selecione

- To check syntax, find problems, and enforce code style
- JavaScript modules (import/export)
- None of these
- Marque somente Node
- Use a popular style guide
- Airbnb (https://github.com/airbnb/javascript)
- Json
- Y

Ao terminar, exclua o arquivo package-lock.json e execute o comando `yarn`.

```bash
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
yarn add -D eslint-plugin-node eslint-plugin-promise
```

Altere o arquivo **.eslintrc.json**
Crie o arquivo **.eslintignore**

### Jest

```bash
yarn add jest ts-jest @types/jest -D

yarn jest --init
```

Seleione

- Y
- node
- n
- babel
- Y

Incluir no arquivo **jest.config.js**

```nodejs
const { compilerOptions } = require("./tsconfig.json");
const { pathsToModuleNameMapper } = require("ts-jest/utils");
```

Alterar

- `// preset:undefined,` para `preset: "ts-jest",`
- `// moduleNameMapper: {},` para `moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix : "<rootDir>",}),`

### Babel

```bash
yarn add -D @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver
```

Crie o arquivo **babel.config.js**

Acrescente na tag **scripts** do arquivo **package.json**

```json
 "build": "babel src --extensions \".js,.ts\" --out-dir dist --copy-files --no-copy-ignored",
```
