const ArrowDownIcon = ({ className = "", strokeColor = '' }) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 13 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="arrowDownIcon"
    >
      <path d="M12.1953 1L6.69531 5.8125L1.19531 1" stroke={strokeColor} />
    </svg>
  );
};

export default ArrowDownIcon;
