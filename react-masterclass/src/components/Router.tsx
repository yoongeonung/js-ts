import {BrowserRouter, Routes, Route} from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Coin />} path={"/:coinId"} />
                <Route element={<Coins />} path={"/"}/>
            </Routes>
        </BrowserRouter>
    )

}

export default Router;