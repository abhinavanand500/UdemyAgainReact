import React, { useState } from "react";
import Accordian from "./component/Accordian";
import Dropdown from "./component/Dropdown";
import Search from "./component/Search";
import Translate from "./component/Translate";

const options = [
    {
        label: "The color Red",
        value: "red",
    },
    {
        label: "The color Blue",
        value: "blue",
    },
    {
        label: "The color Green",
        value: "green",
    },
];

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
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            {/* <Accordian items={items} /> */}
            {/* <Search /> */}
            {/* <Dropdown
                options={options}
                onSelectedChange={setSelected}
                selected={selected}
            /> */}
            <Translate />
        </div>
    );
}

export default App;
