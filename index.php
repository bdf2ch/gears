<?php

    /* Подключение библиотек */
    include "platform/libs/server/xtemplate/xtemplate.class.php";

    //setcookie("user_id", 1);
    /* Проверка, авторизован ли пользователь */
    if (isset($_COOKIE["user_id"])) {
        $template = new XTemplate("platform/templates/server/application.html");
    } else {
        $template = new XTemplate("platform/templates/server/authorization.html");
    }

    /* Парсинг и вывод шаблона */
    $template -> parse("main");
    $template -> out("main");

?>