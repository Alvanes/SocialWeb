import React from "react";
import s from "./Header.module.css"

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.avatar}>
                <img className={s.headerImg} src={"https://sun9-62.userapi.com/impg/09lAaXvENI1LUG9lMq3sVGhAuKG9lyx1lN9nrA/" +
                "Kvu0uw_2w10.jpg?size=800x800&quality=96&sign=c15064075179f2d46604131c77fdf46a&type=album"}/>
            </div>
            <div className={s.another}>
                <div> Alvanes</div>
                <div> 24 y.o.</div>
                <a target="_blank" href="https://www.codewars.com/users/Alvanes"><img width={"300px"}
                    src="https://www.codewars.com/users/Alvanes/badges/large" alt="codewars badge large"/></a>
            </div>
        </div>
    )
}