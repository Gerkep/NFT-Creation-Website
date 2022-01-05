import React from "react";
import '@stripe/stripe-js';
import '../style/App.css';
import { Router, Route } from "react-router-dom";
import MainPage from "./MainPage";
import ProjectSize from "./ProjectSize";
import ProjectDescription from "./ProjectDescription";
import ProjectSummary from "./ProjectSummary";
import ProjectStyle from "./ProjectStyle";
import history from "../history";



const App = () =>{
    return(
        <div>
            <Router history={history}>
                <div>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/project" exact component={ProjectSize}/>
                    <Route path="/project/style" exact component={ProjectStyle}/>
                    <Route path="/project/description" exact component={ProjectDescription}/>
                    <Route path="/project/summary" exact component={ProjectSummary}/>
                </div>
            </Router>
        </div>
    )
}

export default App;