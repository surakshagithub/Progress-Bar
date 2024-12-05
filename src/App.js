import { useEffect, useState } from "react";
import { ProgressBar } from "./component/ProgressBar";
import "./style.css";

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((prevValue) => prevValue + 1);
    }, 50);
  }, []);

  return (
    <div className="app">
      <span>Progress Bar</span>
      <ProgressBar
        value={value}
        onComplete={() => {
          setSuccess(true);
        }}
      />
      <span>{success ? "Complete!" : "Loading..."}</span>
    </div>
  );
}

export default App;
