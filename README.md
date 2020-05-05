# Домашнее задание

1. Реализовать функционал Forgot Password
    - Создать страницу ForgotPassword
    - Создать отдельную компоненту под форму. Email обязательно валидировать.
    - Создать соответствующий метод в firebase auth.service
    - Создать метод в auth store
    - После того как пользователь отправил запрос на сброс пароля показать соответствующее уведомление
2. Реализовать функционал Sigh Up
    - Создать страницу SignUp
    - Создать отдельную компоненту под форму. В форме должны быть следующие поля email, password, repeat password. Обязательно проверять что пароли совпадают.
    - Создать соответствующий метод в firebase auth.service
    - Создать метод в auth store
    - После того как пользователь отправил запрос, если firebase сразу вернет пользователя в callback onAuthStateChanged то редиректить пользователя на главную страницу иначе на страницу Login. Также выводить уведомление пользователю об ошибках.

# Материалы
1. [Firebase Docks](https://firebase.google.com/docs/auth/web/password-auth)
2. [Firebase reset password](https://firebase.google.com/docs/auth/web/manage-users?hl=ru) там вы найдете метод sendPasswordResetEmail


# chat

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
