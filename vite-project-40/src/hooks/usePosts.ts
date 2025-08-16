import { PostContext } from "@/contexts/PostContexts"
import { useContext } from "react"

export const usePosts = () => {
  const postContext = useContext(PostContext);

  if (postContext === undefined) {
  throw new Error('no posts')
}

  return postContext;
}