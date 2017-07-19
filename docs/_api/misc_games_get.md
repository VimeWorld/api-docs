---
title: /misc/games
position: 4.1
type: get
description: Список игр, по которым ведется статистика
right_code: |
  ~~~ json
  {
    "SW": {
      "name": "SkyWars",
      "stats": [
        "kills",
        "games",
        "wins"
      ]
    },
    "BW": {
      "name": "BedWars",
      "stats": [
        "kills",
        "games",
        "wins",
        "deaths",
        "bedBreaked"
      ]
    },
    "HG": {
      "name": "HungerGames",
      "stats": [
        "kills",
        "games",
        "wins"
      ]
    },
    ...
  }
  ~~~
  {: title="Пример запроса" url="/misc/games" }
---

Возвращает список всех игр, которые поддерживаются API.

<h6>Ответ</h6>
stats
: Все возможные значения статистики по этой игре, которые отдаются методом [user/:id/stats](#apiuser_stats_get).
