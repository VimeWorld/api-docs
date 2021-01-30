---
title: /leaderboard/list
position: 3.1
type: get
description: Список таблиц рекордов
right_code: |
  ~~~ json
  [
    {
      "type": "bb",
      "description": "Топ игроков на BuildBattle",
      "max_size": 1000,
      "sort": [
        "wins"
      ]
    },
    {
      "type": "bp_monthly",
      "description": "Топ игроков на BlockParty (в этом месяце)",
      "max_size": 1000,
      "sort": [
        "wins"
      ]
    },
    {
      "type": "user",
      "description": "Общий топ игроков",
      "max_size": 1000,
      "sort": [
        "level",
        "online"
      ]
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

max_size
: Максимальное количество записей, которые вернет сервер.

sort
: Список доступных вариантов таблицы рекордов.
