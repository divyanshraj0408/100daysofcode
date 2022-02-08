import React from "react"
import ReactDOM from "react-dom"
import logo from './logo.svg';
import './App.css';

const page = ( <
    div >
    <
    img src = "./logo-og.png" / >
    <
    h1 > Fun facts about React < /h1> <
    ul >
    <
    li > It was released in 2013 < /li> <
    li > Was originally created by Jordan Walke < /li> <
    li > Has well over 100 k stars on github.com < /li> <
    li > Is maintained by Facebook < /li> < /
    ul > <
    /div>
)
ReactDOM.render(page, document.getElementById("root"))

export default App;