import React, {useState} from 'react';
import {Header} from "./components/Header";
import './App.css';
import {SideBar} from "./components/SideBar";
import {v1} from 'uuid';
import {BrowserRouter} from "react-router-dom";
import SideBarRoutes from "./SideBarRoutes";

function App() {
    let [usersList, setUsersList] = useState([
        {
            id: v1(),
            avatar: "https://sun9-62.userapi.com/impg/09lAaXvENI1LUG9lMq3sVGhAuKG9lyx1lN9nrA/" +
                "Kvu0uw_2w10.jpg?size=800x800&quality=96&sign=c15064075179f2d46604131c77fdf46a&type=album",
            nickname: "Alvanes",
            years: 24
        }
    ])

    return <BrowserRouter>
        <div className={"grid-conteiner"}>
            <Header
                usersList={usersList}
            />
            <SideBar/>
            <SideBarRoutes usersList={usersList}/>
        </div>
    </BrowserRouter>
}

export default App;
