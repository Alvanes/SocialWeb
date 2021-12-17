import React from 'react';
import './App.css';

function App() {
    return <div className={"grid-conteiner"}>
        <div className={"header"}>
            <div>
                <a target="_blank" href="https://www.codewars.com/users/Alvanes"><img
                    src="https://www.codewars.com/users/Alvanes/badges/small" alt="codewars badge large"/></a>
            </div>
            This is Header
        </div>
        <div className={"sidebar"}>
            <div>
                <a href="#"><img width={"50px"} src={"https://cdn-icons-png.flaticon.com/512/25/25694.png"}/></a>
            </div>
            <div>
                <a href="#"><img width={"50px"} src={"https://cdn-icons-png.flaticon.com/512/25/25236.png"}/></a>
            </div>
            <div>
                <a href="#"><img width={"50px"} src={"https://cdn-icons-png.flaticon.com/512/25/25319.png"}/></a>
            </div>
        </div>
        <div className={"mainpage"}>
            <div>This is mainpage information</div>
            <div>-</div>
            <div>-</div>
            <div>-</div>
            <div>-</div>
            <div>-</div>
            <div>-</div>
            <div>-</div>
            <div>-</div>
        </div>
    </div>
}

export default App;
