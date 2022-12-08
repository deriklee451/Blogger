<template>
    <div class="col-8 selectable" @click="getBlogById">
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.body }}</p>
    </div>
    <div class="col-4">
        <img class="img-fluid" :src="blog.imgUrl" alt="">
    </div>
</template>


<script>
import { blogsService } from '../services/BlogsService.js';
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    props: { blog: { type: Object, required: true } },
    setup(props) {
        return {
            async getBlogById() {
                try {
                    await blogsService.getBlogById(props.blog.id)
                } catch (error) {

                }
            }
        }
    }
};
</script>


<style lang="scss" scoped>

</style>