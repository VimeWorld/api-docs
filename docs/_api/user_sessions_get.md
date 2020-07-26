---
title: /user/session/:ids
position: 1.9
type: get
description: Массовое получение статуса (до 50)
right_code: |
  ~~~ json
  [
    {
      "id": 134568,
      "username": "xtrafrancyz",
      "level": 5,
      "levelPercentage": 0.894,
      "rank": "ADMIN",
      "playedSeconds": 3106732,
      "guild": null,
      "online": {
        "value": true,
        "message": "Находится в Лобби",
        "game": "LOBBY"
      }
    }
  ]
  ~~~
  {: title="Один игрок" url="/user/session/134568" }

  ~~~ json
  [
    {
      "id": 134568,
      "username": "xtrafrancyz",
      "level": 5,
      "levelPercentage": 0.894,
      "rank": "ADMIN",
      "playedSeconds": 3106732,
      "guild": null,
      "online": {
        "value": true,
        "message": "Находится в Лобби",
        "game": "LOBBY"
      }
    },
    {
      "id": 94245,
      "username": "Okssi",
      "level": 37,
      "levelPercentage": 0.44946,
      "rank": "CHIEF",
      "playedSeconds": 4335897,
      "online": {
        "value": false,
        "message": "Игрок оффлайн"
      }
    }
  ]
  ~~~
  {: title="Несколько" url="/user/session/134568,94245" }
---

<h6>Параметры</h6>
ids
: id игроков через запятую. Можно указывать как один, так и несколько.

Возвращает статус игроков онлайн, человекопонятное сообщение и название игры, где каждый из них находится.

Максимальное количество айдишников, которые можно указать в одном запросе - 50. Если их будет больше, то сервер вернет ошибку 3 (Invalid parameters).
{: .info }
