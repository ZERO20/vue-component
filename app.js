/*
 Para crear un componente tenemos que usar la función Vue.component que recibe un string 
 con el nombre de nuestro componente, que será el nombre que tendrá el elemento en el DOM,
 y un objeto de configuración que contendrá el nombre de las props, el template, datos, métodos, etc...
 Se agrega antes de la instancia porque si no vue no lo reconoce.
*/
Vue.component("movie-card", {
    props: ["image", "title"],
    template: `
        <div>
            <img width="100" :src="image" :alt="title" />
            <h2>{{ title }}</h2>
        </div>
    `
});

//Nueva instancia de vue
new Vue({
    el: "#app",
    data: {
        movies: [
            {
                title: "El señor de los anillos 1",
                image:
                "https://k61.kn3.net/taringa/1/9/8/F/6/A/lagarrapatasucia/6F0.jpg"
            },
            {
                title: "Volver al futuro",
                image:
                "https://static.pelisfox.tv/static/movie/cover/original/32a7d654271dfd002814c6303b1703c2.jpg"
            },
            {
                title: "El santo contra las momias de Guanajuato",
                image:
                "https://cafeanimelair2.files.wordpress.com/2017/08/las-momias-de-guanajuato-1.jpg?w=242"
            }
        ]
    },
    //Es posible agregar el contenido html en propiedad template para el renderizado
    /*template: `
        <div>
            <movie-card 
                v-for="(movie, index) in movies" 
                :key="index"
                :title="movie.title"
                :image="movie.image">
            </movie-card>
        </div>
    `*/
});
