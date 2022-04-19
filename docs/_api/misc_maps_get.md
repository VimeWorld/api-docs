---
title: /misc/maps
position: 7.2
type: get
description: Список карт, сгруппированный по играм
right_code: |
  ~~~ json
  {
    "ANN": {
      "Atlas": {
        "name": "Атлас",
        "teams": 4,
        "playersInTeam": 25
      },
      "Castles": {
        "name": "Замки",
        "teams": 4,
        "playersInTeam": 25
      }
    },
    "BW": {
      "Actuon_4x2": {
        "name": "Актуон",
        "teams": 2,
        "playersInTeam": 4
      },
      "Alezia_2x4": {
        "name": "Алезия",
        "teams": 4,
        "playersInTeam": 2
      },
      ...
    },
    ...
  ]
  ~~~
  {: title="Пример запроса" url="/misc/maps" }
---

Возвращает список всех карт на VimeWorld. Здесь могут быть игры, которых нет в ответе [misc/games](#apimisc_games_get), например SWT.
Технически это одна игра, но список карт для SW и SWT разный.

<h6>Ответ</h6>
teams
: Количество команд на этой карте.

playersInTeam
: Количество игроков в каждой команде.
