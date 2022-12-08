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
import { useRouter } from 'vue-router';
import { logger } from '../utils/Logger.js';
export default {
    props: { blog: { type: Object, required: true } },
    setup(props) {
        const router = useRouter()
        return {
            async getBlogById() {
                try {
                    await blogsService.getBlogById(props.blog.id)
                    this.goTo()
                } catch (error) {

                }
            },
            goTo() {
                logger.log('pushing')
                router.push({ name: 'Blog', params: { id: props.blog.id } })
            }
        }
    }
};
</script>


<style lang="scss" scoped>

</style>