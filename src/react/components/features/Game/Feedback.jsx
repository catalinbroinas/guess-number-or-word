
function Feedback({ message }) {
  return (
    <>
      {message && <p className="game__feedback shadow-1">{message}</p>}
    </>
  );
}

export default Feedback;
