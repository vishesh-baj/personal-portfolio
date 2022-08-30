type RandomNumbrProps = {
  value: number;
  isPositive?: boolean;
  isNegative?: boolean;
  isZero?: boolean;
};

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumbrProps) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}
      {isZero && "zero"}
    </div>
  );
};

export default RandomNumber;
