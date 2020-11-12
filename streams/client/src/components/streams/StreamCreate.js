import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends React.Component {
    render() {
        return (
            <div>
                <h1>StreamCreate</h1>
            </div>
        );
    }
}

export default reduxForm()(StreamCreate);
