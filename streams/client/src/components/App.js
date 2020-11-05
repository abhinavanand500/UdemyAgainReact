import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
    return (
        <div>
            <h1>Hello</h1>
            <BrowserRouter>
                <div>
                    <Route path='/' component={App} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
