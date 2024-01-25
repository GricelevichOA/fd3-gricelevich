import "../App.css";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { Mouse } from "./pages/Mouse";
import { Timers } from "./pages/Timers";
import { useEffect, useState } from "react";

const INITIAL_TIMER_INTERVAL_MS = 1000;

function App() {
  const [timer2val, setTimer2val] = useState(0);
  const [timer3val, setTimer3val] = useState(0);

  const [speed, setSpeed] = useState(INITIAL_TIMER_INTERVAL_MS);

  function intervalFaster() {
    setSpeed((prev) => prev / 2);
  }

  function intervalSlower() {
    setSpeed((prev) => prev * 2);
  }

  function intervalReset() {
    setTimer2val(0);
    setTimer3val(0);
    setSpeed(INITIAL_TIMER_INTERVAL_MS);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer3val !== 0) {
        setTimer3val((prev) => prev + 1);
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [speed, timer3val]);

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar">
          <Link to={"/mouse"}>Mouse</Link>
          <Link to={"/timers"}>Timers</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/mouse" />} />
          <Route path="/mouse" element={<Mouse />} />
          <Route
            path="/timers"
            element={
              <Timers
                speed={speed}
                faster={intervalFaster}
                slower={intervalSlower}
                reset={intervalReset}
                timer2val={timer2val}
                timer3val={timer3val}
                changeTimer2val={(newVal) => {
                  setTimer2val(newVal);
                }}
                changeTimer3val={(newVal) => {
                  setTimer3val(newVal);
                }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
