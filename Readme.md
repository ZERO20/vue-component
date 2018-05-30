# Creación de un componente con Vue.js

Para crear un componente tenemos que usar la función Vue.component que recibe un string con el nombre de nuestro componente, que será el nombre que tendrá el elemento en el DOM, y un objeto de configuración que contendrá el nombre de las props, el template, datos, métodos, etc...

Para ver el componente en acción, podemos:

- Insertar el componente `<movie-card>` en el HTML dentro del `<div id="app">` dónde tenemos instanciado Vue.

- En lugar de escribir esto en el HTML, podemos utilizar la propiedad template de Vue en el código JavaScript y dejar el index.html únicamente con el `<div id='app'>` sin nada en su interior, ya se encargará Vue de insertarlo.