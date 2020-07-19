# ESLint

## 1. 安装
- yarn add -D eslint

## 2. 使用
1. npx eslint --init 配置eslint配置项
2. package.json文件中 配置脚本
```js
// 检测src一级目录下的所有js文件
{
  "scripts": {
    "eslint":"eslint ./src/*js"
  },
}
// 检测src文件夹下的所有文件
{
  "scripts": {
    "eslint":"eslint ./src"
  },
}

```
3. 执行 yarn eslint 进行检测

## 3. 规则(rules)
- .eslintrc.js 文件,具体参考官方文档
```js
rules: {
    quotes: 'off',
    'no-unused-vars': 'off'
}
```  

## 4. 不同目录配置不同规则
1. 可以通过在不同的文件夹创建不同的.eslintrc.json文件
2. eslint在进行代码检测时会优先选择离自己最近的eslint规则

## 5. 五种在文件中配置ESLint的方式
- npx eslint -init 中的三种
1. js
2. yml
3. json
4. 直接写入package.json文件中
5. 在具体文件中使用 注释命令 `/* eslint  no-unused-vars:off */`

## 6. ESLint Env配置项
1. 一个环境定义了一组预定义的全局变量。
2. 自定义添加,加上就会对添加的环境做检查.

## 7. Specifying Globals 指定全局变量

1. `/* global NewArray */`
2. .eslintrc中配置
```js
"globals":{
    // 变量名    可写的 
    "NewArray": "writable"
    "NewObject": "readonly"
}
```