---
title: /guild/get
position: 2.2
type: get
description: Получает информацию о гильдии
right_code: |
  ~~~ json
  {
    "id": 1,
    "name": "Fantastic Five",
    "tag": "-F5-",
    "color": "&6",
    "level": 61,
    "levelPercentage": 0.841909,
    "avatar_url": "https://mc.vimeworld.ru/launcher/guilds/1.jpg",
    "totalExp": 21247241,
    "totalCoins": 93844796,
    "created": 1508631234,
    "web_info": null,
    "perks": {
      "MEMBERS": {
        "name": "Количество членов гильдии",
        "level": 16
      },
      ...
    }
    "members": [
      {
        "user": {
          "id": 176361,
          "username": "eLs",
          "level": 55,
          "levelPercentage": 0.72247,
          "rank": "WARDEN",
          "playedSeconds": 8172366,
          "lastSeen": 1611768354
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
id *
: Получение по id гильдии.

name *
: Получение по названию гильдии.

tag *
: Получение по тегу гильдии.

unsafe
: По умолчанию, все ссылки на картинки в `web_info` проксируются через [https://images.weserv.nl/](https://images.weserv.nl/), чтобы защитить пользователей от логгеров и обойти блокировки различных сайтов (например, картинки из ВКонтакте не будут грузиться у пользователей из Украины). Чтобы отключить проксирование и получить исходные ссылки, можно добавить этот параметр в запрос.

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
