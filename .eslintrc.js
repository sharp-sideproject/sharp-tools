module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  "parserOptions": {
    "sourceType": "module",
  },
  extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],//定义文件继承的子规范
  plugins: ['@typescript-eslint'],//定义了该eslint文件所依赖的插件
}
