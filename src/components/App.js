import React from "react";
import '../style/App.css';
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./MainPage";
import ProjectSize from "./ProjectSize";
import ProjectDescription from "./ProjectDescription";
import ProjectSummary from "./ProjectSummary";
import ProjectStyle from "./ProjectStyle";



const App = () =>{
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/project" exact component={ProjectSize}/>
                    <Route path="/project/style" exact component={ProjectStyle}/>
                    <Route path="/project/description" exact component={ProjectDescription}/>
                    <Route path="/project/summary" exact component={ProjectSummary}/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;