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
      "BW": {
        "global": {
          "kills": 76,
          "deaths": 118,
          "games": 17,
          "wins": 2,
          "bedBreaked": 5
        },
        "season": {
          "monthly": {
            "kills": 0,
            "deaths": 0,
            "games": 0,
            "wins": 0,
            "bedBreaked": 0
          }
        }
      },
      "MW": {
        "global": {
          "games": 27,
          "wins": 18,
          "mobsKilled": 1530,
          "mobsSended": 3800,
          "maxIncome": 571494
        },
        "season": {
          "monthly": {
            "games": 0,
            "wins": 0,
            "mobsKilled": 0,
            "mobsSended": 0
          }
        }
      },
      ...
    }
  }
  ~~~
  {: title="Полная статистика" url="/user/134568/stats" }

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
      "BW": {
        "global": {
          "kills": 76,
          "deaths": 118,
          "games": 17,
          "wins": 2,
          "bedBreaked": 5
        },
        "season": {
          "monthly": {
            "kills": 0,
            "deaths": 0,
            "games": 0,
            "wins": 0,
            "bedBreaked": 0
          }
        }
      }
    }
  }
  ~~~
  {: title="Статистика BedWars" url="/user/134568/stats?games=bw" }
---

<h6>Параметры</h6>
id
: id игрока.

<h6>Дополнительные параметры</h6>
games
: Выводит только статистику указанных игр. Если вам не нужна полная статистика игрока, пожалуйста, указывайте только нужные вам игры. Игры указываются через запятую, по их id из [misc/games](#apimisc_games_get).

Возвращает статистику всех игр, в которые играл запрашиваемый игрок. Список игр и их возможные значения статистики можно узнать с помощью метода [misc/games](#apimisc_games_get).

Если игрок с заданным id не найден, то вернется ошибка 10 (Invalid user id).
{: .info }

<h6>Ответ</h6>
stats > global
: Статистика по игре за все время.

stats > season
: Статистика по игре за определенный сезон.
