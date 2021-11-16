<template>
  <div class="h-screen font-sans background bg-cover">
    <div
      class="container mx-auto h-full flex flex-1 justify-center items-center"
    >
      <div class="w-full max-w-lg">
        <div class="leading-loose">
          <div class="mx-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
            <p class="text-white font-medium text-center text-lg ">
              LOGINE
            </p>
            <p class="text-white -mt-3">
              {{ description }}
            </p>
            <div class="">
              <label class="block text-sm text-white" for="email">pseudo</label>
              <input
                class="
                  w-full
                  px-5
                  py-1
                  text-gray-700
                  bg-gray-300
                  rounded
                  focus:outline-none focus:bg-white
                "
                type="text"
                id="pseudo"
                v-model="user.pseudo"
                placeholder="Enter your pseudo"
                required
              />
            </div>
            <div class="mt-2">
              <label class="block text-sm text-white">password</label>
              <input
                class="
                  w-full
                  px-5
                  py-1
                  text-gray-700
                  bg-gray-300
                  rounded
                  focus:outline-none focus:bg-white
                "
                type="password"
                id="password"
                v-model="user.password"
                placeholder="Enter your password"
                arial-label="password"
                required
              />
            </div>

            <div class="mt-4 items-center flex justify-between font-bold">
              <button
                class="
                  px-4
                  py-1
                  text-white
                  font-light
                  tracking-wider
                  bg-gray-900
                  hover:bg-gray-800
                  rounded
                "
                type="submit"
                @click="login()"
              >
                login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "App",

  data() {
    return {
      user: {
        pseudo: "",
        password: "",
      },
      description: "",
    };
  },
  computed: {
    ...mapGetters(["isLogged"]),
  },
  methods: {
    async login() {
      await this.$store.dispatch("login", this.user);
      if (this.isLogged) {
        this.$router.push("/home")
      } else {
        this.description = "❌ Wrong pseudo or password ❌"
      }
    },

    async logout() {
      await this.$store.dispatch("logout", this.user)
    },
    goToRegister: function() {
      this.$router.push("/Register");
    },
  },
};
</script>
