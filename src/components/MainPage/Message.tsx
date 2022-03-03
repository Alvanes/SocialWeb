import React from 'react';
import s from "./MainPage.module.css"

type MessageType = {
    txt: string
    avatar: string
}

const Message = (props: MessageType) => {
    return (
        <div>
            <img className={s.MessageImg} src={props.avatar}/>
            {props.txt}
        </div>
    );
};

export default Message;