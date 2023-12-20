function FinishedScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const persentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(persentage)}% )
      </p>

      <p className="highscore">(highscore: {highScore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz!
      </button>
    </>
  );
}

export default FinishedScreen;
