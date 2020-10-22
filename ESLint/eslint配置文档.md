1. npm 安装eslint
```js
npm install -D eslint prettier 
// 防止eslint和prettier冲突
npm install eslint-plugin-prettier eslint-config-prettier
```
2. package.json中配置检测命令
```js
"scripts": {
    "lint":"eslint src"
},
```
3. 初始化eslint 
    - npx eslint --init
4. VSCode 安装eslint插件
    - 写代码的时候会自动提示报错.
5. VSCode 安装prettier插件
    - 在prettier 中配置eslint 规则
    - 在格式化代码的时候会自动按照.prettierrc中的配置进行代码格式化
6. npm install pre-commit 
    - 提交git时自动检测 eslint 禁止不合格代码提交
    - 配置 在package.json中配置 pre-commit 
``` js
{
  "scripts": {
    "lint": "eslint src",
    // "format":"prettier-eslint --write \"src/**/*.js\" \"src/**/*.vue\""
    "format": "eslint --fix --ext .js,.vue src"

  },
  "scripts": {
    // 检测src 文件夹下的代码
    "test": "eslint src",
    // 自动修复与eslint中不一致的代码
    "lint": "eslint --fix --ext .js --ext .jsx --ext .vue src/ test/unit", 
  },
  "pre-commit": [
    "test"
  ],
  "devDependencies": {
    "pre-commit": "^1.2.2",
  }
}

```

## 常见问题

### 报错解决
1. prettier和eslint格式化代码时提示Delete `␍`eslint(prettier/prettier)
- 在项目根目录下的.prettierrc文件中写入即可 `"endOfLine": "auto"`
