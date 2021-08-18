# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## Types of changesAdded for new features.

- [Added] - 對於新功能
- [Changed] - 用於更改現有功能
- [Deprecated] - 對於即將被刪除的功能
- [Removed] - 現在已刪除功能
- [Fixed] - 對於任何錯誤修復
- [Security] - 以防萬一

## 開發計畫

- [-]匯出 pdf 檔
- [-]navbar[home,Intro,About,member]
- [-]Intro 說明頁面，介紹產品使用方式、功能
- [-]About 關於頁面，產品簡介、作者資訊、抖內連結、反饋管道、更版資訊
- [-]feedback,用 google 問卷製作反饋
- [-]PWA 設定再升級
- [-]RWD
- [-]雲端 excel
- [-]畫線功能,響應重點摘要 1.match() 2.div 模擬 textarea

- [-]剪裁符的範例
- [v]自動切割文件
- [v]GA,hot drop
- [v]排序功能

## 2021-08-08

### Added

- 稿子段落卡

  - 完成資料狀態設定
  - 完成新增、刪除功能
  - 完成 textarea 響應式高度
  - 完成重點欄位基本外觀、下拉選單
  - 完成基本功能
  - 完成 gh-pages 部署

## 2021-08-10

### Added & Changed & Removed & Fixed

- 修改預設語言 `<html lang="tw">`
- 修改垃圾桶樣式，做出 point,section 的區隔
- 移除 points 的例證
- 修復 section&point 的資料記憶問題
- 添加 Hotjar
- 添加 GA
  - 評估 ID:G-FMVPFES0GP
  - 串流 ID:2741133002
- 添加 react-router
- 添加 ScrollToTop 頁面切換時，要用捲軸讓頁面回到最上方
- 添加 Menubar
- 修復 初次載入時，無正確觸發 textarea 響應式高度的問題
- 添加 段落字數小計

## 2021-08-11

### Added & Changed & Removed & Fixed

- 添加功能：沒有可刪除的對象，就不顯示刪除鍵
- 添加功能：快速分段
- 修復功能：被自動切割出來的段落，刪一個就全被刪
- 修復 modal 的關閉按鈕樣式(裝到太新的版本，降回 react-bootstrap@^1.6.1)
- 修復 複製剪裁符功能 => navigator.clipboard 僅支持通過 HTTPS 提供的頁面，部署後應該就可以了
- 移除預設段落卡
- 修復 section 的 textarea 響應式失敗問題：每次刪除段落卡，實際上只有資料移動，段落卡內的輸入框，其行高並未隨資料變動而做響應式調整
- 修復 modal 內 textarea 一 focus 就自動放大畫面的問題

## 2021-08-12

### Removed & Added

- 移除 points 的成立
- 新增快速分段的範例說明

## 2021-08-12

### Fixed & Changed

- 修復段落資訊卡中，回車鍵被納入字數統計的 bug
- 修改功能按鈕(新增、刪除、分段)的點擊時顏色

  103.71 KB build/static/js/2.5477579b.chunk.js
  22.81 KB build/static/css/2.d933f860.chunk.css
  7.08 KB (+26 B) build/static/js/main.4b6a5dfd.chunk.js
  1.39 KB build/static/js/3.21cbaed4.chunk.js
  1.17 KB build/static/js/runtime-main.11e0f2e2.js
  278 B build/static/css/main.6dea0f05.chunk.css

## 2021-08-13

### Added & Fixed

- 添加 auto mark highlight 功能，自動識別「重點」文字內容使否存在於段落中，在段落中畫線強調
- 修復分析點的資料刪除後響應式高度問題

- npm run deploy
  103.71 KB build/static/js/2.5477579b.chunk.js
  22.81 KB build/static/css/2.d933f860.chunk.css
  7.32 KB build/static/js/main.f3f9608a.chunk.js
  1.39 KB build/static/js/3.21cbaed4.chunk.js
  1.17 KB build/static/js/runtime-main.11e0f2e2.js
  278 B build/static/css/main.6dea0f05.chunk.css

## 2021-08-16

### Fixed

- 修復 auto mark highlight 換行功能
- npm run deploy
  103.71 KB build/static/js/2.5477579b.chunk.js
  22.81 KB build/static/css/2.d933f860.chunk.css
  7.39 KB (+70 B) build/static/js/main.5eadb1f0.chunk.js
  1.39 KB build/static/js/3.21cbaed4.chunk.js
  1.17 KB build/static/js/runtime-main.11e0f2e2.js
  278 B build/static/css/main.6dea0f05.chunk.css
