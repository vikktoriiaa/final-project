import { usePostContext } from "@/hooks/usePostContext";
import { createContext} from "react";

export type Post = {
  id: number,
  image: string,
  date: string,
  title: string,
  imageLike: string,
  imageDislike: string,
  imageSave: string,
  imageDetails: string,
  description?: string,
}

type PostContextType = {
  filteredLargePosts: Post[]
  filteredMediumPosts: Post[]
  filteredSmallPosts: Post[]
  // Функции
  searchPosts: (query: string) => void
  clearSearch: () => void
  searchQuery: string
}

type Props = {
  children: React.ReactNode
}

export const PostContext = createContext<PostContextType | undefined>(undefined)
 
export const PostProvider = ({children}: Props) => {
  const postContext = usePostContext()
  return (
    <PostContext.Provider value={postContext}>
      {children}
    </PostContext.Provider>
  )
}