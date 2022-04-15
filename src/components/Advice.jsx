import AdviceNumber from "./AdviceNumber";

export default function Advice(props) {
  return (
    <div className="main">
      <div className="advice">
        <AdviceNumber text={`ADVICE #${props.advice && props.advice.slip.id}`} />
        <p className="quote">
        &ldquo;{props.advice && props.advice.slip.advice}&rdquo;
        </p>

        <div
        //   src="/img/pattern-divider-desktop.svg"
        //   alt="pattern-divider"
          className={`divider`}
        ></div>

        <div className="dice-ball">
          <div className="dice" onClick={props.getAdvice}>
            <img src="/img/icon-dice.svg" alt="dice" />
          </div>
        </div>
      </div>
    </div>
  );
}
