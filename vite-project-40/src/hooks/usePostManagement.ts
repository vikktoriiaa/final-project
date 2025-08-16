import { LARG_CARDS_POSTS } from "@/components/CardsPosts/LargCardPost/larg-card-model"
import { MEDIUM_CARDS_POSTS } from "@/components/CardsPosts/MediumCardPost/medium-card-model"
import { SMALL_CARDS_POSTS } from "@/components/CardsPosts/SmallCardPost/small-card-model"
import { useState } from "react"

export const usePostManagement = () => {
  const [largePosts] = useState(LARG_CARDS_POSTS)
  const [mediumPosts] = useState(MEDIUM_CARDS_POSTS)
  const [smallPosts] = useState(SMALL_CARDS_POSTS)
  return {largePosts, mediumPosts, smallPosts}
}