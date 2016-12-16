[← Вернуться к списку методов](../README.md#Список-методов)

Метод `user/name/{names}`
========================
Возвращает информацию об игроке или нескольких игроках по их нику. Если игрок не найден, то он не будет показываться в ответе.

Максимальное количество ников, которые можно указать в одном запросе - 50. Если их будет больше, то сервер вернет ошибку 3 (Invalid parameters). 

## Параметры
* `{names}` - Ники игроков через запятую. Они могут содержать только латинские буквы, цифры и знак подчеркивания _.

## Пример
#### Один игрок
http://api.vime.world/user/name/xtrafrancyz
```json
[
  {
    "id": 134568,
    "username": "xtrafrancyz",
    "rank": "ADMIN",
    "playedSeconds": 3023813
  }
]
```
#### Несколько игроков
http://api.vime.world/user/name/xtrafrancyz,nikita
```json
[
  {
    "id": 134568,
    "username": "xtrafrancyz",
    "rank": "ADMIN",
    "playedSeconds": 3023813
  },
  {
    "id": 91638,
    "username": "nikita",
    "rank": "PLAYER",
    "playedSeconds": 0
  }
]
```
#### Несуществующий игрок
http://api.vime.world/user/name/xX_UbiycaPopugaev228_Xx
```json
[]
```
