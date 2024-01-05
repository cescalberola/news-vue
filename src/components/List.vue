<template>
  <div>
    <h2>Noticias</h2>
    <ul>
      <li v-for="noticia in allNoticias" :key="noticia.id">{{ noticia.titulo }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(["allNoticias"])
  },
  created() {
    this.$store.dispatch('fetchNoticias');//actualiza las noticias y me borra las que he creado
  },
  
};
</script>
