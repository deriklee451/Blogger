import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {
    async getBlogs() {
        const res = await api.get('api/blogs')
        logger.log(res.data)
        AppState.blogs = res.data
    }

    async getBlogById(id) {
        const res = await api.get('api/blogs/' + id)
        logger.log(res.data)
    }

}

export const blogsService = new BlogsService()