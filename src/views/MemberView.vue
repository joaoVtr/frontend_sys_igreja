<template>
  <div class="container w-3/4 mx-auto">
    <div
      class="space-x-4 w-fit mx-auto bg-blue-100 px-3 py-0.5 mt-4 mb-10 rounded-md"
    >
      <router-link
        class="hover:border-b hover:border-blue-800"
        :class="[$route.meta.exists ?? 'noborder']"
        :to="{ name: 'allmembers' }"
        >Todos os membros</router-link
      >
      <router-link
        class="hover:border-b hover:border-blue-800"
        :to="{ name: 'onemember', params: { id: '1' } }"
        >Criar novo membro</router-link
      >
    </div>
    <router-view :dataTable="membros.data" :headersTable="headersTable" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      membros: [],
      headersTable: {
        name: "Nome",
        cpf: "CPF",
        birthday: "Nascimento",
        email: "E-mail",
        cell_number: "Telefone",
        street_name: "Rua",
        city: "Cidade",
        state: "Estado",
      },
    };
  },
  mounted() {
    this.$store.dispatch("fetchMembers").then(() => {
      this.membros = this.$store.state.members;
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
