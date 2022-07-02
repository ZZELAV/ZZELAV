<template>
  <div class="home">
    <div class="ml-6">
      <BannerComp />
    </div>
    <div class="py-10 mx-6">
      <NavigationComp />
    </div>
  </div>
</template>

<script>
import BannerComp from "@/components/BannerComp.vue";
import NavigationComp from "@/components/NavigationComp.vue";

export default {
  name: "HomeView",
  components: {
    BannerComp,
    NavigationComp,
  },
};
</script>
