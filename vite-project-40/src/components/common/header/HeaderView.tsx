import { type FC } from "react";
import { BurgerMenuView } from "../../BurgerMenuView";
import { SearchView } from "@/components/search/SearchView";

type Props = {
  isOpenMenu: boolean;
  onToggleMenu: () => void;
};

export const HeaderView: FC<Props> = ({ isOpenMenu, onToggleMenu }) => {
  
  return (
    <header className="w-full h-auto bg-[#2436a7] flex justify-between items-center p-5">
      { isOpenMenu && <BurgerMenuView isOpenMenu={isOpenMenu} onToggleMenu={onToggleMenu} />}
      <button className="flex flex-col gap-1" onClick={onToggleMenu}>
        <span className="w-8 h-1 bg-black"></span>
        <span className="w-8 h-1 bg-black"></span>
        <span className="w-8 h-1 bg-black"></span>
      </button>
      <SearchView />
    </header>
  );
};
