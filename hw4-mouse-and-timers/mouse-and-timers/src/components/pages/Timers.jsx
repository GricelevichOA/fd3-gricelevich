import { useEffect, useState } from "react";

export function Timers({
  speed,
  faster,
  slower,
  reset,
  timer2val,
  timer3val,
  changeTimer2val,
  changeTimer3val,
}) {
  const [timer1, setTimer1] = useState(0);
  const [timer2, setTimer2] = useState(timer2val);
  const [timer3, setTimer3] = useState(timer3val);

  function resetTimers() {
    reset();
    setTimer1(0);
    setTimer2(0);
    setTimer3(0);
  }

  // timer 1
  useEffect(() => {
    const timerId1 = setInterval(() => {
      setTimer1((prev) => prev + 1);
    }, speed);

    return () => {
      clearTimeout(timerId1);
    };
  }, [speed]);

  // // timer 2
  useEffect(() => {
    const timerId2 = setInterval(() => {
      setTimer2((prev) => prev + 1);
    }, speed);

    return () => {
      clearTimeout(timerId2);
    };
  }, [speed]);

  useEffect(() => {
    return () => {
      changeTimer2val(timer2);
    };
  }, [timer2]);

  // timer3
  useEffect(() => {
    const timerId3 = setInterval(() => {
      setTimer3((prev) => prev + 1);
    }, speed);

    return () => {
      clearInterval(timerId3);
    };
  }, [speed]);

  useEffect(() => {
    return () => {
      changeTimer3val(timer3);
    };
  }, [timer3]);

  return (
    <div className="container">
      <div className="timer__buttons">
        <button onClick={slower}>Slower</button>
        <button onClick={faster}>Faster</button>
        <button onClick={resetTimers}>Reset</button>
      </div>
      <div className="timer__timers">
        <div className="timer__timer">Timer 1: {timer1}</div>
        <div className="timer__timer">Timer 2: {timer2}</div>
        <div className="timer__timer">Timer 3: {timer3}</div>
      </div>
    </div>
  );
}
