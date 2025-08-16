import { useState } from "react";
import { THEME } from "../../../constants/theme";
import { LargCardView } from "./LargCardView";
import { useTheme } from "@/hooks/useTheme";
import { usePosts } from "@/hooks/usePosts";

export const LargCardController = () => {
  const { theme } = useTheme();
  const { filteredLargePosts } = usePosts();
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

  return (
    <>
      {filteredLargePosts.map((card) => (
        <LargCardView
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
