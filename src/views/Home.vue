<template>
  <div>
    <nav class="px-8 pt-2 shadow-md">
      <div class="-mb-px flex justify-center">
        <button
          class="no-underline text-white border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
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
      class="container mx-auto mt-40 flex flex-1 justify-center items-center"
    >
      <div class="w-full max-w-lg">
        <div class="leading-loose">
          <div class="mx-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
            <p class="text-white text-center text-lg font-bold">
              SALE
            </p>
            <span class="mt-2 items-center flex justify-center text-red-500">
              {{ errorMsg }}
            </span>
            <span class="mt-2 items-center flex justify-center text-green-500">
              {{ doneMsg }}
            </span>
            <!-- <div class="">
              <label class="block text-lg text-white font-bold"
                >Drugs Type</label
              >
              <input
                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="text"
                id="drugsType"
                placeholder="Enter type of drugs"
                v-model="drug.drugsType"
                required
              />
            </div> -->
            <div class="flex items-center justify-center mt-2">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio h-5 w-5"
                  name="typeOfDrug"
                  value="Weed"
                  v-model="drug.drugsType"
                  required
                /><span class="ml-2 text-white font-bold">Weed</span>
              </label>

              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 ml-10"
                  name="typeOfDrug"
                  value="Cocaïne"
                  v-model="drug.drugsType"
                  required
                /><span class="ml-2 text-white font-bold">Cocaïne</span>
              </label>
            </div>
            <div class="mt-3">
              <label class="block text-lg text-white font-bold">Quantity</label>
              <input
                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="number"
                placeholder="Enter drugs quantity "
                v-model="drug.quantity"
                required
              />
            </div>
            <!-- <div class="mt-3">
              <label class="block text-lg text-white font-bold">Price</label>
              <input
                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="number"
                id="priceDrugs"
                placeholder="Enter drugs quantity"
                v-model="drug.price"
                required
              />
            </div> -->
            <div class="mt-5 items-center flex justify-center cursor-pointer">
              <button
                class="px-4 py-1 text-white font-bold tracking-wider bg-gray-900 hover:bg-gray-800 rounded "
                type="submit"
                @click="insertSale"
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
import { createDrug } from "../utilities/drugRequest.js";
import { getWallet } from "../utilities/walletRequest.js";
// import { createWallet} from "../utilities/walletRequest.js";
import { mapGetters } from "vuex";

export default {
  name: "App",

  data() {
    return {
      drug: {
        drugsType: "",
        quantity: null,
        price: null,
        idUser: "",
        dateSale: "",
      },
      role: "",
      errorMsg: "",
      doneMsg: "",
      nowDirtyMoney: null,
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

    insertSale() {
      this.drug.dateSale = new Date();
      this.drug.idUser = this.userData.id;
      this.drug.drugsType === "Weed"
        ? (this.drug.price = this.drug.quantity * 7)
        : (this.drug.price = this.drug.quantity * 125);

      if (
        this.drug.quantity != "" &&
        this.drug.price != "" &&
        this.drug.drugsType != ""
      ) {
        this.nowDirtyMoney += Number(this.drug.price);

        // createWallet({ dirtyMoney: this.nowDirtyMoney }).then((value) => {
        //   console.log(
        //     "🚀 ~ file: Home.vue ~ line 167 ~ createWallet ~ value",
        //     value
        //   );
        //   if (value.data == true) {
        //     console.log("good");
        //   }
        // });

        createDrug(this.drug).then((value) => {
          if (value.data == true) {
            this.doneMsg = "✔️Vente ajoutée !✔️";
            this.errorMsg = "";
          }
        });

        this.drug = {
          drugsType: "",
          quantity: null,
          price: null,
          idUser: "",
          dateSale: "",
        };
      } else {
        this.errorMsg = "❌Champs incorrect !❌";
        this.doneMsg = "";
      }
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

  async beforeMount() {
    if (!this.isLogged) {
      this.$router.push("/login");
    }
    if (this.userData.isAdmin == "member") {
      this.role = "member";
    } else if (this.userData.isAdmin == "admin") {
      this.role = "admin";
    }

    await getWallet().then((value) => {
      this.nowDirtyMoney = value.data.dirty_money_wallet;
    });
  },
};
</script>
