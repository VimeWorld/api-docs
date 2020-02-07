---
title: /user/:id/achievements
position: 1.6
type: get
description: Получает достижения игрока
right_code: |
  ~~~ json
  {
    "user": {
      "id": 134568,
      "username": "xtrafrancyz",
      "level": 5,
      "levelPercentage": 0.894,
      "rank": "ADMIN",
      "playedSeconds": 3106732,
      "guild": null
    },
    "achievements": [
      {
        "id": 1,
        "time": 1454112020
      },
      {
        "id": 2,
        "time": 1454112020
      },
      {
        "id": 3,
        "time": 1454118435
      },
      {
        "id": 4,
        "time": 1454164310
      },
      {
        "id": 8,
        "time": 1454117329
      }
    ]
  }
  ~~~
  {: title="Пример запроса" url="/user/134568/achievements" }
---

<h6>Параметры</h6>
id
: id игрока.

Возвращает список всех достижений игрока. Список всех возможных достижений можно узнать с помощью метода [misc/achievements](#apimisc_achievements_get).

Метод может вернуть id достижений, которых нет в списке всех достижений. Это секретные достижения, их id находится в промежутке от 9000 до 9100.
{: .info }

Если игрок с заданным id не найден, то вернется ошибка 10 (Invalid user id).
{: .info }

<h6>Ответ</h6>
id
: id достижения из списка всех достижений.

time
: Метка времени Unix Timestamp, когда игрок получил достижение.
