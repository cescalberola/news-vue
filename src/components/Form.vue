// En el componente Form.vue

<template>
  <form @submit.prevent="crearNoticia">
    <input type="text" v-model="titulo" placeholder="Título">
    <button type="submit">Crear Noticia</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      titulo: '',
    };
  },
  methods: {
    crearNoticia() {
      const nuevaNoticia = {
        titulo: this.titulo,
      };
      const noticias = JSON.parse(localStorage.getItem('noticias')) || [];
      noticias.push(nuevaNoticia);
      localStorage.setItem('noticias', JSON.stringify(noticias));

      this.$router.push('/list');
    }
  }
};
</script>
