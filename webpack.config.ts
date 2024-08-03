import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  mode: 'development',
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/, // не обрабатываем файлы из node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ],
            cacheDirectory: true, // Использование кэша для избежания рекомпиляции при каждом запуске
          },
        },
      },
      {
        test: /.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true
              }
            }
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      { test: /\.(html)$/, use: [ 'html-loader' ] }, // Добавляем загрузчик для html
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),     // путь к каталогу выходных файлов - папка public
    filename: "bundle.js",       // название создаваемого файла
    assetModuleFilename: 'assets/[hash][ext][query]', // Все ассеты будут складываться в dist/assets
    clean: true,
  },
  plugins: [ new HtmlWebpackPlugin(
    {
      template: './index.html', // Данный html будет использован как шаблон
    }
  ), ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
