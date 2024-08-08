## `CR` Problem and Eslint bug

```
npm  run  lint --fix

//vue.config.js
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
});
```
