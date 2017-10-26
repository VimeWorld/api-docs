---
title: /leaderboard/get/:type[/:sort]
position: 3.2
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
        "id": 165070,
        "username": "_SmILeGames_",
        "level": 73,
        "levelPercentage": 0.25811,
        "rank": "IMMORTAL",
        "playedSeconds": 9501091,
        "guild": {
          "id": 87,
          "name": "E.S.C",
          "tag": null,
          "color": "&f"
        }
      },
      {
        "id": 246843,
        "username": "_KorovkaGOD_",
        "level": 72,
        "levelPercentage": 0.33993,
        "rank": "IMMORTAL",
        "playedSeconds": 9199587,
        "guild": null
      },
      ...
    ]
  }
  ~~~
  {: title="По уровню" url="/leaderboard/get/user/level" }

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
          "level": 40,
          "levelPercentage": 0.71594,
          "rank": "HOLY",
          "playedSeconds": 7897811,
          "guild": {
            "id": 107,
            "name": "Revenge",
            "tag": null,
            "color": "&f"
          }
        },
        "wins": 10186,
        "games": 19068,
        "kills": 51951,
        "deaths": 5004
      },
      {
        "user": {
          "id": 211701,
          "username": "EvilMaster",
          "level": 64,
          "levelPercentage": 0.26511,
          "rank": "WARDEN",
          "playedSeconds": 9308811,
          "guild": {
            "id": 1,
            "name": "Fantastic Five",
            "tag": null,
            "color": "&f"
          }
        },
        "wins": 9758,
        "games": 15889,
        "kills": 44634,
        "deaths": 2924
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
          "levelPercentage": 0.321,
          "rank": "PLAYER",
          "guild": null
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
          "levelPercentage": 0.233,
          "rank": "HOLY",
          "guild": null
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

  ~~~ json
  {
    "leaderboard": {
      "type": "sw",
      "sort": "kills",
      "size": 10
    },
    "records": [
      {
        "user": {
          "id": 186517,
          "username": "M1halych",
          "level": 8,
          "levelPercentage": 0.342,
          "rank": "PLAYER",
          "guild": null
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
          "levelPercentage": 0.042,
          "rank": "WARDEN",
          "guild": null
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
  {: title="SkyWars 10 записей" url="/leaderboard/get/sw/kills?size=10" }
---

<h6>Параметры</h6>
type
: Тип таблицы рекордов. Список таблиц возвращает метод [leaderboard/list](#apileaderboard_list_get).

sort
: Вариант таблицы рекордов (необязательно).

<h6>Дополнительные параметры</h6>
size
: Количество записей, которые вернет сервер. По умолчанию - 100, максимально - 1000.

Возвращает таблицу рекордов.

Информация обновляется раз в час.
{: .info }
