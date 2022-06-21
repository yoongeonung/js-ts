import {BrowserRouter, Routes, Route} from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";
import Price from "./Price";
import Chart from "./Chart";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Coin />} path={"/:coinId"}>
                    <Route element={<Price />} path={`/:coinId/price`} />
                    <Route element={<Chart />} path={`/:coinId/chart`} />
                </Route>
                <Route element={<Coins />} path={"/"}/>
            </Routes>
        </BrowserRouter>
    )

}

export default Router;