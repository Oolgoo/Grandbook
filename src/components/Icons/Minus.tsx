export interface MinusProps {
  className?: string;
  strokeColor?: string;
}
const Minus: React.FC<MinusProps> = ({
  className = "",
  strokeColor = ""
}) => {

  return (
    <svg
      className={`${className}`}
      width="100%"
      height="100%"
      viewBox="0 0 14 14"
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="Minus"
    >
      <path d="M0 7H14" stroke={strokeColor} />
    </svg>
  );
};

export default Minus;
