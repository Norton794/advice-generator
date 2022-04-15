import { useState, useEffect } from "react";
import "./App.css";
import Advice from "./components/Advice";
import axios from "axios";

export default function App() {
  const [advice, setAdvice] = useState("");

  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((resp) => {
        setAdvice(resp.data);
      })
      .catch((err) => console.log("Error", err));
  };

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((resp) => {
        console.log(resp.data)
        setAdvice(resp.data);
      })
      .catch((err) => console.log("Error", err));
  }, []);

  return (
    <div className="App">
      <Advice advice={advice} getAdvice={getAdvice} />
    </div>
  );
}
