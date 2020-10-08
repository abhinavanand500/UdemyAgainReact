import React, { useState, useEffect } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const options = [
    {
        label: "Aftikaans",
        value: "af",
    },
    {
        label: "Hindi",
        value: "hi",
    },
    {
        label: "Arabic",
        value: "ar",
    },
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter text</label>
                    <input
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                </div>
            </div>

            <Dropdown
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
                labell='Select a Language'
            />
            <hr />
            <h3 className='ui header'>OUTPUT</h3>
            <Convert language={language} text={text} />
        </div>
    );
};
export default Translate;
