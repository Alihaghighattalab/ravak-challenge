import { IMEI } from "./components/home/imei";
import { Tile } from "./components/home/tile";
import { HomeLayout } from "./components/home/ui/layout";
import { Tiles } from "./types";
import { tilesItems } from "./utility/variables";

function Home() {
    return (
        <>
            <HomeLayout>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {tilesItems?.map((tile: Tiles) => <Tile tile={tile} key={tile.id} />)}
                </div>
                <IMEI/>
            </HomeLayout>
        </>
    );
}

export default Home;
