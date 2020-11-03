---
title: /online/staff
position: 4.3
type: get
description: Список модераторов онлайн
right_code: |
  ~~~ json
  [
    {
      "id": 64165,
      "username": "kuclopoguk",
      "level": 37,
      "levelPercentage": 0.37101,
      "rank": "MODER",
      "playedSeconds": 5950354,
      "guild": {
        "id": 124,
        "name": "TheRebellAlliance",
        "tag": null,
        "color": "&f"
      },
      "online": {
        "value": true,
        "message": "Онлайн"
      }
    },
    {
      "id": 1249617,
      "username": "LoganFrench",
      "level": 37,
      "levelPercentage": 0.17737,
      "rank": "WARDEN",
      "playedSeconds": 2705011,
      "guild": {
        "id": 104,
        "name": "VimeTop",
        "tag": null,
        "color": "&f"
      },
      "online": {
        "value": true,
        "message": "Онлайн"
      }
    }
  ]
  ~~~
  {: title="Пример запроса" url="/online/staff" }
---

Возвращает список модераторов, которые в данный момент находятся на сервере.

Информация обновляется раз в 10 сек.
{: .info }
