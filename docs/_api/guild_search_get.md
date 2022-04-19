---
title: /guild/search
position: 2.1
type: get
description: Ищет гильдии по названию или тегу
right_code: |
  ~~~ json
  [
    {
      "id": 1,
      "name": "Fantastic Five",
      "tag": "F5",
      "color": "&6",
      "level": 30,
      "levelPercentage": 0.66278,
      "avatar_url": "https://mc.vimeworld.com/launcher/guilds/1.jpg"
    },
    {
      "id": 2495,
      "name": "-F5-",
      "tag": null,
      "color": "&f",
      "level": 2,
      "levelPercentage": 0.62691,
      "avatar_url": null
    }
  ]
  ~~~
  {: title="Пример запроса" url="/guild/search?query=f5" }
---

Возвращает список гильдий, название или тег которых содержит заданный запрос. Максимальное количество гильдий в ответе 10.
При сортировке гильдий в ответе учитывается полное совпадение по тегу/названию, уровень и еще пару хитрых штук.

<h6>Параметры</h6>
query
: запрос для поиска (минимум 2 символа)

Индекс гильдий обновляется раз в 10 минут.
{: .info }
