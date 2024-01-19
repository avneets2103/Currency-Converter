import { useState, useRef } from "react";
import "./App.css";
import InputBox from "./components/InputBox";

function App() {
  const [from, setFrom] = useState(0);
  const [fromCurr, setFromCurr] = useState("inr");
  const [to, setTo] = useState(0);
  const [toCurr, setToCurr] = useState("inr");
  const ConvertRef = useRef();
  return (
    <>
      <div className="body">
        <div className="converter">
          <InputBox
            message="From"
            from={from}
            setFrom={setFrom}
            fromCurr={fromCurr}
            setFromCurr={setFromCurr}
            to={to}
            setTo={setTo}
            toCurr={toCurr}
            setToCurr={setToCurr}
            useRef={useRef}
          />
          <button className="swap" onClick={()=>{
            const a = toCurr;const b = fromCurr;
            setFromCurr(a);
            setToCurr(b);
          }}>Swap</button>
          <InputBox
            message="To"
            from={from}
            setFrom={setFrom}
            fromCurr={fromCurr}
            setFromCurr={setFromCurr}
            to={to}
            setTo={setTo}
            toCurr={toCurr}
            setToCurr={setToCurr}
            useRef={useRef}
          />
        </div>
        <button className="convert" ref={ConvertRef} onClick={()=>{window.navigator.clipboard.writeText(to);}}>Copy</button>
      </div>
    </>
  );
}

export default App;
