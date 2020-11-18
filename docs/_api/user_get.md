---
title: /user/:ids
position: 1.2
type: get
description: Получает игрока по id
right_code: |
  ~~~ json
  [
    {
      "id": 134568,
      "username": "xtrafrancyz",
      "level": 5,
      "levelPercentage": 0.894,
      "rank": "ADMIN",
      "playedSeconds": 3023813,
      "guild": {
        "id": 401,
        "name": "Кек дела - хорошо",
        "tag": null,
        "color": "&f",
        "level": 1,
        "levelPercentage": 0.38236,
        "avatar_url": "https://mc.vimeworld.ru/launcher/guilds/401.png"
      }
    }
  ]
  ~~~
  {: title="Один игрок" url="/user/134568" }

  ~~~ json
  [
    {
      "id": 134568,
      "username": "xtrafrancyz",
      "level": 5,
      "levelPercentage": 0.894,
      "rank": "ADMIN",
      "playedSeconds": 3023813,
      "guild": {
        "id": 401,
        "name": "Кек дела - хорошо",
        "tag": null,
        "color": "&f",
        "level": 1,
        "levelPercentage": 0.38236,
        "avatar_url": "https://mc.vimeworld.ru/launcher/guilds/401.png"
      }
    },
    {
      "id": 91638,
      "username": "nikita",
      "level": 1,
      "levelPercentage": 0,
      "rank": "PLAYER",
      "playedSeconds": 0,
      "guild": null
    }
  ]
  ~~~
  {: title="Несколько игроков" url="/user/134568,91638" }

  ~~~ json
  []
  ~~~
  {: title="Несуществующий игрок" url="/user/999999999" }
---

<h6>Параметры</h6>
ids
: id игроков через запятую. Можно указывать как один, так и несколько.

Возвращает информацию об игроке или нескольких игроках по их id. Если игрок с заданым id не найден, то он не будет показан в ответе.

Максимальное количество айдишников, которые можно указать в одном запросе - 50. Если их будет больше, то сервер вернет ошибку 3 (Invalid parameters).
{: .info }
