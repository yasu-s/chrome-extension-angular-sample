# chrome-extension-angular-sample

## 概要

* Chrome拡張機能を Angular で作成したサンプルです。
* ContentScriptについてはWebpackでビルドします。

## 実行環境

* Node.js - 10.x
* Yarn - 1.17.x

## 使用ライブラリ

* Angular - 8.2.x
* Angular Material - 8.2.x
* TypeScript - 3.5.x
* Webpack - 4.41.x
* Webpack-cli - 3.3.x
* ts-loader - 6.2.x

## 動作確認

### 1. サンプルのダウンロード

```bash
git clone git@github.com:yasu-s/chrome-extension-angular-sample.git
```

### 2. パッケージインストール

```bash
cd chrome-extension-angular-sample
yarn
```

### 3. サンプルのビルド

```bash
yarn build:prod
```

### 4. サンプルのインストール

* dist/ng-sample フォルダをChrome拡張機能から読み込んでください。
