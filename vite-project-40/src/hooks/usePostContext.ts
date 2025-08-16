import { usePostManagement } from "./usePostManagement"
import { usePostSearch } from "./usePostSearch"

export const usePostContext = () => {
  const posts = usePostManagement()
  const search = usePostSearch({ largePosts: posts.largePosts, mediumPosts: posts.mediumPosts, smallPosts: posts.smallPosts })
  return {...posts, ...search}
}