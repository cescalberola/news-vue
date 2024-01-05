// En el componente ListNews.vue

<template>
  <div>
    <h2>Noticias</h2>
    <ul>
      <li v-for="noticia in noticias" :key="noticia.id">{{ noticia.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      noticias: []
    };
  },
  created() {
    axios.get('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=y1sMylD8zd4XCBNCf1sSf932UGJGflsp', {
    })
    .then(response => {
      this.noticias = response.data.results;
    })
    .catch(error => {
      console.error('Error al obtener noticias', error);
    });
  }
};
</script>
