---
title: /user/name/:names
position: 1.1
type: get
description: Получает игрока по нику
right_code: |
  ~~~ json
  [
    {
      "id": 134568,
      "username": "xtrafrancyz",
      "level": 5,
      "rank": "ADMIN",
      "playedSeconds": 3023813
    }
  ]
  ~~~
  {: title="Один игрок" url="/user/name/xtrafrancyz" }

  ~~~ json
  [
    {
      "id": 134568,
      "username": "xtrafrancyz",
      "level": 5,
      "rank": "ADMIN",
      "playedSeconds": 3023813
    },
    {
      "id": 91638,
      "username": "nikita",
      "level": 1,
      "rank": "PLAYER",
      "playedSeconds": 0
    }
  ]
  ~~~
  {: title="Несколько игроков" url="/user/name/xtrafrancyz,nikita" }

  ~~~ json
  []
  ~~~
  {: title="Несуществующий игрок" url="/user/name/hi" }
---

<h6>Параметры</h6>
names
: Ники игроков через запятую. Они могут содержать только латинские буквы, цифры и знак подчеркивания _.

Возвращает информацию об игроке или нескольких игроках по их нику. Если игрок не найден, то он не будет показываться в ответе.

Максимальное количество ников, которые можно указать в одном запросе - 50. Если их будет больше, то сервер вернет ошибку 3 (Invalid parameters).
{: .info }
