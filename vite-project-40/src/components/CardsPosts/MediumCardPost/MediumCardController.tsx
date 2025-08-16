import { useState } from "react";
import { THEME } from "../../../constants/theme";
import { MediumCardView } from "./MediumCardView";
import { useTheme } from "@/hooks/useTheme";
import { usePosts } from "@/hooks/usePosts";

export const MediumCardController = () => {
  const { theme } = useTheme();
  const { filteredMediumPosts } = usePosts();
  // Объект для хранения состояния каждой карточки
  const [cardStates, setCardStates] = useState<
    Record<number, { likes: number; dislikes: number }>
  >({});

  const increaseLikes = (cardId: number) => {
    setCardStates((prev) => ({
      ...prev,
      [cardId]: {
        ...prev[cardId],
        likes: (prev[cardId]?.likes || 0) + 1,
      },
    }));
  };

  const increaseDislikes = (cardId: number) => {
    setCardStates((prev) => ({
      ...prev,
      [cardId]: {
        ...prev[cardId],
        dislikes: (prev[cardId]?.dislikes || 0) + 1,
      },
    }));
  };

  if (filteredMediumPosts.length === 0) {
    return <div className="text-center p-4">Карточки не найдены</div>;
  }

  return (
    <>
      {filteredMediumPosts.map((card) => (
        <MediumCardView
          key={card.id}
          {...card}
          theme={theme === THEME.DARK ? "dark" : "light"}
          increaseLikes={() => increaseLikes(card.id)}
          increaseDislikes={() => increaseDislikes(card.id)}
          likesCount={cardStates[card.id]?.likes || 0}
          dislikesCount={cardStates[card.id]?.dislikes || 0}
        />
      ))}
    </>
  );
};
