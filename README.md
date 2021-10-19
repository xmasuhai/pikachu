# 使用说明

## 开发

```bash
yarn global add parcel-bundler
parcel src/index.html
```

## build 命令

```bash
yarn build
```

## 部署方式

- 每次改完代码，必须运行这一行，才能正确的请求 JS 和 CSS：

```bash
parcel build src/index.html --public-url .
```

## yarn build 一键发布

> 再次build的时，只需用`yarn init -y` 创建`package.json`

- 在`package.json`中加一段脚本

```JavaScript
"scripts": {
"build":"rm -rf dist && parcel build src/index.html src/index.html --no-minify --public-url ./"
},
```

再次 `yarn build`

---

## 画一只皮卡丘

- 预览链接：[http://xmasuhai.xyz/pikachu/dist/index.html](http://xmasuhai.xyz/pikachu/dist/index.html)

## 会动的代码

- 预览链接：[http://xmasuhai.xyz/pikachu/dist/test.html](http://xmasuhai.xyz/pikachu/dist/test.html)
