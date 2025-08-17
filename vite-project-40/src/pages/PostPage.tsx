import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/constants/theme";
import { LARG_CARDS_POSTS } from "../components/CardsPosts/LargCardPost/larg-card-model";
import { MEDIUM_CARDS_POSTS } from "../components/CardsPosts/MediumCardPost/medium-card-model";
import { SMALL_CARDS_POSTS } from "../components/CardsPosts/SmallCardPost/small-card-model";

export const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();

  // Объединяем все посты в один массив для поиска
  const allPosts = [
    ...LARG_CARDS_POSTS,
    ...MEDIUM_CARDS_POSTS,
    ...SMALL_CARDS_POSTS,
  ];

  // Находим пост по ID
  const post = allPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div
        className={`flex-1 flex flex-col items-center justify-center p-8 ${
          theme === THEME.DARK
            ? "text-white bg-[#313037]"
            : "text-black bg-[#f3f3f3]"
        }`}
      >
        <h1 className="text-2xl font-bold mb-4">Пост не найден</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Вернуться на главную
        </button>
      </div>
    );
  }

  return (
    <div
      className={`flex-1 p-8 ${
        theme === THEME.DARK
          ? "text-white bg-[#313037]"
          : "text-black bg-[#f3f3f3]"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Кнопка возврата */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          ← Назад к постам
        </button>

        {/* Заголовок поста  */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">{post.date}</p>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        </div>

        {/* Изображение поста */}
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Дополнительная информация  */}
        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Детали поста</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">ID поста:</span> {post.id}
            </div>
            <div>
              <span className="font-medium">Дата публикации:</span> {post.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
