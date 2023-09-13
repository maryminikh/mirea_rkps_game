var pkg = require('../../package.json');   // импортируем package.json
  // bundler = require('./helpers/bundler');    // импортируем хелпер для созлания бандлов


/* Настраиваем пути */
var _src = './src/';   // путь до исходников
  // _dist = './dist/',    // куда будем сохранять дистрибутив будущей библиотеки
  // _public = './public/';  // куда будем сохранять сайт или примеры использования библиотеки

var _js = 'js/',        // папка с javascript файлами
  _css = 'css/',       // папка с css
  // _img = 'img/',       // папка с картинками
  _html = 'html/';      // папка с html


/*
 * Настраиваем js / css бандлы
 *
 * Пример: app.js, app.css     - сайт
 *         admin.js, admin.css - админка
 *
 * Пример: your-lib.js        - модуль без зависимостей
 *         your-lib.jquery.js - модуль в формате jquery-плагина
 *
 */

var bundles = [
  {
    name: 'app', // название бандла
    global: 'app', // если пишем модуль, это имя объекта, экспортируемого в глобальное пространство имён
    compress: true,  // минифицируем?
    saveToDist: true   // сохраняем в папку `/dist`? (true - если пишем модуль, false - если делаем сайт)
  }
];


module.exports = {

  /* тут настройки тасков */

};
