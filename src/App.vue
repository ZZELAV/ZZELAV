<template>
  <router-view class="m-6" />
</template>

<script>
export default {
  created() {
    document.documentElement.setAttribute('lang', 'de')
  }
};
</script>

