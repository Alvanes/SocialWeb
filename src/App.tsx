import React from 'react';
import {Header} from "./components/Header";
import './App.css';
import {SideBar} from "./components/SideBar";
import {MainPage} from "./components/MainPage";

function App() {
    return <div className={"grid-conteiner"}>
        <Header/>
        <SideBar/>
        <MainPage/>
    </div>
}

export default App;
