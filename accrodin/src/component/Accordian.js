import React, { useState } from "react";
function Accordian({ items }) {
    const [ActiveIndex, setActiveIndex] = useState(null);
    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === ActiveIndex ? "active" : null;
        return (
            <div key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}>
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </div>
        );
    });
    return (
        <div className='ui styled accordion'>
            {renderedItems}
            <h1>{ActiveIndex}</h1>
        </div>
    );
}

export default Accordian;
