# node-web-server

# 準備

1. library のインストール

- > npm run setup

---

# 作成時 Version

---

- > node --version
  - > v16.17.0
- > npm --version
  - > 8.18.0

---

# 実装時メモ

---

## 使用ライブラリ

- Express.js
- ejs (Embedded JavaScript templates)
  - テンプレートエンジン
  - https://ejs.co/
  - https://www.npmjs.com/package/ejs
- CSV parser for Node.js and the web
  - CSV ファイルを読み込んでパースする
- xlsx (SheetJs)
  - xlss ファイルを読み込む
- sqlight3
  - db

## 手順

1. > npm init
1. > npm install express
1. > npm install ejs
1. > npm install csv-parse
1. > npm install sqlite3

# メモ

## CommonJS / ES module

- _.cjs , _.mjs
- package.json : { "type": "commonjs" }, { "type": "module" }

### ここでは

- ES module を使用

# TODO

## 調べる

- ejs-cli
- gulp
- webpack
- parcel
