import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./components/MainPage/HomePage";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import {HeaderPropsType} from "./components/Header";


const SideBarRoutes = (props: HeaderPropsType) => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={"/homepage"} replace/>}/>
            <Route path={"/homepage"} element={<HomePage avatar={props.usersList[0].avatar}/>}/>
            <Route path={"/settings"} element={<Settings/>}/>
            <Route path={"/dialogs/*"} element={<Dialogs/>}/>
        </Routes>
    );
};

export default SideBarRoutes;