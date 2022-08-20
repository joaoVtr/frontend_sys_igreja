<template>
  <nav class="space-x-5 mx-auto mt-6 text-center">
    <router-link
      class="font-bold text-2xl hover:border-b hover:border-blue-500"
      to="/"
      >Home</router-link
    >
    <router-link
      class="font-bold text-2xl hover:border-b hover:border-blue-500"
      to="/members"
      >Membros</router-link
    >
    <router-link
      class="font-bold text-2xl hover:border-b hover:border-blue-500"
      to="/churches"
      >Igrejas</router-link
    >
  </nav>
  <router-view class="container mx-auto text-center" />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
nav a.router-link-active {
  color: rgba(26, 60, 201, 0.8);
}
</style>
