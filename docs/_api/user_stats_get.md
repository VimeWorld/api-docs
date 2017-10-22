---
title: /user/:id/stats
position: 1.5
type: get
description: Получает статистику игрока
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
    "stats": {
      "SkyWars": {
        "kills": 25,
        "wins": 2,
        "arrowsFired": 0,
        "currentWinStreak": 0,
        "games": 39,
        "winStreak": 0,
        "blocksPlaced": 0,
        "blocksBroken": 0,
        "deaths": 0
      },
      "BedWars": {
        "kills": 63,
        "wins": 2,
        "games": 10,
        "deaths": 97,
        "bedBreaked": 3
      }
    }
  }
  ~~~
  {: title="Пример запроса" url="/user/134568/stats" }
---

<h6>Параметры</h6>
id
: id игрока.

Возвращает статистику всех игр, в которые играл запрашиваемый игрок. Список игр и их возможные значения статистики можно узнать с помощью метода [misc/games](#apimisc_games_get).
