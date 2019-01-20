---
title: /misc/token/:token
position: 5.4
type: get
description: Возвращает информацию о токене
right_code: |
  ~~~ json
  {
    "token": "xxx",
    "valid": true,
    "limit": 300,
    "owner": {
      "id": 2113516,
      "username": "ItzRubick",
      "level": 31,
      "levelPercentage": 0.58894,
      "rank": "PLAYER",
      "playedSeconds": 3345895,
      "guild": {
        "id": 5161,
        "name": "Neon",
        "tag": null,
        "color": "&f",
        "level": 6,
        "levelPercentage": 0.97677
      }
    }
  }
  ~~~
  {: title="Валидный токен" url="/misc/token/xxx" }

  ~~~ json
  {
    "token": "notExists",
    "valid": false
  }
  ~~~
  {: title="Несуществующий" url="/misc/token/notExists" }
---

Возвращает информацию о заданном токене с его лимитом и профилем владельца токена.
