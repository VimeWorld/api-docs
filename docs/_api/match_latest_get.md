---
title: /match/latest
position: 5.2
type: get
description: Список последних матчей на сервере
right_code: |
  ~~~ json
  [
    {
      "id": "53411386641874944",
      "game": "DUELS",
      "map": {
        "id": "EHkron",
        "name": "Экрон",
        "teams": 2,
        "playersInTeam": 1
      },
      "date": 1559035066,
      "duration": 14,
      "players": 4
    }, {
      "id": "53411386293747712",
      "game": "BW",
      "map": {
        "id": "Shosul_4x4",
        "name": "Шосул",
        "teams": 4,
        "playersInTeam": 4
      },
      "date": 1559035066,
      "duration": 871,
      "players": 16
    }
  ]
  ~~~
  {: title="Пример запроса" url="/match/latest" }
---

<h6>Дополнительные параметры</h6>
count
: Количество последних игр, которые вернет сервер. По умолчанию - 20, максимально - 100.

<h6>Ответ</h6>
date
: Время окончания матча.

map
: Информация о карте, где проходила игра. Может быть `null`.

Список обновляется раз в 10 секунд.
{: .info }
