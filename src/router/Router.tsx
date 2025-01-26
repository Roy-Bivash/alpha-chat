import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "@/pages/home/Home";

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}