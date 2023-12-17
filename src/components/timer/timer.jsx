import React, {useEffect, useState} from "react";
import './timer.css'


function TimerComponent() {
    const [timePassedSeconds, setTimePassedSeconds] = useState(0);
    const [timePassedMinutes, setTimePassedMinutes] = useState(0);
    const [timePassedHours, setTimePassedHours] = useState(0);

    const timeConst = 60;

    useEffect(() => {
        const time = setInterval(() => {
            setTimePassedSeconds(timePassedSeconds === timeConst-1 ? 0 : timePassedSeconds+1);
        }, 1000);
        return () => {
            clearInterval(time);
        } 
    }, [timePassedSeconds]);

    useEffect(() => {
        if (timePassedMinutes === timeConst-1 && timePassedSeconds === timeConst-1) {
            setTimePassedMinutes(0);
        } 
        else if (timePassedSeconds === timeConst-1) {
            setTimePassedMinutes(timePassedMinutes+1);
        }
    }, [timePassedMinutes, timePassedSeconds]);

    useEffect(() => {
        if (timePassedMinutes === timeConst-1 && timePassedSeconds === timeConst-1) {
            setTimePassedHours(timePassedHours+1);
        }
    }, [timePassedHours, timePassedMinutes, timePassedSeconds]);

    return (
        <div className="timer-cont">
            <h1 className="large-font">Timer App</h1>
            <span className="medium-font"> Time passed {timePassedHours} : {timePassedMinutes} : {timePassedSeconds} <span className="small-font">(hours : minutes : seconds)</span></span>
        </div>
    );
}

export default TimerComponent;
