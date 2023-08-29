import './style.css';

const Button = (props) => {
    
    

    const setLightHandler = () => {
        if(props.text == "ON") {
            props.setLight(false);
        } 
        else if(props.text == "OFF")
        {
            props.setLight(true);
        }
    }

    const setTemperatureHandler = () => {
        let temperature = props.temperatureData;
        if(props.text == "+") {
            temperature ++;
            props.setTemperatureHigh(temperature);
        } else if(props.text == "-") {
            temperature --;
            props.setTemperatureLow(temperature);
        }
    }

    const onClickFunction = props.setLight ? setLightHandler : setTemperatureHandler;

    return(
        <button className='button' onClick={onClickFunction}>{props.text}</button>
    );
}

export default Button;