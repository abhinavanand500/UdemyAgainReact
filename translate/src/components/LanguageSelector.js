import React from "react";
import LanguageContext from "../contexts/LanguageContext";
class LanguageSelector extends React.Component {
    static contextType = LanguageContext;
    render() {
        console.log(this.context);
        return (
            <div>
                Select a Language
                <i
                    className='flag us'
                    onClick={() => {
                        this.context.onLanguageChange("English");
                    }}
                />
                <i
                    className='flag nl'
                    onClick={() => {
                        this.context.onLanguageChange("Hindi");
                    }}
                />
            </div>
        );
    }
}

export default LanguageSelector;
