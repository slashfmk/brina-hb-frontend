import React from 'react';

interface IImageCard {
    title?: string;
    textPreview?: string;
    img: string;
}

const ImageCard: React.FC<IImageCard> = (props) => {

    return (
        <div className="w-full">
            <img src={props.img}  className={`w-full border-1 object-cover object-center`} />
            <div>
                <p className=" font-semibold">{props.title && props.title}</p>
                {props.textPreview && props.textPreview}
            </div>
        </div>
    )
}

export default ImageCard;