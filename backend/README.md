# Team Pixel backend

**Технологии**
Python 3.10
Django 3.2
Django REST Framework
Djoser
drf-yasg (для Swagger)

## Установка

### Клонируйте репозиторий:

Создать .env в корне проекта, использовать как пример .env.dist:
```
cp .env.dist .env
```

Создайте и активируйте виртуальное окружение:
```
python3 -m venv venv
source venv/bin/activate   # On Windows use `venv\Scripts\activate`
```

Установите зависимости:
```
pip install -r requirements.txt
```
Выполните миграции:
```
python manage.py makemigrations
python manage.py migrate
```
Создайте суперпользователя для доступа к административной панели:
```
python manage.py createsuperuser
```
Запустите сервер разработки:
```
python manage.py runserver
```
Доступ к административной панели
```
Откройте браузер и перейдите по адресу http://127.0.0.1:8000/admin/
Введите данные суперпользователя, созданные на шаге 5 установки.
```
Доступ к документации Swagger
```
Откройте браузер и перейдите по адресу http://127.0.0.1:8000/swagger/.
Здесь вы можете увидеть автоматически сгенерированную документацию API.
```
### Аутентификация
Аутентификация в проекте осуществляется с помощью токенов через Djoser. Djoser предоставляет готовые эндпоинты для регистрации пользователей, логина, логаута и управления токенами. Для аутентификации используйте токен, который можно получить после логина, и добавляйте его в заголовок Authorization для доступа к защищенным ресурсам.
