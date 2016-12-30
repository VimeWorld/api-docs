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
    "rank": "ADMIN",
    "playedSeconds": 3106732
  },
  "friends": [
    {
      "id": 105889,
      "username": "rsboe",
      "rank": "BUILDER",
      "playedSeconds": 5508358
    },
    {
      "id": 94245,
      "username": "Okssi",
      "rank": "CHIEF",
      "playedSeconds": 2596550
    },
    {
      "id": 207925,
      "username": "CreedGamingYT",
      "rank": "PLAYER",
      "playedSeconds": 1583493
    },
    {
      "id": 211701,
      "username": "EvilMaster",
      "rank": "WARDEN",
      "playedSeconds": 4646976
    },
    {
      "id": 113654,
      "username": "SmaIK",
      "rank": "ADMIN",
      "playedSeconds": 1300227
    },
    {
      "id": 150997,
      "username": "NextAliska",
      "rank": "HOLY",
      "playedSeconds": 3329600
    },
    {
      "id": 299875,
      "username": "erega3",
      "rank": "YOUTUBE",
      "playedSeconds": 518751
    },
    {
      "id": 1138908,
      "username": "Tw1st1",
      "rank": "PLAYER",
      "playedSeconds": 1489501
    },
    {
      "id": 849186,
      "username": "_NepuTyan_",
      "rank": "YOUTUBE",
      "playedSeconds": 578370
    }
  ]
}
```
