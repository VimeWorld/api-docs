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
        "id": 927,
        "name": "TheRebellAlliance",
        "tag": "-TRA-",
        "color": "&b",
        "level": 71,
        "levelPercentage": 0.376709,
        "avatar_url": "https://mc.vimeworld.ru/launcher/guilds/927.png"
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
        "tag": "VTop",
        "color": "&a",
        "level": 24,
        "levelPercentage": 0.015529,
        "avatar_url": "https://mc.vimeworld.ru/launcher/guilds/104.jpg"
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
