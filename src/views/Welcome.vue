<template>
  <div
    class="h-screen flex justify-center items-center background bg-cover bg-center overflow-hidden"
  >
    <div class="space-y-5">
      <div class="flex flex-row items-center justify-center">
        <img
          src="https://i.imgur.com/79oZgNP.png"
          alt="WeedNeon "
          class="logo"
          @click="goToLogin"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  methods: {
    goToLogin: function() {
      this.$router.push("/Login");
    },
  },
};
</script>
