import React from 'react';

export function NextArrow(props) {
    return (
        <>
            <div
                className={props.className}
                // In order to work with jsx and pass the style, we use double braces as below 
                style={{ ...props.style }}
                onClick={props.onClick}
            />
        </>
    )
}


export function PrevArrow(props) {
    return (
        <>
            <div
                className={props.className}
                // In order to work with jsx and pass the style, we use double braces as below 
                style={{ ...props.style }}
                onClick={props.onClick}
            />
        </>
    )
}
