<template>
  <div>
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
          class="no-underline text-white border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
          type="button"
          v-if="role == 'admin'"
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
          class="no-underline text-white border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
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
          <img class="iconDisco" src="../assets/img/decoIconMini.png" />
        </button>
      </div>
    </nav>
    <div
      class="container mx-auto mt-52 flex flex-1 justify-center items-center"
    >
      <div class="w-full max-w-lg">
        <div class="leading-loose">
          <div class="mx-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
            <p class="text-white text-center text-lg font-bold">
              REGISTER
            </p>
            <span class="mt-2 items-center flex justify-center text-red-500">
              {{ msg }}
            </span>
            <div class="">
              <label class="block text-lg text-white font-bold">Pseudo</label>
              <input
                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="text"
                id="pseudo"
                placeholder="Enter your pseudo"
                v-model="user.pseudo"
                required
              />
            </div>
            <div class="mt-3">
              <label class="block text-lg text-white font-bold">Password</label>
              <input
                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="password"
                id="password"
                placeholder="Enter your password"
                v-model="user.password"
                required
              />
            </div>
            <div class="flex items-center justify-center mb-6 mt-3">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio h-5 w-5"
                  name="isAdmin"
                  value="member"
                  v-model="user.isAdmin"
                  required
                /><span class="ml-2 text-white font-bold">Membre</span>
              </label>

              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 ml-10"
                  name="isAdmin"
                  value="admin"
                  v-model="user.isAdmin"
                  required
                /><span class="ml-2 text-white font-bold">Administrateur</span>
              </label>
            </div>

            <div class="mt-4 items-center flex justify-center cursor-pointer">
              <button
                class="px-4 py-1 text-white font-bold tracking-wider bg-gray-900 hover:bg-gray-800 rounded "
                type="submit"
                @click="register"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createUser } from "../utilities/userRequest.js";
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      user: {
        pseudo: "",
        password: "",
        isAdmin: "",
        role: "",
      },
      msg: "",
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

    goToLogin: function() {
      this.$router.push("/Login");
    },

    register() {
      if (
        this.user.pseudo != "" &&
        this.user.password != "" &&
        this.user.isAdmin != ""
      ) {
        createUser(this.user).then((value) => {
          if (value.data == true) {
            this.msg = "✔️Dealer ajoutée !✔️";
          }
        });
      } else {
        this.msg = "❌Champs incorrect !❌";
      }
      setTimeout(
        function() {
          this.msg = "";
        }.bind(this),
        4000
      );
    },

    goToHome() {
      this.$router.push("/home");
    },

    goToPersonnalSale() {
      this.$router.push("/personnalDrugList");
    },

    goToAllSale() {
      this.$router.push("/drugslist");
    },

    goToRegister() {
      this.$router.push("/register");
    },

    goToAllMembers() {
      this.$router.push("/memberList");
    },
  },

  beforeMount() {
    // console.log("🚀 ~ file: Home.vue ~ line 113 ~ beforeMount ~ this.isLogged", this.isLogged)
    if (!this.isLogged) {
      this.$router.push("/login");
    }
    if (this.userData.isAdmin == "member") {
      this.role = "member";
    } else if (this.userData.isAdmin == "admin") {
      this.role = "admin";
    }
  },
};
</script>
