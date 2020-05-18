import React, { useState } from 'react';
export default function PropertyItem({ label, items, value, onChange, onClick }) {
    
    const handleSelect = (e) => {
        onChange(e.target.value);
    }
    
    return (
        <>
            <div className="property-item-container">
                <label>{ label }</label>
                <select onChange={handleSelect} value={value}>
                    {
                        items.map((item, index) => {
                            return (
                                <option key={index} value={item}>{item}</option>
                            )
                        })
                    }
                </select>
                <button onClick={onClick}>Update</button>
            </div>
            <style jsx>
            {`
            .property-item-container {
                background-color: white;
                padding: 2px;
                margin-bottom: 2px;
                display: grid;
                grid-template-columns: 45px auto 60px;
                grid-gap: 3px;
            }
            label {
                font-family: arial, sans-serif;
                font-size: 0.8em;
            }
            select {
                outline: none;
            }
            button {
                outline: none;
            }
            `}
            </style>
        </>
    )
}