import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    members: [],
    churches: [],
  },
  getters: {},
  actions: {
    async fetchMembers({ commit }, params) {
      try {
        const data = await axios.get("http://localhost/api/members", {
          params: params,
        });

        commit("SET_MEMBERS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchChurches({ commit }, params) {
      try {
        const data = await axios.get("http://localhost/api/churches", {
          params: params,
        });

        commit("SET_CHURCHES", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_MEMBERS(state, members) {
      state.members = members;
    },
    SET_CHURCHES(state, churches) {
      state.churches = churches;
    },
  },
});
