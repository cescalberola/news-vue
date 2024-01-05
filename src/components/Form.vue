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
      this.$store.dispatch('crearNoticia', nuevaNoticia);
      this.titulo = '';
    }
  }
};
</script>

