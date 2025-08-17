import { Footer } from "./components/Footer";
import { FormPage } from "./pages/FormPage";
import { PostPage } from "./pages/PostPage";
import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./contexts/PostContexts";
import { HomePage } from "./pages/HomePage";
import { HeaderController } from "./components/common/header/HeaderController";

export function App() {
  return (
    <PostProvider>
      <div className="flex flex-col min-h-screen">
        <HeaderController />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
        <Footer />
      </div>
    </PostProvider>
  );
}
