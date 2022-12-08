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
export default {
    setup() {
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