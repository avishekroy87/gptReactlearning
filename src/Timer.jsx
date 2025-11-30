import React, { useState, useEffect } from "react";

function Timer() {
    const [count, setCount] = useState(0);
    const [isrunning, setIsrunning] = useState(true);

    useEffect(() => {
        if (!isrunning) return;

        const interval = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isrunning]);
    return (
        <>
            <div>Timer</div> {count}
            <button onClick={() => setIsrunning(!isrunning)}>
                {isrunning ? "Pause" : "Start"}
            </button>
        </>
    );
}

export default Timer;
