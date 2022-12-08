<template>
  <div class="container ">
    {{ blogs }}
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { blogsService } from "../services/BlogsService.js"

export default {
  setup() {
    onMounted(() => {
      getBlogs()
    }
    )
    async function getBlogs() {
      try {
        await blogsService.getBlogs()
      } catch (error) {

      }
    }
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
