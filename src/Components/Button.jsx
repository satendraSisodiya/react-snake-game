const Button = ({ onUp, onDown, onLeft, onRight }) => {
  return (
    <div className="buttons">
      <div className="upwards flex justify-center">
        <input
          className="up p-3 w-20 bg-red-600"
          onClick={onUp}
          type="button"
          value="Up"
        />
      </div>
      <div className="sideways flex justify-center m-3">
        <input
          className="left mr-5 w-20 p-3 bg-red-600"
          onClick={onLeft}
          type="button"
          value="Left"
        />
        <input
          className="right w-20 ml-5 p-3 bg-red-600"
          onClick={onRight}
          type="button"
          value="Right"
        />
      </div>
      <div className="downwards flex justify-center">
        <input
          className="down w-20 p-3 bg-red-600"
          onClick={onDown}
          type="button"
          value="Down"
        />
      </div>
    </div>
  );
};
export default Button;
