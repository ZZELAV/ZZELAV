<template>
  <div class="projects">
    <HomeView />
    <ProjectsComp />
  </div>
</template>

<script>
import HomeView from "@/views/HomeView.vue";
import ProjectsComp from "@/components/ProjectsComp.vue";

export default {
  name: "ProjectsView",
  components: {
    HomeView,
    ProjectsComp,
  },
};
</script>