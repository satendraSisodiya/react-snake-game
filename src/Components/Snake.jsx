const Snake = ({ segment }) => {
  return (
    <div>
      {segment.map((dot, i) => {
        const isHead = i === segment.length - 1;
        const style = {
          top: `${dot.y}%`,
          left: `${dot.x}%`,
          backgroundColor: isHead ? "green" : "gray",
        };

        return (
          <div
            className={` text-center font-bold w-6 h-6 bg-gray-700 absolute`}
            key={i}
            style={style}
          >
            {i}
          </div>
        );
      })}
    </div>
  );
};
export default Snake;