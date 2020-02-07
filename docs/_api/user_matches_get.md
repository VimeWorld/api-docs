---
title: /user/:id/matches
position: 1.8
type: get
description: Получает последние матчи игрока
right_code: |
  ~~~ json
  {
    "user": {
      "id": 4167839,
      "username": "FLASH_Free_STAYk",
      "level": 3,
      "levelPercentage": 0.73158,
      "rank": "PLAYER",
      "playedSeconds": 16435,
      "lastSeen": 1559036750,
      "guild": null
    },
    "request": {
      "count": 20,
      "offset": 0,
      "size": 1
    },
    "matches": [
      {
        "id": "53421537142767616",
        "game": "DUELS",
        "map": {
          "id": "Nevermor",
          "name": "Невермор",
          "teams": 2,
          "playersInTeam": 1
        },
        "date": 1559037486,
        "duration": 70,
        "players": 2,
        "win": true,
        "state": 1
      },
      ...
    }
  ~~~
  {: title="Пример запроса" url="/user/4167839/matches" }
---

<h6>Параметры</h6>
id
: id игрока.

Возвращает список последних матчей игрока. Чуть более подробное описание можете посмотреть в методе [match/latest](#apimatch_latest_get).

Подробную информацию о конкретном матче можно получить с помощью метода [match/:id](#apimatch_get).

<h6>Дополнительные параметры</h6>
count
: Количество записей, которые вернет сервер. По умолчанию - 20, максимально - 50.

offset
: Количество пропущенных от начала записей. По умолчанию - 0, максимально - 2000.

Если игрок с заданным id не найден, то вернется ошибка 10 (Invalid user id).
{: .info }

<h6>Ответ</h6>
matches > state
: Результат игры. 0 - поражение, 1 - победа, 2 - ничья.

matches > win
: Результат игры, который остался для совместимости со старыми клиентами.
