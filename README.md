# Proyecto Redis Cache API

Este proyecto utiliza Express.js para crear una API que almacena en cach� datos del API de Rick and Morty utilizando Redis.

## Requisitos

- Node.js
- Redis

## Instalaci�n

1. **Clonar el Repositorio**
   ```bash
   git clone git@github.com:davidatb/redis-node.git

2. **Navegar al Directorio del Proyecto**
cd redis-node

3. **Navegar al Directorio del Proyecto**
   npm install

4. **Aseg�rate de que Redis est� en Ejecuci�n**

Si no tienes Redis instalado, puedes hacerlo siguiendo las instrucciones de la documentaci�n oficial de Redis.

Ejecuci�n
Iniciar la Aplicaci�n

node index.js

Si todo est� configurado correctamente, ver�s el mensaje: Server is running on port 3000.

Uso de redis-commander
redis-commander es una herramienta web para administrar Redis. Con ella, puedes ver y manipular tus datos en Redis de manera gr�fica.

Instalaci�n de redis-commander
Si a�n no lo tienes instalado:

Instalar redis-commander Globalmente

npm install -g redis-commander

Uso
Lanzar redis-commander

redis-commander


Visitar en el Navegador

Abre tu navegador y accede a http://localhost:8081. Aqu� podr�s administrar tu instancia de Redis.

Endpoints de la API
Obtener Todos los Personajes

M�todo: GET
Endpoint: /character
Obtener un Personaje por ID

M�todo: GET
Endpoint: /character/:id
Esperamos que disfrutes utilizando esta API. �Cualquier feedback es bienvenido y apreciado!

