import React from 'react';
import s from "../MainPage/MainPage.module.css";
import d from "../Dialogs/Dialogs.module.css"
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    id: string,
    name: string
}
type DialogMessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return <div className={d.active}>
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
}
const DialogMessage = (props: DialogMessagePropsType) => {
    return <div>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.mainPage}>
            <div className={d.container}>
                <div className={d.diagUsers}>
                    <DialogItem id={"1"} name={"User1"}/>
                    <DialogItem id={"2"} name={"User2"}/>
                    <DialogItem id={"3"} name={"User3"}/>
                </div>
                <div className={d.diagMessage}>
                    <DialogMessage message={"Hi"}/>
                    <DialogMessage message={"Yo"}/>
                    <DialogMessage message={"SUPER"}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;