import { FC } from "react";
import { Tiles } from "../../types";
type Props = {
    tile: Tiles
}
export const Tile: FC<Props> = ({ tile }) => {
    return (
        <div className="w-full flex flex-col h-full bg-secondry-color p-[18px] rounded-[40px] gap-y-[42px]">
            <div className="size-14 flex items-center justify-center rounded-full bg-selected-sidebar-items">
                <img src={`/svgs/active/${tile.name}.svg`} alt={tile.name} className="max-w-10 max-h-10" />
            </div>
            <div className="flex flex-col gap-3">
                <p className="font-normal text-base text-sidebar-items-text-color">{tile.title}</p>
                <p className="font-medium text-[28px] text-selected-sidebar-items-text-color">{tile.value}</p>
            </div>
        </div>
    )
}