[← Вернуться к списку методов](../README.md#Список-методов)

Метод `misc/games`
==================
Возвращает список всех игр, которые поддерживаются API. 

## Пример
http://api.vime.world/misc/games
```json
{
  "SW": {
    "name": "SkyWars",
    "stats": [
      "kills",
      "games",
      "wins"
    ]
  },
  "BW": {
    "name": "BedWars",
    "stats": [
      "kills",
      "games",
      "wins",
      "deaths",
      "bedBreaked"
    ]
  },
  "HG": {
    "name": "HungerGames",
    "stats": [
      "kills",
      "games",
      "wins"
    ]
  },
  ...
}
```

## Непонятные вещи в ответе сервера
В поле `stats` записаны возможные значения статистики по этой игре, которые отдаются методом [user/{id}/stats](../user/stats.md).
