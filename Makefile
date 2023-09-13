# # Путь к исполняемому файлу Node.js
# NODE = node
#
# # Путь к файлам исходного кода
# JS_FILES := $(shell find . -name '*.js')
#
# # Цель по умолчанию
# all: build lint test
#
# # Сборка проекта
# build:
#   $(NODE) build.js
#
# # Запуск линтера
# lint:
#   $(NODE) node_modules/.bin/eslint $(JS_FILES)
#
# # Запуск тестов
# test:
#   $(NODE) node_modules/.bin/mocha test/*.js
#
# # Очистка проекта
# clean:
#     rm -rf build/
#
# .PHONY: all build lint test clean
