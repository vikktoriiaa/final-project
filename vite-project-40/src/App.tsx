import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { THEME } from "./constants/theme";
import { ListController } from "./components/CardsPosts/ListCardsPosts/ListController";
import { useTheme } from "./hooks/useTheme";
import { PostProvider } from "./contexts/PostContexts";

export function App() {
  const { theme } = useTheme();

  const [page, setPage] = useState<"home" | "form">("home");

  return (
    <PostProvider>
      <div className="flex flex-col min-h-screen">
        {page === "home" && <Header onSignIn={() => setPage("form")} />}
        {page === "form" && <Header onSignIn={() => setPage("form")} />}
        {page === "home" && (
          <div
            className={`${
              theme === THEME.DARK
                ? "text-white bg-[#313037]"
                : "text-black bg-[#f3f3f3]"
            }`}
          >
            <ListController />
          </div>
        )}
        {page === "form" && <Main onBackToHome={() => setPage("home")} />}
        <Footer />
      </div>
    </PostProvider>
  );
}
