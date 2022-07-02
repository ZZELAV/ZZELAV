<template>
  <div class="cv">
    <HomeView />
    <CvComp />
  </div>
</template>

<script>
import HomeView from "@/views/HomeView.vue";
import CvComp from "@/components/CvComp.vue";

export default {
  name: "AboutView",
  components: {
    HomeView,
    CvComp,
  },
};
</script>