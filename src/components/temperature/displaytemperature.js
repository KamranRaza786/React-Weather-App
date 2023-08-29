import { useState } from "react";
import Button from "../button/Button";
import Navbar from "../navbar/Navbar";
import './style.css';

const DisplayTemperature = () => {
    const [temperature, setTemperature] = useState("22");

    const setTemperatureHandler = (data) => {
        setTemperature(data);
    }

    return(
        <>  
        <div>
            <Navbar />
        </div>

            <div className="container">
                <div className="text">
                    <h2>Room temperature is {temperature} °C.</h2> 
                </div>
                <div className="button-container">
                    <Button text="+" setTemperatureHigh={setTemperatureHandler} temperatureData={temperature} />
                    <Button text="-" setTemperatureLow={setTemperatureHandler} temperatureData={temperature} />
                </div>
            </div>
            
        </>
        
    );
}

export default DisplayTemperature;