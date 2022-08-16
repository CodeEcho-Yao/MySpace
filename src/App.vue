<template>
  <NavBar />
  <router-view/>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import NavBar from './components/NavBar';

export default {
  name: "APP",
  components: {
    NavBar,
}
}
</script>

<style>
</style>
