<template>
  <div
    class="h-screen flex justify-center items-center background bg-cover bg-center"
  >
    <div class="space-y-5">
      <div class="flex flex-row items-center justify-center">
        <img
          src="https://i.imgur.com/79oZgNP.png"
          alt="WeedNeon"
          class="cursor-pointer "
          @click="goToLogin"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import DarkWall from "../assets/img/DarkWall.jpg";
// import WeedNeon from "../assets/img/WeedNeon.png";

export default {
  name: "App",
  // data() {
  //   return {
  //     bgImage: { backgroundImage: `url(${DarkWall})` },
  //     btnImage: WeedNeon,
  //   };
  // },
  methods: {

    goToLogin: function() {
      this.$router.push("/Login");
    },
  },
};
</script>
