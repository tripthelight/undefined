### npm install

- npm i -D webpack webpack-cli
- npm i -D babel-loader @babel/core @babel/preset-env
- npm i -D css-loader css-minimizer-webpack-plugin
- npm i -D style-loader sass sass-loader
- npm i -D webpack-dev-middleware webpack-dev-server
- npm i -D terser-webpack-plugin
- npm i -D mini-css-extract-plugin
- npm i -D css-minimizer-webpack-plugin html-webpack-plugin
- npm i -D postcss postcss-loader postcss-preset-env
- npm i -D autoprefixer
- npm i -D concurrently
- npm i -D dotenv
- npm i -D express
- npm i -D nodemon

### 유의사항

- webpack에서 scss를 css로 compile 할 경우, scss 파일에서 @import 대신 @use를 사용할 것
- webpack을 이용할 경우 -> devServer를 사용할 경우 -> css에서 폰트의 경로는 절대경로로 주고, webpack.config.js에서 publicPath를 지정 -> devServer가 express의 middleware use 역할을 하는 것으로 추청됨

### 할일

- font-face, css, js, image 는 static 경로에 넣을 것
