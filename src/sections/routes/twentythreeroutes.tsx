import {Route, Routes} from "react-router-dom";
import React from "react";
import Edinburgh from "../camera/twentythree/edinburgh";
import Dublin from "../camera/twentythree/dublin";
import Reykjavik from "../camera/twentythree/reykjavik";
import Copenhagen from "../camera/twentythree/copenhagen";
import Stockholm from "../camera/twentythree/stockholm";
import Rome from "../camera/twentythree/rome";
import Vatican from "../camera/twentythree/vatican";
import London from "../camera/twentythree/london";
import Berlin from "../camera/twentythree/berlin";
import Belgrade from "../camera/twentythree/belgrade";
import Budapest from "../camera/twentythree/budapest";
import Barcelona from "../camera/twentythree/barcelona";
import Misc from "../camera/twentythree/misc";
import Boston from "../camera/twentythree/boston";
import Charlotte from "../camera/twentythree/charlotte";
import Oxford from "../camera/twentythree/oxford";
import SanFrancisco from "../camera/twentythree/sanfrancisco";
import DC from "../camera/twentythree/washingtondc";

export const TwentyThreeRoutes: React.FC = () => {
    return (
        <Routes>
            <Route
                path={"/camera/2023/edinburgh"}
                element={<Edinburgh />}
                caseSensitive={false}
                />
            <Route
                path={"/camera/2023/dublin"}
                element={<Dublin />}
                caseSensitive={false}
            />
            <Route
                path={"/camera/2023/reykjavik"}
                element={<Reykjavik />}
                caseSensitive={false}
            />
            <Route
                path={"/camera/2023/copenhagen"}
                element={<Copenhagen />}
                caseSensitive={false}
            />
            <Route
                path={"/camera/2023/stockholm"}
                element={<Stockholm />}
                caseSensitive={false}
            />
            <Route
                path={"/camera/2023/rome"}
                element={<Rome />}
                caseSensitive={false}
            />
            <Route
                path={"/camera/2023/vatican"}
                element={<Vatican />}
                caseSensitive={false}
            />
            <Route
                path={"/camera/2023/london"}
                element={<London />}
                caseSensitive={false}
            />
            <Route
                path={"/camera/2023/berlin"}
                element={<Berlin />}
                caseSensitive={false}
            />
            <Route
                path={"/camera/2023/belgrade"}
                element={<Belgrade />}
                caseSensitive={false}
            />
            <Route
                path={"/camera/2023/budapest"}
                element={<Budapest />}
                caseSensitive={false}
            />
            <Route
                path={"/camera/2023/barcelona"}
                element={<Barcelona />}
                caseSensitive={false}
            />
            <Route
                path={"/camera/2023/misc23"}
                element={<Misc />}
                caseSensitive={false}
            />
            <Route
                path={"/camera/2023/boston"}
                element={<Boston />}
                caseSensitive={false}
            />
            <Route
                path={"/camera/2023/charlotte"}
                element={<Charlotte />}
                caseSensitive={false}
            />
            <Route
                path={"/camera/2023/oxford"}
                element={<Oxford />}
                caseSensitive={false}
            />
            <Route
                path={"/camera/2023/sanfrancisco"}
                element={<SanFrancisco />}
                caseSensitive={false}
            />
            <Route
                path={"/camera/2023/DC"}
                element={<DC />}
                caseSensitive={false}
            />
        </Routes>
    )
}