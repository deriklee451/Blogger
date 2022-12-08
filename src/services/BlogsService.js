import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {
    async getBlogs() {
        const res = await api.get('api/blogs')
        AppState.blogs = res.data
    }

    async getBlogById(id) {
        const res = await api.get('api/blogs/' + id)
        AppState.activeBlog = res.data
    }

    async createPost(postData) {
        const res = await api.post('api/blogs', postData)
        logger.log(res.data)
        AppState.blogs.unshift(res.data)
    }

}

export const blogsService = new BlogsService()