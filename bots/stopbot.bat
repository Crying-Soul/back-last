@REM #!/bin/bash

@REM # Получаем имя хоста Ubuntu
@REM server=$(hostname)

@REM # Получаем название запущенного sh скрипта
@REM command=$(basename "$0")

@REM # Получаем параметры, с которыми вызывается sh скрипт
@REM param="$@"

@REM # Формируем URL
@REM url="https://script.google.com/macros/s/AKfycbzO0inN18EqbMsNDUUJD3XwflCQbo1lpdGC-YmvLDoqIprUAW2pqKimEPVfSwkh6lDoDw/exec?server=$server&command=$command&param=$param"

@REM # Используем wget для отправки данных по URL
@REM wget "$url"
echo CREATE BOT SUCCESS