Template not autarization

dependencies  
-express  
-mongoose  
-express-handlebars

```plantuml
@startuml

!define MONGODB_VERSION 6.5.0
!define EXPRESS_VERSION 4.17.1
!define HANDLEBARS_VERSION 5.3.2

left to right direction

package "Project" {
[Route] ..> [Controllers]
    [Controllers] ..> [Models]
    [Controllers] ..> [Views]
}

package "dependencies" {
    [Express EXPRESS_VERSION] as express
    [Express Handlebars HANDLEBARS_VERSION] as handlebars
    [Mongoose MONGODB_VERSION] as mongoose
}


express - [Route]: Uses
mongoose - [Models]: Uses
handlebars - [Views]: Uses

@enduml
```

```
project
|-app
|	|-router
|	|	|-BlogRoute.js
|	|-controllers
|	|	|-PostController.js
|	|-\models
|		|-PostModel.js
|
|-views
|	|-layouts
|	|	|-main.hbs
|	|-partials
|	|	|-header.hbs
|	|	|-footer.hbs
|	|-blog.hbs
|
|-index.js
|-package.json
```
