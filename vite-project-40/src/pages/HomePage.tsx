import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/constants/theme";
import { ListController } from "../components/CardsPosts/ListCardsPosts/ListController"

export const HomePage = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === THEME.DARK
          ? "text-white bg-[#313037]"
          : "text-black bg-[#f3f3f3]"
      }`}
    >
      <ListController />
    </div>
  );
};
