[← Вернуться к списку методов](../README.md#Список-методов)

Метод `user/{id}/stats`
========================
Возвращает статистику всех игр, в которые играл запрашиваемый игрок. Список игр и их возможные значения статистики можно узнать с помощью метода [misc/games](../misc/games.md)

Если игрок с заданным id не найден, то сервер вернет ошибку 10 (Invalid user id).

## Параметры
* `{id}` - id игрока

## Пример
http://api.vime.world/user/134568/stats
```json
{
  "userid": 134568,
  "username": "xtrafrancyz",
  "stats": {
    "SkyWars": {
      "kills": 25,
      "wins": 2,
      "games": 39
    },
    "BedWars": {
      "kills": 63,
      "wins": 2,
      "games": 10,
      "deaths": 97,
      "bedBreaked": 3
    },
    "GunGame": {
      "kills": 1793,
      "wins": 31,
      "levels": 448
    },
    "Annihilation": {
      "kills": 1835,
      "nexus": 300,
      "ores": 970,
      "bowkills": 93,
      "digged": 98,
      "wood": 260
    },
    "BuildBattle": {
      "wins": 10,
      "games": 18
    },
    "HungerGames": {
      "kills": 366,
      "wins": 29,
      "games": 131
    },
    "BlockParty": {
      "wins": 25,
      "games": 160,
      "levels": 806
    },
    "MobWars": {
      "wins": 18,
      "maxIncome": 571494,
      "mobsKilled": 1530,
      "games": 27,
      "mobsSended": 3800
    }
  }
}
```
