<template>
  <div class="about">
    <HomeView />
    <AboutComp />
  </div>
</template>

<script>
import HomeView from "@/views/HomeView.vue";
import AboutComp from "@/components/AboutComp.vue";

export default {
  name: "AboutView",
  components: {
    HomeView,
    AboutComp,
  },
};
</script>