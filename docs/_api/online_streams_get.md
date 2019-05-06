---
title: /online/streams
position: 4.2
type: get
description: Список стримов, которые в данный момент идут на сервере
right_code: |
  ~~~ json
  [
    {
      "title": "Стрим на VimeWorld.ru",
      "owner": "Okssi",
      "viewers": 95,
      "url": "https://youtu.be/dQw4w9WgXcQ",
      "duration": 6435,
      "platform": "YouTube",
      "user": {
        "id": 94245,
        "username": "Okssi",
        "level": 32,
        "levelPercentage": 0.894,
        "rank": "CHIEF",
        "playedSeconds": 5366612,
        "lastSeen": 1557003946,
        "guild": null
      }
    },
    {
      "title": "Играю с подписчиками на VimeWorld",
      "owner": "xtrafrancyz",
      "viewers": 500,
      "url": "https://youtu.be/dQw4w9WgXcQ",
      "duration": 4686,
      "platform": "YouTube",
      "user": {
        "id": 134568,
        "username": "xtrafrancyz",
        "level": 5,
        "levelPercentage": 0.894,
        "rank": "ADMIN",
        "playedSeconds": 3106732,
        "lastSeen": -1,
        "guild": null
      }
    }
  ]
  ~~~
  {: title="Пример запроса" url="/online/streams" }
---

Возвращает список активных стримов на сервере. Этот список идентичен тому, что показывается на сервере MiniGames в меню по команде `/streams`.

Информация обновляется раз в 10 сек.
{: .info }

<h6>Ответ</h6>
title
: Заголовок стрима. Может содержать символы юникода.

owner
: Ник ютубера, который добавил (ведет) стрим.

viewers
: Количество зрителей стрима.

duration
: Длительность стрима в секундах (время с начала стрима).

platform
: Платформа, на которой идет стрим. Поддерживается [YouTube](https://youtube.com), [ВКонтакте](https://vk.com), [Twitch](https://twitch.tv), [GoodGame](https://goodgame.ru).
