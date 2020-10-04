import React from "react";
import "./Image.css";
function ImageList({ images }) {
    const img = images.map((image) => {
        return (
            <div className='aa mt-2'>
                <img
                    className='bb'
                    key={image.id}
                    src={image.urls.regular}
                    alt={image.likes}
                />
            </div>
        );
    });
    return <div>{img}</div>;
}

export default ImageList;
