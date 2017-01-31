---
title: /leaderboard/get/:type[/:sort]
position: 2.2
type: get
description: Возвращает таблицу рекордов
right_code: |
  ~~~ json
  {
    "leaderboard": {
      "type": "level",
      "sort": null,
      "size": 100
    },
    "records": [
      {
        "id": 36754,
        "username": "ender_HAYIIIA",
        "level": 22,
        "rank": "IMMORTAL"
      },
      {
        "id": 200525,
        "username": "TeLKa1337",
        "level": 21,
        "rank": "IMMORTAL"
      },
      ...
    ]
  }
  ~~~
  {: title="По уровню" url="/leaderboard/get/level" }

  ~~~ json
  {
    "leaderboard": {
      "type": "sw",
      "sort": "wins",
      "size": 100
    },
    "records": [
      {
        "user": {
          "id": 186517,
          "username": "M1halych",
          "level": 8,
          "rank": "PLAYER"
        },
        "wins": 6045,
        "games": 10302,
        "kills": 30099,
        "deaths": 379
      },
      {
        "user": {
          "id": 211701,
          "username": "EvilMaster",
          "level": 14,
          "rank": "WARDEN"
        },
        "wins": 5853,
        "games": 9365,
        "kills": 29179,
        "deaths": 305
      },
      ...
    ]
  }
  ~~~
  {: title="SkyWars по победам" url="/leaderboard/get/sw" }

  ~~~ json
  {
    "leaderboard": {
      "type": "bw",
      "sort": "kills",
      "size": 100
    },
    "records": [
      {
        "user": {
          "id": 179278,
          "username": "Darksiders_azaza",
          "level": 9,
          "rank": "PLAYER"
        },
        "wins": 1665,
        "games": 2243,
        "kills": 30682,
        "deaths": 9278,
        "bedBreaked": 2898
      },
      {
        "user": {
          "id": 140324,
          "username": "_Cuuuba_",
          "level": 1,
          "rank": "HOLY"
        },
        "wins": 1354,
        "games": 1721,
        "kills": 23686,
        "deaths": 5822,
        "bedBreaked": 1974
      },
      ...
    ]
  }
  ~~~
  {: title="BedWars по убийствам" url="/leaderboard/get/bw/kills" }
---

<h6>Параметры</h6>
type
: Тип таблицы рекордов. Список таблиц возвращает метод [leaderboard/list](#apileaderboard_list_get).

sort
: Вариант таблицы рекордов (необязательно). 

Возвращает таблицу рекордов.

Информация обновляется раз в час.
{: .info }
