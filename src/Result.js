function Result({ correct, questions }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Siz {questions.length} ta savoldan {correct} tasiga to'g'ri javob
        berdinigiz!
      </h2>
      <a href="/">
        <button>Yana bir bor urinib ko'ring</button>
      </a>
    </div>
  );
}

export default Result;
