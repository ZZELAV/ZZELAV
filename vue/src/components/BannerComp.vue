<template>
  <div
    class="
      overflow-visible
      relative
      max-w-sm
      mx-auto
      box
      flex
      items-center
      gap-6
    "
  >
    <img
      :src="imgSrc"
      alt="Profile Picture"
      class="
        absolute
        -left-6
        w-24
        h-24
        rounded-lg
        shadow-lg shadow-blue-200
        ring-1 ring-blue-200/5
      "
    />
    <div class="flex flex-col py-3 pl-24">
      <p class="text-slate-900 text-lg font-medium">{{ name }}</p>
      <p class="text-slate-500 text-sm font-medium">{{ job }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      default: "https://picsum.photos/200",
      type: String,
    },
    name: {
      default: "Name",
      type: String,
    },
    job: {
      default: "Job",
      type: String,
    },
  },
};
</script>