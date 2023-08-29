import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="current-time">
            <p>Current Time:</p>
            <p>{currentTime.toLocaleTimeString()}</p>
        </div>
    );
};

export default CurrentTime;
