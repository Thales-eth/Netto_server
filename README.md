# Netto: Una aplicación de fotos creada usando el Stack MERN

Netto es una red social de otakus y creadores de contenido. 

# API desplegada

La API desplegada puede encontrarse en el enlace: "#####"
Todas las rutas descritas en el apartado "Rutas de la aplicación" son endpoints válidos contra esta url. Así, por ejemplo "#####" ... 

La aplicación completa desplegada se puede encontrar en el siguiente enlace: "####"

# Variables de Entorno

Si el proyecto quiere correrse en local, deberá crearse un archivo .env en el directorio raíz. 

Dicho archivo deberá comprender todas estas variables de entorno:

1. PORT
2. MONGODB_URI
3. ORIGIN
4. CLOUDINARY_NAME
5. CLOUDINARY_KEY
6. CLOUDINARY_SECRET
7. TOKEN_SECRET
8. SALT

Para instalar todas las dependencias utilizadas en el proyecto, simplemente se ha de ejecutar el comando:
```
npm install
```

# Colección Postman

En el directorio raíz del proyecto se encontrará una json denominado "####". A lo largo del desarrollo de este proyecto se usa Postman para testear nuestra api. Se puede importar este archivo directamente como una colección en Postman para visualizar todo el trabajo de testeo. Las peticiones están organizadas por carpetas según las correspondientes rutas. De cada petición se incluyen distintos ejemplos de respuestas y manejos de errores.

# Rutas de la aplicación

## **User routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/users/list             | GET               | [users]                           | Get all users from the DB     |

## **Post routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/posts/trends         | GET               | [posts]                           | Get most popular posts from the app     |
| /api/posts/details/:id         | GET               | {post}                         | Get one particular post from     |
| /api/posts/relevant         | GET               | [posts]                         | Get most relevant posts from the app     |
| /api/posts/following         | GET               | [posts]                         | Get posts from people I follow     |
| /api/posts/details/:id         | GET               | {post}                         | Get one particular post from     |
| /api/posts/create        | POST               | {post}                         | Create a Post     |
| /api/posts/edit/:id        | PUT               | {post}                         | Edit a Post     |
| /api/posts/delete/:id        | DELETE               | {msg: "you deleted your post!"}                         | Delete a Post     |

## **Comment routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/comments/list         | GET               | [comments]                           | Get all comments from one Photo Post     |

## **Auth routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/auth/signup            | POST              | {message: 'New User created!'}    | Create a new user             |
| /api/auth/login             | POST              | `Token`    | Log user in             |