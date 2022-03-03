import React from "react";
import s from "./MainPage.module.css"
import Message from "./Message";

type MainPageProps = {
    avatar: string
}

export const HomePage = (props:MainPageProps) => {
    return (
        <div className={s.mainPage}>
            <div>
                <textarea></textarea>
                <button>click</button>
            </div>

            <div>
                <Message txt={"Hi this is my page"} avatar={props.avatar}/>
                <Message txt={"Hi this is my page"} avatar={props.avatar}/>
            </div>
        </div>
    )
}