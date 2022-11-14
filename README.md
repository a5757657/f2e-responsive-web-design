# ⭐ The F2E 活動網站設計 ⭐

🔗[線上觀看連結](https://a5757657.github.io/f2e-responsive-web-design/ "線上觀看連結")

### 啟動專案
1. 🧑‍🤝‍🧑 克隆專案

    `git clone https://github.com/a5757657/f2e-responsive-web-design.git`

2. 🔨 安裝套件

    `npm install`

3. 🎉 啟動專案

    `npm start`

### 🎁 套件
-  [aos](https://michalsnik.github.io/aos/ "aos")
-  [gsap](https://greensock.com "gsap")
-  [node-sass](https://github.com/sass/node-sass "node-sass")
-  [styled-components](https://styled-components.com "styled-components")
-  [fontawesome](https://fontawesome.com "fontawesome")

### 架構
    🌃 asset：個頁面靜態資料存放區 如：圖片

    📁 components：元件放置區

    💅 styles：專案統一的css

    🖥 views：個區塊頁面放置區

### 👌 使用mixin.scss 
```css
@mixin Title($color: #000, $style: normal, $weight: 900, $size: 100px, $height: 160px) {
  color: $color;
  font-style: $style;
  font-weight: $weight;
  font-size: $size;
  line-height: $height;
}

div {
  @include Title /* 引入會直接套用預設的樣式 */
}

div {
  @include Title($color: red, $size: 12px) /* 可傳入參數對應的樣式設定 */
}

```
