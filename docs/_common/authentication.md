---
title: Авторизация
position: 2
right_code: |
  ~~~ php?start_inline=true
  $curl = curl_init("https://api.vime.world/online");
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

Для получения токена разработчика, необходимо зайти на сервер MiniGames и написать команду `/api dev`. Вам будет выдана ссылка на страницу, где будет написан ваш токен и информация о нем.
Чтобы выполнять запросы с токеном, необходимо добавить его в параметры запроса, например:
```
https://api.vime.world/online?token=MY_TOKEN
```
Либо добавить в запрос заголовок Access-Token:
```d
Access-Token: MY_TOKEN
```

#### Лимит на количество запросов
При использовании API без токена разработчика, вы можете делать не более `60` запросов в минуту с одного IP. С использованием токена разработчика, лимит запросов в минуту увеличивается до `300`. Если вам все равно этого мало, можете написать на почту [me@xtrafrancyz.net](mailto:me@xtrafrancyz.net) и договориться о персональном лимите.

Вы можете посмотреть в заголовки<small>(headers)</small> любого запроса, чтобы узнать текущий статус ограничения:

``` d
X-RateLimit-Limit: 60 // количество возможных запросов в минуту
X-RateLimit-Remaining: 59 // количество оставшихся запросов
X-RateLimit-Reset-After: 16 // количество секунд, через которое лимит будет сброшен
```
