import { LargCardController } from "../LargCardPost/LargCardController"
import { MediumCardController } from "../MediumCardPost/MediumCardController"
import { SmallCardController } from "../SmallCardPost/SmallCardController"


type Props = {
  theme: string
}

export const ListView = ({theme}: Props) => {
  return (
    <main className="grid grid-cols-3 grid-rows-6 w-6xl h-[1128px]">
      <div className="grid col-start-1 col-end-3 row-start-1 row-end-3">
        <LargCardController theme={theme}/>
      </div>
      <div className="col-start-1 col-end-3 row-start-3 row-end-7">
        <div className="flex flex-wrap">
          <MediumCardController theme={theme} />
        </div>
      </div>
      <div className="col-start-3 col-end-4">
        <SmallCardController theme={theme} />
      </div>
    </main>
  )
}