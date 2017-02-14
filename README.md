# Most Starter Kit

Шаблон для быстрого старта разработки фронтенда

## Установка и запуск

```
npm install
bower install
gulp watch
```

## Структура папок

```
build/                  --> собранный проект
  css/                  --> стили
  img/                  --> картинки
  js/                   --> скрипты
  index.html            --> главная страница
node_modules/           --> пакеты, установленные через npm
src/                    --> исходники проекта
  bower_components/     --> пакеты, установленные через bower
  img/                  --> картинки
  js/                   --> скрипты
  scss/                 --> файлы css-препроцессора
    common/             --> общие стили проекта
      __helpers.scss    --> кросс-проектные миксины
      __normalize.scss  --> normalize
      fonts.scss        --> стили шрифтов
      general.scss      --> общие стили страницы
      mixins.scss       --> миксины
      variables.scss    --> переменные
    components/         --> стили компонентов страницы
    vendor/             --> внешние стили (js-плагины и т.д.)
    main.scss           --> основной файл стилей
  index.html            --> главная страница
.bowerrc                --> файл настроек для bower
.gitignore              --> файл настроек для git
bower.json              --> файл конфигурации для bower
gulpfile.js             --> файл конфигурации для gulp
package.json            --> файл конфигурации для npm
README.md               --> файл с описанием проекта
```

## Todo

* [ ] Обработка HTML
* [ ] Сборка своих скриптов + babel
* [ ] Линтеры HTML, CSS, JS
* [ ] Сборка svg-спрайтов
* [ ] Вывод уведомлений
* [ ] Добавить команду build