<template>
  <div>
    <h2>Noticias</h2>
    <ul>
      <li v-for="noticia in allNoticias" :key="noticia.id">{{ noticia.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(["noticias", "noticiasLocalStorage", "allNoticias"])
  },
  created() {
    this.$store.dispatch('fetchNoticias');
  },
  
};
</script>
