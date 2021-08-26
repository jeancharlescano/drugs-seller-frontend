<template>
  <div >
    <nav class="px-8 pt-2 shadow-md">
      <div class="-mb-px flex justify-center">
        <button
          class="no-underline text-white border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
          type="button"
          @click="goToHome"
        >
          Home
        </button>
        <button
          class="no-underline text-white border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
          type="button"
          v-if="role == 'admin'"
          @click="goToRegister"
        >
          Register
        </button>
        <button
          class="no-underline text-white border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
          type="button"
          v-if="role == 'admin'"
          @click="goToAllMembers"
        >
          Members
        </button>
        <button
          class="no-underline text-white border-b-2 border-teal-darkt uppercase tracking-wide font-bold text-xs py-3 mr-8"
          type="button"
          v-if="role == 'admin'"
          @click="goToAllSale"
        >
          Sales
        </button>
        <button
          class="no-underline text-white border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
          type="button"
          @click="goToPersonnalSale"
        >
          My Sales
        </button>
        <button
          class="no-underline text-white border-b-2 border-transparent uppercase tracking-wide font-light text-xs py-3"
          type="button"
          @click="logout"
        >
          <img class="iconDisco" src="../assets/img/decoIconMini.png"/>
        </button>
      </div>
    </nav>
    <div class="flex flex-col container mx-auto my-10">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-500 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-800 bg-opacity-80">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Quantité
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Prix
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Vendeur
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr 
                class="bg-gray-500 bg-opacity-80" 
                v-for="(drug, index) in drugs" 
                :key="index">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white"
                  >
                    {{ drug.nom_drugs }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {{ drug.quantity_drugs }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {{ drug.argent_drugs }} $
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {{ convertIdToUser(drug.fk_members_drugs) }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {{  }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllDrug } from "../utilities/drugRequest.js";
import { getAllMembers } from "../utilities/userRequest.js";
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      drugs: [],
      allUser: [],
    };
  },

  computed: {
    ...mapGetters(["isLogged", "userData"]),
  },

  methods: {

    async logout() {
      await this.$store.dispatch("logout", this.user);
      this.$router.push("/");
    },

    convertIdToUser(id) {
      const user = this.allUser.find((element) => element.id_members == id);
      return user.pseudo_members;
    },

    goToHome() {
      this.$router.push("/home");
    },

    goToPersonnalSale() {
      this.$router.push("/personnalDrugList");
    },

    goToRegister() {
      this.$router.push("/register");
    },

    goToAllMembers() {
      this.$router.push("/memberList");
    },
    
  },

  async beforeMount() {
    if (!this.isLogged) {
      this.$router.push("/login");
    }

    if (this.userData.isAdmin == "member") {
      this.role = "member";
    } else if (this.userData.isAdmin == "admin") {
      this.role = "admin";
    }

    await getAllMembers().then((value) => {
      this.allUser = value.data;
    });

    await getAllDrug().then((value) => {
      console.log("value : ", value);
      this.drugs = value.data;
    });
  },
};
</script>
