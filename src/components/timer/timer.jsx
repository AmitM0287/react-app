import React, {useEffect, useState} from "react";
import './timer.css'


function TimerComponent() {
    const [timeLeft, setTimeLeft] = useState(700);

    useEffect(() => {
        const time = setInterval(() => {
            setTimeLeft(timeLeft-1);
        }, 1000);
        return () => {
            clearInterval(time);
        } 
    }, [timeLeft]);

    return (
        <div className="timerCont">
            <h1>Timer App</h1>
            <span>
                <h2> Time left {timeLeft} seconds </h2>
            </span>
        </div>
    );
}

export default TimerComponent;
