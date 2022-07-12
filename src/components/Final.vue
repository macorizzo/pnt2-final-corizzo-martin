<template>

  <section class="src-components-final">
    <h1>Final Corizzo Martin PNT2 YA-21F</h1>

    <div>
      Color texto: <input type="text" v-model="color">
      Color Fondo: <input type="text" v-model="fondo"> 
      Tamaño (agregar px) : <input type="text" v-model="size">
      <hr>
      <p> Texto: <input :style="{color: color,background: fondo, fontSize: size}" type="text" v-model.trim="texto"> </p>
      <p> Cantidad de Palabras: {{ contarPalabras }} </p>
    </div>

    <table>
      <thead>
        <tr>  
          <th>Preguntas | </th>
          <th> Respuestas </th>
        </tr>
      </thead>
      <hr>
      <tbody>
        <tr>  
          <td> 1 </td>
          <td> B </td>
        </tr>
        <hr>
         <tr>  
          <td> 2 </td>
          <td> C </td>
        </tr>
        <hr>
        <tr>  
          <td> 3 </td>
          <td> B </td>
        </tr>
        <hr>
        <tr>  
          <td> 4 </td>
          <td> D </td>
        </tr>
        <hr>
        <tr>  
          <td> 5 </td>
          <td> D </td>
        </tr>
      </tbody>

    </table>

  </section>

</template>

<script >
  export default  {
    name: 'src-components-final',
    props: [],
    mounted () {
    },
    data () {
      return {
        color: "",
        fondo: "",
        size: "",
        texto: ""
      }
    },
    methods: {
    },
    computed: {
      contarPalabras() {
      let cantPalabras = 0
        if( this.texto !== "") {
          const palabras = this.texto.split(" ");
          cantPalabras = palabras.length;
        }
      return cantPalabras;
      }
    }
}
</script>

<style scoped lang="css">
  .src-components-final {
  }
 
</style>