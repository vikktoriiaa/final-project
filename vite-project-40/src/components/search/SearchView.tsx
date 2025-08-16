import { useState } from "react";
import { usePosts } from "@/hooks/usePosts";

export const SearchView = () => {
  const { searchPosts, searchQuery, clearSearch } = usePosts();
  const [isVisible, setIsVisible] = useState(false);

  if (!isVisible) {
    return (
      <button
        className="bg-blue-400 rounded-2xl text-white p-2"
        onClick={() => setIsVisible(true)}
      >
        <img src="../public/search.svg" alt="search" className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => searchPosts(e.target.value)}
        className="w-70 h-9 bg-white text-gray-900 rounded px-2"
        autoFocus
      />
      <button
        className="bg-gray-400 text-white p-2 rounded-2xl h-9"
        onClick={() => {
          setIsVisible(false);
          clearSearch();
        }}
      >
        ✕
      </button>
    </div>
  );
};
