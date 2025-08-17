import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { type FC } from "react";

type Props = {
  isOpenMenu: boolean,
  onToggleMenu: () => void;
};

export const BurgerMenuView:FC<Props> = ({isOpenMenu, onToggleMenu}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleTheme } = useTheme();

  return (
    <div className="fixed inset-0 bg-black/70">
      <div className="absolute top-0 bottom-0 left-0 w-[350px] bg-white flex justify-center align-center">
        <button className="absolute flex flex-col top-4 right-4" onClick={onToggleMenu}>
          <span className="w-8 h-1 bg-black rounded-full rotate-45 relative top-1"></span>
          <span className="w-8 h-1 bg-black rounded-full -rotate-45"></span>
        </button>
        <div className="flex flex-col justify-center align-center gap-4 p-4">
          {location.pathname === "/" && (
            <button
              className="bg-blue-400 rounded-2xl text-white p-2"
              onClick={() => navigate("/form")}
            >
              Sign In
            </button>
            )}
              <button
            className="bg-blue-400 rounded-2xl text-white p-2"
            onClick={toggleTheme}
          >
            Change theme
          </button>
            </div>
        </div>
    </div>
  )
}