---
title: /misc/games
position: 7.1
type: get
description: Список игр, по которым ведется статистика
right_code: |
  ~~~ json
  [
    {
      "id": "ANN",
      "name": "Annihilation",
      "global_stats": [
        "kills",
        "bowkills",
        "wood",
        "ores",
        "nexus",
        "digged"
      ],
      "season_stats": {
        "monthly": [
          "kills",
          "bowkills",
          "wood",
          "ores",
          "nexus",
          "digged"
        ]
      }
    },
    {
      "id": "BB",
      "name": "BuildBattle",
      "global_stats": [
        "games",
        "wins"
      ],
      "season_stats": {
        "monthly": [
          "games",
          "wins"
        ]
      }
    },
    ...
  ]
  ~~~
  {: title="Пример запроса" url="/misc/games" }
---

Возвращает список всех игр, которые поддерживаются API.

<h6>Ответ</h6>
global_stats
: Все возможные значения статистики по этой игре за все время.

season_stats
: Возможные значения статистики по игре за определенный сезон.
- `monthly` - за текущий месяц.
- `manual` - сбрасывается вручную.
