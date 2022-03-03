import React from "react";
import s from "./Header.module.css"

export type userType = {
    id: string,
    avatar: string,
    nickname: string
    years: number,
}
export type HeaderPropsType = {
    usersList: userType[]
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.header}>
            <div className={s.avatar}>
                <img className={s.headerImg} src={props.usersList[0].avatar}/>
            </div>
            <div className={s.another}>
                <div>{props.usersList[0].nickname}</div>
                <div> {props.usersList[0].years} y.o.</div>
                <a target="_blank" href={`https://www.codewars.com/users/${props.usersList[0].nickname}`}><img
                    width={"300px"}
                    src={`https://www.codewars.com/users/${props.usersList[0].nickname}/badges/large`}
                    alt="you don't have codewars profile :("/></a>
                {/*НАДО СДЕЛАТЬ ЛВЛ КОДВАРСА ПОД АВАТАРКОЙ*/}
            </div>
        </div>
    )
}