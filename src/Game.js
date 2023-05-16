import React from "react";

function Game({ question, onclickVariant, step, questions }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h3>{question.title}</h3>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onclickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
