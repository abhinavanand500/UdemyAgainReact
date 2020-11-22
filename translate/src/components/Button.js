import React from "react";
import LanguageContext from "../contexts/LanguageContext";
class Button extends React.Component {
    render() {
        // const text = this.context === "English" ? "Submit" : "Jama Karo";
        return (
            <button className='ui button primary'>
                <LanguageContext.Consumer>
                    {(value) => (value === "English" ? "Submit" : "Jama Karo")}
                </LanguageContext.Consumer>
            </button>
        );
    }
}

export default Button;
