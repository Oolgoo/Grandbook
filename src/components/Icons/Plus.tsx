const Plus = ({ className = "", strokeColor = "" }) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 14 14"
      role="img"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="Plus"
    >
      <path d="M0 7H14" stroke={strokeColor} />
      <path d="M7 0V14" stroke={strokeColor} />
    </svg>
  );
};

export default Plus;
