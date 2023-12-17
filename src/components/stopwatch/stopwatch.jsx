import React, {useEffect, useState, useRef} from "react";
import './stopwatch.css'
import '../../App.css'


function StopwatchComponent() {
    const intervalRef = useRef(null);

    const [time, setTime] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning) {
            /* Set up the interval to update the time */
            intervalRef.current = setInterval(() => {
                setTime(Date.now() - startTime); /* Update time based on the current time */
            }, 10);
            /* Clear the interval when the component unmounts or the effect re-runs */
            return () => clearInterval(intervalRef.current);
        }
    }, [isRunning, startTime]);

    function startStop() {
        if (isRunning) {
            clearInterval(intervalRef.current); /* If stopwatch is already running, clear the interval */
        } else {
            setStartTime(Date.now() - time); /* Adjust start time to account for paused time */
        }
        setIsRunning(!isRunning); /* Toggle the running state */
    }

    function reset() {
        clearInterval(intervalRef.current); /* Clear the interval */
        setTime(0); /* Reset time to 0 */
        setIsRunning(false); /* Set running state to false */
    }

    const milliseconds = Math.floor((time % 1000) / 10, 2);
    const seconds = Math.floor((time / 1000) % 60, 2);
    const minutes = Math.floor((time / (60 * 1000)) % 60, 2);
    const hours = Math.floor(time / (60 * 60 * 1000), 2);

    return (
        <div className="timer-cont">
            <span className="large-font"> Stopwatch </span>
            <span className="small-font">(hours : minutes : seconds : milli seconds) </span>
            <span className="medium-font"> {hours.toString().padStart(2, '0')} : {minutes.toString().padStart(2, '0')} : {seconds.toString().padStart(2, '0')}.{milliseconds.toString().padStart(2, '0')} </span>
            <div className="timer-actions">
                <button onClick={startStop}> {isRunning ? "Stop" : "Start"} </button>
                <button onClick={reset}> Reset </button>
            </div>
        </div>
    );
}

export default StopwatchComponent;
