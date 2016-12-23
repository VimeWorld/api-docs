[← Вернуться к списку методов](../README.md#Список-методов)

Метод `misc/onlineStreams`
==========================
Возвращает список активных стримов на сервере. Этот список идентичен тому, что показывается на сервере MiniGames в меню по команде `/streams`.

Информация обновляется раз в 10 сек.

Иногда, в редких случаях, метод может возвращать ошибку 4 (The method is currently offline). Она возникает если сервер MiniGames выключен или при неполадках в системе.

## Пример
http://api.vime.world/misc/onlineStreams
```json
[
  {
    "title": "Стрим на VimeWorld.ru",
    "owner": "iAmTopStreamer",
    "viewers": 95,
    "url": "https://youtu.be/dQw4w9WgXcQ",
    "duration": 6435,
    "platform": "YouTube"
  },
  {
    "title": "Играю с подписчиками на VimeWorld",
    "owner": "Best_YT",
    "viewers": 500,
    "url": "https://youtu.be/dQw4w9WgXcQ",
    "duration": 4686,
    "platform": "YouTube"
  }
]
```

## Непонятные вещи в ответе сервера
* `owner` - Ник ютубера, который добавил (ведет) стрим
* `viewers` - Количество зрителей стрима
* `duration` - Длительность стрима в секундах (время с начала стрима)
* `platform` - Платформа, на которой идет стрим. Поддерживается [YouTube](https://youtube.com), [Twitch](https://twitch.tv), [GoodGame](https://goodgame.ru)
