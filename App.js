import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <h1 className="geeks"><b>CRUD APPLICATION</b></h1>
            <p><b>Here About 'CRUD' Application</b></p>
            <a href="https://en.wikipedia.org/wiki/Insert_(SQL)">| Create |</a>
            <a href="https://en.wikipedia.org/wiki/Select_(SQL)"> Read |</a>
            <a href="https://en.wikipedia.org/wiki/Update_(SQL)"> Update |</a>
            <a href="https://en.wikipedia.org/wiki/Delete_(SQL)"> Delete |</a>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />}/>
                    <Route path="/edit" element={<Edit />}/>
                </Routes>
            </Router>
        </div>
    );
}


export default App;
