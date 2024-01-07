<template>
  <h2>Formulario para crear noticias</h2>
  <div class="form-container">
    <form @submit.prevent="crearNoticia" class="modern-form">
      <input type="text" v-model="title" placeholder="Título" class="form-input">
      <p v-if="showError" class="error-message">Por favor, ingresa un título.</p>

      <button type="submit" class="form-button">Crear Noticia</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      showError: false,
    };
  },
  methods: {
    crearNoticia() {
      if (!this.title.trim()) {
        this.showError = true;
        return;
      }

      const nuevaNoticia = {
        title: this.title,
      };
      
      setTimeout(() => {
        this.$router.push('./list');
        this.title = '';
        this.showError = false;
      }, 1000);

      this.$store.dispatch('crearNoticia', nuevaNoticia);
      this.title = ''; 
    }
  }
};
</script>

<style>

.form-container {
  text-align: center;
}

.modern-form {
  display: inline-block;
  padding: 40px;
  background-color: #dfdfdf;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 15px;
  border: 1px solid #ccc;
}

.form-button {
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  background-color: #6d6d6d;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-button:hover {
  background-color: #b6b6b6;
}
</style>
