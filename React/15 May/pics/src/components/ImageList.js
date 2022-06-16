import React from "react";

const ImageList = (props) => {
    return props.images.map((image) => {
        return (
            <img
                style={{ height: '300px' }}
                alt={image.alt_description}
                key={image.id} // Unique identifier
                src={image.urls.regular}
            />
        );
    });
}

export default ImageList;