# optimize-perf-infinite-scroll
## 目錄
1. [專案展示](#專案展示)
2. [專案摘要](#專案摘要)
3. [開發介紹](#開發介紹)
    - [技術架構及摘要](#技術架構及摘要)
        - 前端開發
        - 後端開發
        - 開發工具
    - [目錄架構](#目錄架構)
    - [開發流程](#開發流程)
    - [程式設計摘要](#程式設計摘要)
        1. [SPA Routing](#SPA-Routing)
        2. [會員系統建立、登入狀態管理](#會員系統建立登入狀態管理)
        3. [登入狀態驗證、redirect](#登入狀態驗證redirect)
        4. [composition 概念、reusable component](composition-概念reusable-component)
        5. [Imperative operation：useRef、ref 屬性](#imperative-operationuserefref-屬性)
4. [附錄](#附錄)
    - [技術介紹](#技術介紹)
    - [專案介紹](#專案介紹)
        - [購物清單頁](#購物清單頁)
        - [搜尋頁：輕鬆模式、普通模式](#搜尋頁輕鬆模式普通模式)
        - [購物車、付款頁、會員中心](#購物車付款頁會員中心)

## 專案展示
- 專案網址：https://optimize-perf-infinite-scroll.web.app/

## 專案摘要
「optimize-perf-infinite-scroll」為一頁式網站作品，作品專注於優化 Infinite scroll 之效能，使用 Lighthouse 檢測，最終提升效能 28%、SEO 82 分，優化途徑包含 Lazy loading、防止事件抖動、Virtualized list 等。此外，使用 webpack、Eslint/Prettier 等工具建構開發環境，並關注 Error handling、SEO 等議題。

![](https://github.com/haoyuliaocurb/optimize-perf-infinite-scroll/blob/main/images/homePage-lg.png)

## 開發介紹
### 技術架構及摘要
![](https://github.com/haoyuliaocurb/optimize-perf-infinite-scroll/blob/main/images/opis-construction-1.jpeg)

- 更多細節可見附錄 [技術介紹](#技術介紹)
- 前端開發：使用 [React 生態系]((#react))、[Sass/SCSS](#sassscss)、[Normalize.css]((#Normalizecss)) 等獨立開發，並實踐 RWD、AJAX等，沒有使用任何前端 UI 套件
- 前端優化：使用 Lighthouse 檢測，最終提升效能 28%、SEO 82 分，詳見 [前端優化實踐](#前端優化實踐)
- 後端開發：使用 [Firebase](#firebase-hosting) 服務開發 web server
- 開發工具：使用 [Git/GitHub](#gitgithub) 做版本控管，使用 [npm、webpack、webpack-dev-server、Babel](#npmwebpackwebpack-dev-serverbabel) 建置開發環境，使用 [ESLint、Prettier](#eslintprettier) 統一開發風格，更多細節可見 [開發流程](#開發流程)

### 目錄架構

![](https://github.com/haoyuliaocurb/optimize-perf-infinite-scroll/blob/main/images/opis-construction-2.jpeg)

專案目錄分立 src、public，其中 src 之中分立 app、components、pages、styles、utils 等子目錄
* app、components、pages：放置 React component 檔案；root component App.js 放置 app 目錄；HomePage 頁面 component 放置 pages 目錄，其餘者依照所屬 page 分類在 components 目錄
* styles：放置 Styled components 檔案，依照所屬 page 分類；general.scss 具有全域 styles，STYLES_CONSTANT.js 存放 styles 相關變數及跨頁面邏輯 
* utils：放置開發者自身 Library
- 透過 package.json、webpack.config.js、babel.config.json、.eslintrc.js、.prettierrc 設定檔，設定開發環境細節

### 開發流程
1. #### 以 [Git Flow](#gitgithub) 為基礎進行開發，並迭代進行 QA
* 初始化專案時，具有 main、develop branch
* 開發新頁面、新功能時，則新增 branch feature/featureName 進行開發
* 開發完成後以 develop merge  feature/featureName branch
* 階段性發行版本則以 release/versionName 紀錄，並增加 tag 標記 release 版本

2. #### 使用 [npm、webpack、webpack-dev-server、Babel](#npmwebpackwebpack-dev-serverbabel) 建置開發環境
- npm 設定檔 package.json
  - 透過 scripts 屬性設置 CLI shortcut 指令
  - 管理專案使用之 npm 套件
- webpack webpack.config.js
  - 設置 entry point 及 bundle.js 儲存路徑
  - 透過 rules 屬性設置相關 loaders 處理特定類型檔案
- 使用 webpack-dev-server 建置本機端 live server，於開發時檢視程式運行狀況
- Babel 設定檔 babel.config.json
  - 設置相關 presets 及 plugins 以讓 babel-loader 達到預定編譯效果

3. #### 使用 [ESLint、Prettier](#eslintprettier)
- 透過設定檔 .eslintrc.js、.prettierrc 設定相關規則以檢測程式碼，統一開發風格

### 前端優化實踐
1. #### 此次前端優化包含兩大限制
* 不改變串接之 API 資源，因此不使用，如圖片壓縮、調整至適當解析度等方法
* 不透過後端以優化前端效能，因此不使用，如實踐 HTTP Cache 等方法

2. #### 使用 Lighthouse 檢測：提升效能 28%、SEO 82 分
- 原使用 Lazy load 之 Performance 為 25 分，後使用 Virtualized list 方法減少非必要之 DOM 元素，加快瀏覽器渲染速度， Performance 提升自 32 分，提升 28%
- 如上所述，此次優化包含兩大限制：不改變串接之 API 資源、不透過後端以優化前端效能，因此優化效果亦有所限

3. #### 實踐 Loader、Lazy load、防止事件抖動、Virtualized list
- 將資料流、元件渲染分開處理：API 以 Lazy load 方法處理 (下滑至一定條件則 fetch 新資料)、元件渲染則使用 Virtualized list 方法處理
- Loader
  - 優化 Lighthouse FCP 指標，在圖片載入時給予回饋，優化使用者體驗
  - 使用 CSS Animation 搭配 box-shadow 實現 Loader 效果
- Lazy load
  - 下滑至 scrollHeight 70% 處，則向 API fetch 下一頁資料
  - fetch 資料之非同步操作進行時，使用 isScrollFinished flag 來防止事件抖動
  - 若 API fetch 的結果為空陣列 []，則 isAllPicsLoaded 為 true，不再執行 fetch 資料相關程式碼
- Virtualized list
  - 在滑動瀏覽網頁時，為避免 DOM 中存在龐大數量、隱匿於視窗外的 \<NormalCard />，而拖累瀏覽器渲染速度，因此使用 Virtualized list 方法
  - 以 ScrollTop、ClientHeight 等數值推算應出現之 \<NormalCard />，例如：index 為 6 至 14 者，使用 position: absolute 方法定位若干元素；此外者，由於將 unmount 不存在於 DOM 中
  - 實踐 Virtualized list 亦考慮視窗縮放時，clientWidth、clientHeight 變化所改變、顯示的  \<NormalCard />

4. #### 優化 React 程式碼
- 使用 React.memo (shouldComponentUpdate 封裝) 判斷 props 是否改變，避免非必要之 Reconciliation
- 使用 key 屬性避免非必要之 Real DOM 更新

5. #### 優化 SEO
- 優化 HTML 撰寫，使用 HTML 語意標籤、處理 <meta> 標籤等
- 優化 LCP、TTI、TBT 指標表現，使用 Lazy load、Virtualized list 等方法減少網頁渲染時間

### 程式設計摘要
1. #### Error handling 例外處理
- 當圖片載入失敗時，即觸發 /<img> error 事件，顯示淺米色色塊，表示載入「空圖片」
- 當 fetch API 程式碼擲出 error、response.ok 為 false 時，則顯示「網路連線問題使資料載入不全」modal；於連線恢復正常後，觸發 scroll 會重新載入前次為成功載入之頁數資料

## 附錄
### 技術介紹
#### 前端
- ##### Sass/SCSS
  使用 Sass/SCSS 預處理、開發全域 styling 樣式
- ##### Styled Components
  使用 Styled Components 配合 React 開發
- ##### Normalize.css
  使用 Normalize.css 作跨瀏覽器 CSS 問題處理
- ##### ES6 JavaScript
  使用 ES6 JavaScript 語法做開發

#### 後端
- ##### Firebase Hosting
  使用 Hosting 建立 Web server

#### 開發工具
- ##### Git/GitHub
  使用 Git/GitHub 做版本控管，嘗試實踐 Git Flow
- ##### NPM、Webpack、webpack-dev-server、Babel
  使用 npm、webpack、webpack-dev-server、Babel 建置開發環境
- ##### ESLint/Prettier
  導入 ESLint/Prettier 統一開發風格

### 專案介紹
「optimize-perf-infinite-scroll」為一頁式網站作品，作品專注於優化 Infinite scroll 之效能，使用 Lighthouse 檢測，最終提升效能 28%、SEO 82 分，優化途徑包含 Lazy loading、防止事件抖動、Virtualized list 等。此外，使用 webpack、Eslint/Prettier 等工具建構開發環境，並關注 Error handling、SEO 等議題。

![](https://github.com/haoyuliaocurb/optimize-perf-infinite-scroll/blob/main/images/homePage-lg.png)

- #### Loader 載入狀態
在購物清單頁中，使用者可以瀏覽、新增、刪除購物清單，並進一步編輯購物清單內容，新增、刪除清單項目。於手機螢幕中，瀏覽購物清單、編輯購物清單會分為兩個頁面呈現。

圖：購物清單頁左半部所被選取的購物清單，其內容會顯示於右半部

![](https://github.com/haoyuliaocurb/optimize-perf-infinite-scroll/blob/main/images/homePage-loader-lg.png)

圖左：首頁<br>
圖右：載入狀態

![](https://github.com/haoyuliaocurb/optimize-perf-infinite-scroll/blob/main/images/homePage-combined-sm.png)

- #### Error handling 例外處理

圖：例外處理，當例外產生時，會出現 Modal 已告知使用者資料載入不全

![](https://github.com/haoyuliaocurb/optimize-perf-infinite-scroll/blob/main/images/homePage-errorModal-lg.png)
<!-- ### 程式設計
### 組件開發總覽
#### \<App />
* ##### \<Main /> -->
