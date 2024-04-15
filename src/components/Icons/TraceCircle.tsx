const TraceCircle = ({ className = "" }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 22 22"
      fill="none"
      role="img"
      aria-labelledby="Trace Circle"
    >
      <path
        d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
        stroke="black"
        strokeWidth="2"
      />
      <path d="M4 18L18 4" stroke="black" strokeWidth="2" />
    </svg>
  );
};

export default TraceCircle;
