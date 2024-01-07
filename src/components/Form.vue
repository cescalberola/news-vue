<template>
  <form @submit.prevent="crearNoticia">
    <input type="text" v-model="title" placeholder="Título">

    <button type="submit">Crear Noticia</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',

    };
  },
  methods: {
    crearNoticia() {
      const nuevaNoticia = {
        title: this.title,

      };
      this.$store.dispatch('crearNoticia', nuevaNoticia);
      this.title = '';
    }
  }
};
</script>

