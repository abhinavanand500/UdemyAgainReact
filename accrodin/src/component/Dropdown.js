import React, { useState, useEffect, useRef } from "react";

function Dropdown({ options, selected, onSelectedChange }) {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    // console.log(ref.current);
    useEffect(() => {
        document.body.addEventListener("click", (event) => {
            // console.log(event.target);
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        });
    }, []);
    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        } else {
            return (
                <div
                    key={options.value}
                    onClick={() => onSelectedChange(option)}
                    className='item'>
                    {option.label}
                </div>
            );
        }
    });

    return (
        <div className='ui form' ref={ref}>
            <div className='field'>
                <label className='label'>Select a color</label>
                <div
                    onClick={() => {
                        setOpen(!open);
                    }}
                    className={`ui selection dropdown ${
                        open ? "visible active" : ""
                    }`}>
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? "visible transition" : ""}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
