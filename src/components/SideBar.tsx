import React from "react";
import s from "./SideBar.module.css"

export const SideBar = () => {
    return (
        <div className={s.sidebar}>
            <div>
                <a href="#"><img src={"https://cdn-icons-png.flaticon.com/512/25/25694.png"}/></a>
            </div>
            <div>
                <a href="#"><img src={"https://cdn-icons-png.flaticon.com/512/25/25236.png"}/></a>
            </div>
            <div>
                <a href="#"><img src={"https://cdn-icons-png.flaticon.com/512/25/25319.png"}/></a>
            </div>
        </div>
    )
}