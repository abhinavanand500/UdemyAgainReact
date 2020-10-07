import React from "react";
import Accordian from "./component/Accordian";
import Search from "./component/Search";
const items = [
    {
        title: "How React works? How Virtual-DOM works in React?",
        content:
            "React creates a virtual DOM. When state changes in a component it firstly runs a “diffing” algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.",
    },
    {
        title: "What is JSX?",
        content:
            "JSX is a syntax extension to JavaScript and comes with the full power of JavaScript. JSX produces React “elements”. You can embed any JavaScript expression in JSX by wrapping it in curly braces. After compilation, JSX expressions become regular JavaScript objects.",
    },
    {
        title:
            " What is ReactDOM and what is the difference between ReactDOM and React?",
        content:
            "As the name implies, ReactDOM is the glue between React and the DOM. Often, we will only use it for one single thing: mounting with ReactDOM. Another useful feature of ReactDOM is ReactDOM.findDOMNode() which we can use to gain direct access to a DOM element.",
    },
];

function App() {
    return (
        <div>
            {/* <Accordian items={items} /> */}
            <Search />
        </div>
    );
}

export default App;
