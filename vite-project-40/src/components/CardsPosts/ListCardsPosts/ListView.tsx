import { LargCardController } from "../LargCardPost/LargCardController";
import { MediumCardController } from "../MediumCardPost/MediumCardController";
import { SmallCardController } from "../SmallCardPost/SmallCardController";
import { usePosts } from "@/hooks/usePosts";

export const ListView = () => {
  const { searchQuery } = usePosts();

  // Если есть поиск - показываем в колонке, иначе в сетке
  if (searchQuery.trim()) {
    return (
      <main className="flex flex-col gap-4 p-4 max-w-4xl mx-auto">
        <LargCardController />
        <MediumCardController />
        <SmallCardController />
      </main>
    );
  }

  return (
    <main className="grid grid-cols-3 grid-rows-6 w-6xl h-[1128px]">
      <div className="grid col-start-1 col-end-3 row-start-1 row-end-3">
        <LargCardController />
      </div>
      <div className="col-start-1 col-end-3 row-start-3 row-end-7">
        <div className="flex flex-wrap">
          <MediumCardController />
        </div>
      </div>
      <div className="col-start-3 col-end-4">
        <SmallCardController />
      </div>
    </main>
  );
};
