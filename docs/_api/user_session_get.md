---
title: /user/:id/session
position: 1.4
type: get
description: Получает статус онлайн игрока
right_code: |
  ~~~ json
  {
    "user": {
      "id": 134568,
      "username": "xtrafrancyz",
      "level": 5,
      "levelPercentage": 0.894,
      "rank": "ADMIN",
      "playedSeconds": 3106732,
      "guild": null
    },
    "online": {
      "value": false,
      "message": "Находится в Лобби",
      "game": "LOBBY"
    }
  }
  ~~~
  {: title="Игрок онлайн" url="/user/134568/session" }

  ~~~ json
  {
    "user": {
      "id": 134568,
      "username": "xtrafrancyz",
      "level": 5,
      "levelPercentage": 0.894,
      "rank": "ADMIN",
      "playedSeconds": 3106732,
      "guild": null
    },
    "online": {
      "value": false,
      "message": "Игрок оффлайн"
    }
  }
  ~~~
  {: title="Игрок оффлайн" url="/user/134568/session" }
---

<h6>Параметры</h6>
id
: id игрока.

Возвращает статус игрока онлайн, человекопонятное сообщение и название игры, где он находится.
