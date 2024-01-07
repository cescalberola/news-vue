<template>
  <header class="navbar">
    <RouterLink to="/" class="nav-link">Home</RouterLink>
    <RouterLink to="/form" class="nav-link">Crear noticia</RouterLink>
    <RouterLink to="/list" class="nav-link">Noticias</RouterLink>
  </header>

  <div class="main-content">

  </div>

  <footer class="footer">
    <p>Este es mi footer</p>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #0b0b0b;
  padding: 20px;
  text-align: center;
  color: white;
}
.nav-link {
  color: white;
  text-decoration: none; /* Elimina el subrayado */
  margin: 0 10px; /* Agrega separación horizontal entre los enlaces */
}

</style>
