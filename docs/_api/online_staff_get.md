---
title: /online/staff
position: 3.3
type: get
description: Список модераторов онлайн
right_code: |
  ~~~ json
  [
    {
      "id": 281057,
      "username": "Edeeeen",
      "level": 30,
      "rank": "MODER",
      "online": {
        "value": true,
        "message": "Играет в SkyWars Solo",
        "game": "SW"
      }
    },
    {
      "id": 334699,
      "username": "RaptorGame",
      "level": 23,
      "rank": "MODER",
      "online": {
        "value": true,
        "message": "Находится в Лобби",
        "game": "LOBBY"
      }
    }
  ]
  ~~~
  {: title="Пример запроса" url="/online/staff" }
---

Возвращает список модераторов, которые в данный момент находятся на сервере.

Информация обновляется раз в 10 сек.
{: .info }
