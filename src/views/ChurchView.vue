<template>
  <div class="container w-3/4 mx-auto">
    <div
      class="space-x-4 w-fit mx-auto bg-blue-100 px-3 py-0.5 mt-4 mb-10 rounded-md"
    >
      <router-link
        class="hover:border-b hover:border-blue-800"
        :class="[$route.meta.exists ?? 'noborder']"
        :to="{ name: 'allchurches' }"
        >Todas as igrejas</router-link
      >
      <router-link
        class="hover:border-b hover:border-blue-800"
        :to="{ name: 'onechurche', params: { id: '1' } }"
        >Criar novo membro</router-link
      >
    </div>
    <router-view :dataTable="churches.data" :headersTable="headersTable" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      churches: [],
      headersTable: {
        name: "Nome",
        address: "Endereço",
        website: "Site",
        Picture: "Foto",
      },
    };
  },
  mounted() {
    this.$store.dispatch("fetchChurches").then(() => {
      this.churches = this.$store.state.churches;
    });
  },
};
</script>

<style>
div a.router-link-exact-active,
.router-link-active {
  border-bottom: 1px solid blue;
}
.noborder {
  border: none;
}
</style>
