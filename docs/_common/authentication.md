---
title: Авторизация
position: 2
right_code: |
  ~~~ php?start_inline=true
  $curl = curl_init("http://api.vime.world/misc/online");
  curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 4);
  curl_setopt($curl, CURLOPT_HTTPHEADER, array(
    'Access-Token: MY_TOKEN'
  ));
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  
  $response = curl_exec($curl);
  curl_close($curl);
  
  print $response;
  ~~~
  {: title="PHP cURL" }
---
---

Для получения токена необходимо зайти на сервер MiniGames и написать команду `/api`. Вам будет выдана ссылка на страницу, где будет написан ваш токен и информация о нем.
Чтобы выполнять запросы с токеном, необходимо добавить его в параметры запроса, например:
```
http://api.vime.world/misc/online?token=MY_TOKEN
```
Либо добавить в запрос заголовок Access-Token:
```
Access-Token: MY_TOKEN
```

#### Лимит на количество запросов
При использовании API без токена авторизации, вы можете делать не более `60` запросов в минуту с одного IP. С использованием токена лимит запросов в минуту увеличивается до `300`. Если вам все равно этого мало, можете написать сюда [https://vk.com/xtrafrancyz](https://vk.com/xtrafrancyz) и договориться о персональном лимите.

Вы можете посмотреть в заголовки<small>(headers)</small> любого запроса, чтобы узнать текущий статус ограничения:

``` d
X-RateLimit-Limit: 60 // количество возможных запросов в минуту
X-RateLimit-Remaining: 59 // количество оставшихся запросов
X-RateLimit-Reset: 1481809432 // Unix TimeStamp, когда лимит будет сброшен, часовой пояс - GMT+0
```
