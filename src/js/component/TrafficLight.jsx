import React, { useState } from "react";

const TrafficLight = () => {
    const [selector, setSelector] = useState("red");

    const changeColor = (color) => {
        setSelector(color);
    }

    return (
        <main>
            <div className="p-box"></div>
            <div className="box-light">
                <div 
                    className={`red ${selector === "red" ? "light-on" : ""}`} 
                    onClick={() => changeColor("red")}
                ></div>
                <div 
                    className={`yellow ${selector === "yellow" ? "light-on" : ""}`} 
                    onClick={() => changeColor("yellow")}
                ></div>
                <div 
                    className={`green ${selector === "green" ? "light-on" : ""}`} 
                    onClick={() => changeColor("green")}
                ></div>
            </div>
        </main>
    );
}

export default TrafficLight;
