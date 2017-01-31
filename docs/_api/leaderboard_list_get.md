---
title: /leaderboard/list
position: 2.1
type: get
description: Список таблиц рекордов
right_code: |
  ~~~ json
  [
    {
      "type": "bb",
      "description": "Top players on BuildBattle",
      "sort": [
        "wins"
      ]
    },
    {
      "type": "sw",
      "description": "Top players on SkyWars",
      "sort": [
        "wins",
        "kills"
      ]
    },
    {
      "type": "level",
      "description": "Top players by level",
      "sort": []
    },
    ...
  ]
  ~~~
  {: title="Пример запроса" url="/leaderboard/list" }
---

Возвращает список всех доступных таблиц рекордов.

<h6>Ответ</h6>
type
: Тип таблицы рекордов, он используется для получения конкретной таблицы рекордов в методе [leaderboard/get](#apileaderboard_get).

description
: Краткое описание таблицы рекордов.

sort
: Список доступных вариантов таблицы рекордов.
