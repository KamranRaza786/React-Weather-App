import { useState } from "react";
import Button from "../button/Button";
import './style.css';
import Navbar from "../navbar/Navbar";

const Display = () => {
    const [light, setLight] = useState(false);
    const brightness = light ? "light" : "dark";

    const setLightHandler = (data) => {
        setLight(data);
    }

    return(
        <>
            <div>
                <Navbar />
            </div>
            <div className= {`room ${brightness}`}>
                <div className="text">
                    <h2>Room is {brightness}.</h2>
                </div>
                <div className="button-container">
                    <Button text="ON" setLight={setLightHandler} lightData={light} />
                    <Button text="OFF" setLight={setLightHandler} lightData={light} />
                </div>
            </div>
            
        </>
        
    );
}

export default Display;