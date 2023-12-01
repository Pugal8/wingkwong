import React, { useState, useEffect } from 'react';
import './styles.css';

function Timer({ stopTimer }) {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    let intervalId;

    if (!stopTimer) {
      intervalId = setInterval(() => {
        if (second >= 59) {
          setMinute((prevMinute) => prevMinute + 1);
          setSecond(0);
        } else {
          setSecond((prevSecond) => prevSecond + 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [stopTimer, second]);

  return (
    <div className="timer-container">
      {stopTimer ? (
        <div>
          <h3 className="total-time">
            Total time taken:
            {`${minute}:${second} seconds`}
          </h3>
        </div>
      ) : (
        <p className="timer">
          {`Time: ${minute}:${second < 10 ? '0' : ''}${second}`}
        </p>
      )}
    </div>
  );
}

export default Timer;