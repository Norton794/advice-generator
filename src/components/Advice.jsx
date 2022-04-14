import react from "react";
import AdviceNumber from "./AdviceNumber";

export default function Advice(props) {
  return (
    <div className="main">
      <div className="advice">
        <AdviceNumber text="ADVICE #117" />
        <p className="quote">
         "{props.advice && props.advice.slip.advice}"
        </p>

        <img
          src="/img/pattern-divider-desktop.svg"
          alt="pattern-divider"
          style={{ marginTop: "20px" }}
        />

        <div className="dice-ball">
          <div className="dice">
            <img src="/img/icon-dice.svg" alt="dice" />
          </div>
        </div>
      </div>
    </div>
  );
}
