import React from 'react';
export default function EventItem({ text, color }) {
    return (
        <>
            <div className="event-item">
                { text }
            </div>
            <style jsx>
            {`
            .event-item {
                background-color: ${color};
                display: inline-block;
                font-size: 11px;
                padding: 5px 10px;
                border-radius: 5px;
                margin: 0px 5px 5px 0px;
                box-shadow: 0px 0px 3px #444;
            }
            `}
            </style>
        </>
    )
}

EventItem.defaultProps = {
    text: "",
    color: "#e6e6e6",
}