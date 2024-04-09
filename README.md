# React + TypeScript + Vite
# Comandos para inicializar el proyecto

- Comando para instalar dependencias : npm install
- Comando para levantar el proyecto : npm run dev
- 
# URL DE LA APLICACION DESPLEGADA EN VERCEL
- https://planify-test.vercel.app/


# TECNOLOGIAS USADAS PARA EL DESARROLLO
- React Js
- TailwindCSS
- TypeScript
- Vite

 # LIBRERIAS USADAS PARA EL DESARROLLO DE LA PRUEBA
- Keep React - https://react.keepdesign.io/
- 

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
