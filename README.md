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
build/                          --> собранный проект
  css/                          --> стили
  fonts/                        --> шрифты
  img/                          --> картинки
    icons/                      --> иконки и спрайты
  js/                           --> скрипты
  index.html                    --> главная страница
node_modules/                   --> пакеты, установленные через npm
src/                            --> исходники проекта
  bower_components/             --> пакеты, установленные через bower
  fonts/                        --> шрифты
  img/                          --> картинки
    icons/                      --> иконки и спрайты
  js/                           --> скрипты
  scss/                         --> файлы css-препроцессора
    common/                     --> общие стили проекта
      __helpers.scss            --> кросс-проектные миксины
      __normalize.scss          --> normalize
      fonts.scss                --> стили шрифтов
      general.scss              --> общие стили страницы
      mixins.scss               --> миксины
      variables.scss            --> переменные
    components/                 --> стили компонентов страницы
    vendor/                     --> внешние стили (js-плагины и т.д.)
      bootstrap-4.0.0-alpha.6/  --> стили bootstrap (сетка)
    main.scss                   --> основной файл стилей
  index.html                    --> главная страница
.babelrc                        --> файл конфигурации для babel
.bowerrc                        --> файл настроек для bower
.eslintrc                       --> файл конфигурации для eslint
.gitignore                      --> файл настроек для git
.stylelintrc                    --> файл настроек для stylelint
bower.json                      --> файл конфигурации для bower
gulpfile.js                     --> файл конфигурации для gulp
package.json                    --> файл конфигурации для npm
README.md                       --> файл с описанием проекта
```

## Todo

* [ ] Написать инструкции по использованию
* [ ] Автоматически создавать пустые папки
* [ ] Добавить новые переменные окружения в eslint
* [ ] Сразу подключать скрипты из bower
* [ ] Сразу подключать стили из bower (main.scss - подключать vendor из bower_components)
* [ ] Копировать в build несжатые картинки