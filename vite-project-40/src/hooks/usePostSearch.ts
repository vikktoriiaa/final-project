import type { Post } from "@/contexts/PostContexts"
import { useCallback, useState } from "react"

type Props = {
  largePosts: Post[]
  mediumPosts: Post[]
  smallPosts: Post[]
}

export const usePostSearch = ({largePosts, mediumPosts, smallPosts}: Props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredLargePosts, setFilteredLargePosts] = useState(largePosts)
  const [filteredMediumPosts, setFilteredMediumPosts] = useState(mediumPosts)
  const [filteredSmallPosts, setFilteredSmallPosts] = useState(smallPosts)

  const searchPosts = useCallback((query: string) => {
    setSearchQuery(query)

    if (!query.trim()) {
      clearSearch()
      return
    }

    const filteredLarge = largePosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()) || post.description?.toLowerCase().includes(query.toLowerCase()) || post.date.toLowerCase().includes(query.toLowerCase()))

    const filteredMedium = mediumPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()) || post.date.toLowerCase().includes(query.toLowerCase()))

    const filteredSmall = smallPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()) || post.date.toLowerCase().includes(query.toLowerCase()))

    setFilteredLargePosts(filteredLarge)
    setFilteredMediumPosts(filteredMedium)
    setFilteredSmallPosts(filteredSmall)

  }, [largePosts, mediumPosts, smallPosts])
  
  const clearSearch = useCallback(() => {
    setSearchQuery("")
    setFilteredLargePosts(largePosts)
    setFilteredMediumPosts(mediumPosts)
    setFilteredSmallPosts(smallPosts)
  }, [largePosts, mediumPosts, smallPosts])
  return {searchQuery, filteredLargePosts, filteredMediumPosts, filteredSmallPosts, searchPosts, clearSearch}
}