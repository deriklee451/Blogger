<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-dark text-light">
    Made with 💖 by CodeWorks
  </footer>
  <div class="modal" tabindex="-1" id="Modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create a blog!</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createPost()">
            <div class="mb-3">
              <label for="Blog post" class="form-label">Blog away.</label>
              <input v-model="editable.title" type="text" class="form-control" id="" aria-describedby="">
              <div id="post" class="form-text">Enter your thoughts</div>
            </div>

            <div class="mb-3">
              <label for="Blog post" class="form-label">blog</label>
              <input v-model="editable.body" type="text" class="form-control" id="" aria-describedby="">
              <div id="post" class="form-text">Enter your thoughts</div>
            </div>

            <div class="mb-3">
              <label for="" class="form-label">image URL</label>
              <input v-model="editable.imgUrl" type="text" class="form-control" id="">
            </div>
            <button class="btn btn-primary">Post</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import { blogsService } from './services/BlogsService.js'

export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      appState: computed(() => AppState),
      async createPost() {
        try {
          await blogsService.createPost(editable.value)
          editable = {}
        } catch (error) {

        }
      }
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
