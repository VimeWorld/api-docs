[← Вернуться к списку методов](../README.md#Список-методов)

Метод `user/{id}/friends`
========================
Возвращает список друзей игрока.

Если игрок с заданным id не найден, то сервер вернет ошибку 10 (Invalid user id).

## Параметры
* `{id}` - id игрока

## Пример
http://api.vime.world/user/134568/friends
```json
{
  "user": {
    "id": 134568,
    "username": "xtrafrancyz",
    "level": 5,
    "rank": "ADMIN",
    "playedSeconds": 3106732
  },
  "friends": [
    {
      "id": 105889,
      "username": "rsboe",
      "level": 8,
      "rank": "BUILDER",
      "playedSeconds": 5508358
    },
    {
      "id": 94245,
      "username": "Okssi",
      "level": 10,
      "rank": "CHIEF",
      "playedSeconds": 2596550
    },
    {
      "id": 207925,
      "username": "CreedGamingYT",
      "level": 11,
      "rank": "PLAYER",
      "playedSeconds": 1583493
    },
    {
      "id": 211701,
      "username": "EvilMaster",
      "level": 10,
      "rank": "WARDEN",
      "playedSeconds": 4646976
    },
    {
      "id": 113654,
      "username": "SmaIK",
      "level": 3,
      "rank": "ADMIN",
      "playedSeconds": 1300227
    },
    {
      "id": 150997,
      "username": "NextAliska",
      "level": 11,
      "rank": "HOLY",
      "playedSeconds": 3329600
    },
    {
      "id": 299875,
      "username": "erega3",
      "level": 7,
      "rank": "YOUTUBE",
      "playedSeconds": 518751
    },
    {
      "id": 1138908,
      "username": "Tw1st1",
      "level": 4,
      "rank": "PLAYER",
      "playedSeconds": 1489501
    },
    {
      "id": 849186,
      "username": "_NepuTyan_",
      "level": 3,
      "rank": "YOUTUBE",
      "playedSeconds": 578370
    }
  ]
}
```
