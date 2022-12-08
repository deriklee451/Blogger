<template>
  <div class="container ">
    <div class="row justify-content-center">
      <div class="col-10">
        <div class="row border mb-2 bg-light elevation-5" v-for="b in blogs">
          <BlogCard :blog="b" />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { blogsService } from "../services/BlogsService.js"
import BlogCard from "../components/BlogCard.vue"

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
    return {
      blogs: computed(() =>
        AppState.blogs)
    }
  },
  components: { BlogCard }
}
</script>

<style scoped lang="scss">

</style>
