import React from "react";
import { NavLink } from "react-router-dom";
import s from "./SideBar.module.css"

export const SideBar = () => {
    return (
        <div className={s.sidebar}>
            <div>
                <NavLink to="/homepage"><img src={"https://cdn-icons-png.flaticon.com/512/25/25694.png"}/></NavLink>
            </div>
            <div>
                <NavLink to="/dialogs"><img src={"https://cdn-icons-png.flaticon.com/512/25/25236.png"}/></NavLink>
            </div>
            <div>
                <NavLink to="/settings"><img src={"https://cdn-icons-png.flaticon.com/512/25/25319.png"}/></NavLink>
            </div>
        </div>
    )
}