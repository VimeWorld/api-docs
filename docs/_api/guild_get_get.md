---
title: /guild/get
position: 2.1
type: get
description: Получает информацию о гильдии
right_code: |
  ~~~ json
  {
    "id": 1,
    "name": "Fantastic Five",
    "tag": null,
    "color": "&f",
    "created": 1508631234,
    "totalCoins": 55000,
    "level": 1,
    "levelPercentage": 0.81264,
    "members": [
      {
        "user": {
          "id": 176361,
          "username": "eLs",
          "level": 55,
          "levelPercentage": 0.72247,
          "rank": "WARDEN",
          "playedSeconds": 8172366
        },
        "status": "LEADER",
        "joined": 1508631234,
        "guildCoins": 55000,
        "guildExp": 1123
      },
      ...
    ]
  }
  ~~~
  {: title="Получение по id" url="/guild/get?id=1" }

  ~~~ json
  {
    "id": 1,
    "name": "Fantastic Five",
    "tag": null,
    "color": "&f",
    "created": 1508631234,
    "totalCoins": 55000,
    "level": 1,
    "levelPercentage": 0.81264,
    "members": [
      {
        "user": {
          "id": 176361,
          "username": "eLs",
          "level": 55,
          "levelPercentage": 0.72247,
          "rank": "WARDEN",
          "playedSeconds": 8172366
        },
        "status": "LEADER",
        "joined": 1508631234,
        "guildCoins": 55000,
        "guildExp": 1123
      },
      ...
    ]
  }
  ~~~
  {: title="Получение по имени" url="/guild/get?name=Fantastic Five" }
---

Искать гильдию можно по её id, названию или тегу. Для этого нужно указать один из следующих параметров.

<h6>Параметры</h6>
id
: получение по id гильдии

name
: получение по названию гильдии

tag
: получение по тегу гильдии

Если гильдия не найдена, то вернется ошибка 12 (Guild not found).
{: .info }

Информация обновляется раз в 10 минут.
{: .info }

<h6>Сомнительные поля в ответе</h6>
totalCoins
: Сумма вложенных в гильдию коинов за все время её существования.

created
: Метка времени Unix Timestamp, когда гильдия была создана.

members > guildCoins
: Количество коинов, которые вложил игрок в гильдию.

members > guildExp
: Количество опыта, которое ушло в гильдию от этого игрока.
