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
      "lastSeen": 1611848249,
      "guild": null
    },
    "online": {
      "value": true,
      "message": "Находится в Лобби",
      "game": "LOBBY"
    }
  }
  ~~~
  {: title="Игрок онлайн" url="/user/134568/session" }
  
  ~~~ json
  {
    "user": {
      "id": 64638,
      "username": "Kynth",
      "level": 56,
      "levelPercentage": 0.76395,
      "rank": "MODER",
      "playedSeconds": 6735290,
      "lastSeen": 1612021654,
      "guild": null
    },
    "online": {
      "value": true,
      "message": "Онлайн"
    }
  }
  ~~~
  {: title="Модер онлайн" url="/user/134568/session" }

  ~~~ json
  {
    "user": {
      "id": 134568,
      "username": "xtrafrancyz",
      "level": 5,
      "levelPercentage": 0.894,
      "rank": "ADMIN",
      "playedSeconds": 3106732,
      "lastSeen": 1611848249,
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

Если игрок с заданным id не найден, то вернется ошибка 10 (Invalid user id).
{: .info }
