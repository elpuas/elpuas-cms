---
path: content/blog
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

Antes de continuar, necesito decir algo. Puedes copiar y pegar estos snippets todo el día y te funcionaran tal como están. Puedes usarlos de prueba y error para hacer que algo funcione, pero hasta que realmente leas la documentación en docker o en docker-compose, probablemente no podrás personalizar y hackear tu propio proceso. Dicho esto, aquí vamos.



Navega a tu carpeta de proyectos de WordPress. Si aún no tienes WordPress descargado, está bien. El contenedor oficial de WordPress lo clonará por ti.
