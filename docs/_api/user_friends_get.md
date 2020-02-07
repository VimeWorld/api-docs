---
title: /user/:id/friends
position: 1.3
type: get
description: Получает друзей игрока
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
    "friends": [
      {
        "id": 105889,
        "username": "rsboe",
        "level": 8,
        "levelPercentage": 0.856,
        "rank": "BUILDER",
        "playedSeconds": 5508358,
        "guild": {
          "id": 1,
          "name": "Fantastic Five",
          "tag": null,
          "color": "&f"
        }
      },
      {
        "id": 94245,
        "username": "Okssi",
        "level": 10,
        "levelPercentage": 0.168,
        "rank": "CHIEF",
        "playedSeconds": 2596550,
        "guild": null
      },
      {
        "id": 113654,
        "username": "SmaIK",
        "level": 3,
        "levelPercentage": 0.278,
        "rank": "ADMIN",
        "playedSeconds": 1300227,
        "guild": null
      }
    ]
  }
  ~~~
  {: title="Пример запроса" url="/user/134568/friends" }
---

<h6>Параметры</h6>
id
: id игрока.

Возвращает список друзей игрока.

Если игрок с заданным id не найден, то вернется ошибка 10 (Invalid user id).
{: .info }
