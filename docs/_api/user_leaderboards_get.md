---
title: /user/:id/leaderboards
position: 1.7
type: get
description: Получает место игрока в топах
right_code: |
  ~~~ json
  {
    "user": {
      "id": 943030,
      "username": "murzuk",
      "level": 122,
      "levelPercentage": 0.83744,
      "rank": "YOUTUBE",
      "playedSeconds": 21058620,
      "lastSeen": 1557574378,
      "guild": {
        "id": 287,
        "name": "Desire to Live",
        "tag": "Кошак",
        "color": "&7",
        "level": 54,
        "levelPercentage": 0.9503689655172414,
        "avatar_url": null
      }
    },
    "leaderboards": [
      {
        "type": "user",
        "sort": "level",
        "place": 1
      }, {
        "type": "user",
        "sort": "online",
        "place": 19
      }, {
        "type": "ann",
        "sort": "kills",
        "place": 413
      }
    ]
  }
  ~~~
  {: title="Пример игрока в топах" url="/user/943030/leaderboards" }

  ~~~ json
  {
    "user": {
      "id": 134568,
      "username": "xtrafrancyz",
      "level": 38,
      "levelPercentage": 0.4574,
      "rank": "ADMIN",
      "playedSeconds": 6265584,
      "lastSeen": 1557479038,
      "guild": null
    },
    "leaderboards": []
  }
  ~~~
  {: title="Пример игрока без топов" url="/user/134568/leaderboards" }
---

<h6>Параметры</h6>
id
: id игрока.

Возвращает список таблиц рекордов, куда попал данный игрок, и место в них. Список всех возможных топов можно узнать с помощью метода [leaderboard/list](#apileaderboard_list_get).

Если игрок с заданным id не найден, то вернется ошибка 10 (Invalid user id).
{: .info }

<h6>Ответ</h6>
leaderboards -> place
: Позиция игрока в топе.
