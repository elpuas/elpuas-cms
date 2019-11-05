---
path: content/blog/wordpress-docker
date: 2019-11-05T21:21:58.793Z
title: WordPress en Docker
description: >-
  Las herramientas para desarrollar sitios de WordPress localmente ha cambiado
  con los años. Primero,  WAMP,  XAMP,  Bitnami, hasta que hice un presupuesto
  para una Mac y encontré MAMP, mas adelante con  LOCALbyFlywheel y ¡Entonces
  vino Vagrant!  Cuando llegó Docker, rápidamente lo agarré por las riendas y
  probé la mierda en todo tipo de casos, me parecio rapido, facil de usar y
  sobretodo liviano.
---
¿Qué es Docker?

Docker es un tipo de virtualización que es más rápida y ligera que otras máquinas virtuales gracias a un acercamiento diferente hacia la infraestructura. Si lo comparamos con una máquina virtual estándar que puede tardar unos minutos en comenzar, Docker se puede iniciar en solo unos segundos. Además, puede ejecutar fácilmente docenas de contenedores en una sola PC, que de lo contrario no podrían lanzar más de 5 máquinas virtuales.



¿Qué significa en la práctica?

Para ejecutar WordPress localmente, no necesitas Apache, el servidor MySQL, XAMPP, Wamp y MAMP. Todo lo que necesitas es Docker: la instalación en sí demora unos segundos y no se requiere ninguna configuración adicional



No importa si se trata de una PC dev, un servidor stage o un servidor LIVE y el sistema operativo que sea, Docker funciona igual en todas partes. Esto significa que no tendrás que buscar errores que, por ejemplo, aparezcan en el servidor LIVE y no puedan reproducirse localmente.



Docker, es casi nativo para cada plataforma y muchos de los problemas han sido resueltos.



Vamos a entrar en detalles … pero primero, asegúrate de tener Docker instalado



Docker

Configurar docker-compose

Antes de continuar, necesito decir algo. Puedes copiar y pegar estos snippets todo el día y te funcionaran tal como estan. Puedes usarlos de prueba y error para hacer que algo funcione, pero hasta que realmente leas la documentación en docker o en docker-compose, probablemente no podrás personalizar y hackear tu propio proceso. Dicho esto, aquí vamos.



Navega a tu carpeta de proyectos de WordPress. Si aún no tienes WordPress descargado, está bien. El contenedor oficial de WordPress lo clonará por ti.



Crea un archivo llamado docker-compose.yml



$ mkdir wordpress-site && cd wordpress-site

$ touch docker-compose.yml

Agrega el snippet a docker-compose.yml



`version: '3.3'`

``

`services:`

`   db:`

`     image: mysql:5.7`

`     volumes:`

`       - db_data:/var/lib/mysql`

`     restart: always`

`     environment:`

`       MYSQL_ROOT_PASSWORD: somewordpress`

`       MYSQL_DATABASE: wordpress`

`       MYSQL_USER: wordpress`

`       MYSQL_PASSWORD: wordpress`

``

`   wordpress:`

`     depends_on:`

`       - db`

`     image: wordpress:latest`

`     ports:`

`       - "8000:80"`

`     restart: always`

`     environment:`

`       WORDPRESS_DB_HOST: db:3306`

`       WORDPRESS_DB_USER: wordpress`

`       WORDPRESS_DB_PASSWORD: wordpress`

`volumes:`

`    db_data: {}`

Corramos Docker

Ahora, ejecuta docker-compose up -d desde el directorio de tu proyecto.



Esto ejecuta la función docker-compose en modo separado, extrae las imágenes de Docker necesarias e inicia los contenedores de wordpress y base de datos.



Abre tu browser y navega a http://localhost:8000 ya tienes una copia limpia de WordPress… Asi de Facil!



Para saber mas  sobre todo lo que puedes hacer con Docker visita la página oficial.



Qué más podemos hacer con Docker?

Docker

Cuando desarrolló temas,  tengo mi directorio wp-content, en mi copia local, ( acorde al ejemplo en wordpress-site ) asi tengo mis plugins y temas localmente para trabajar. Para lograr esto nada mas agrega docker-compose.yml



wordpress:

\    depends_on:

\- db

\    image: wordpress:latest

volumes:

\-"./wp-content:/var/www/html/wp-content"

Le indicamos a Docker que el directorio wp-content es el que que esta local, haz la prueba!



Si en algún momento quieres detener o darle un restart a tu container, simplemente corre en la terminal:



// Lo Detiene

$ docker-compose stop

// Lo Reinicia

$ docker-compose up -d

Para borrar el container corre el comando: docker-compose down esto remueve el container y el network por defecto, pero preserva la base de datos de WordPress.



El Comando docker-compose down --volumes  remueve el container, el network por defecto, y la base de datos de WordPress.



Para conectarte al contenedor virtual corre docker exec -it <mycontainer> bash donde <mycontainer> es el nombre de tu container, para saber cual es el nombre de tu container usa el comando docker ps.



El comando cp se puede utilizar para copiar archivos. Un archivo específico se puede copiar como: docker cp foo.txt mycontainer: /foo.txt o viseversa docker cp mycontainer: /foo.txt foo.txt



Para enfatizar, mycontainer es una ID de contenedor, no una ID de imagen.



Ahora puedes continuar y realizar cambios en tus contenedores, en tus temas  y plugins, copiar archivos y demás, instalando plugins y cambiando temas, y todo eso desde un archivo docker-compose .



Si te gusto este post o crees que puede ayudar a alguien como tu, por favor compartelo! escribeme y hazme saber tus comentarios. 



Post navigation
