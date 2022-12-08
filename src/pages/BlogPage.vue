<template>
    <div v-if="blog">
        <div>
            <img :src="blog.imgUrl" alt="">
        </div>
        <h1>{{ blog.title }}</h1>
        <p>{{ blog.body }}</p>

    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { blogsService } from '../services/BlogsService.js';
import { useRoute } from 'vue-router';
export default {
    setup() {
        const route = useRoute()
        onMounted(() => {
            blogsService.getBlogById(route.params.id)
        })
        return {
            blog: computed(() =>
                AppState.activeBlog
            )
        }
    }
};
</script>


<style lang="scss" scoped>

</style>