<template>
  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-200">
        <tr>
          <th
            v-for="val in headersTable"
            :key="val.cpf"
            scope="col"
            class="py-3 px-6 text-center"
          >
            {{ val }}
          </th>

          <th scope="col" class="py-3 px-6">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody v-for="datas in dataTable" :key="datas.id">
        <tr class="bg-gray-50 text-center hover:bg-gray-100">
          <td
            class="py-4 px-6 text-center"
            v-for="data_key in tableKeys"
            :key="data_key"
          >
            {{ datas[data_key] }}
          </td>

          <td class="py-4 px-6 text-right">
            <a href="#" class="font-medium text-blue-600 hover:underline"
              >Edit</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    dataTable: Array,
    headersTable: Object,
  },

  data() {
    return {
      tableKeys: "",
    };
  },

  mounted() {
    this.tableKeys = Object.keys(this.headersTable);
    console.log(this.dataTable);
  },
};
</script>
