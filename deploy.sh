#!/bin/bash

gulp build
rsync --verbose -r dist/* nitrino@46.17.40.71:/usr/share/nginx/html/ex-aviasales.ru 
