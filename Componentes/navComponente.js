app.component('nav-blog',{
    template:
    /*html*/

    `  <nav class="nav">
        <img class="nav_foto" src="./Imagenes/imagen.png" alt="Imagen de globo">
        <form class="nav_for">
        <input class="nav_input" type="text" id="inputUsuario" placeholder="Ingresar usuario..." @keyup="keyup" v-model="nombreUsuario"> 
        </form>
        </nav>
    `,
    props: ['usuario'], 
    data(){
        return{
            nombreUsuario:""
        }
    },
    watch: {
      usuario(nuevoValor){
        this.nombreUsuario = nuevoValor
      }
    },
    methods:{
        keyup(){
        this.$emit('actualizar-nombre', this.nombreUsuario)},
        
    }
})
