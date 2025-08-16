import { useTheme } from "@/hooks/useTheme";
import { SearchView } from "./search/SearchView";

type Props = {
  onSignIn: () => void;
};
export const Header = ({ onSignIn }: Props) => {
  const { toggleTheme } = useTheme();

  return (
    <header className="w-full h-auto bg-[#2436a7] flex justify-between items-center-center p-5">
      <button className="bg-blue-400 text-white p-2 rounded-2xl">
        <img src="../public/burger.svg" alt="burger-menu" className="w-8 h-8" />
      </button>
      <div className="flex gap-1">
        <SearchView />
        <button
          className="bg-blue-400 rounded-2xl text-white p-2"
          onClick={onSignIn}
        >
          Sign In
        </button>
        <button
          className="bg-blue-400 rounded-2xl text-white p-2"
          onClick={toggleTheme}
        >
          Change theme
        </button>
      </div>
    </header>
  );
};
