const CloseSize = ({ className = "", onClick }) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      role="img"
      aria-labelledby="close size"
    >
      <path
        d="M24.9999 0.5L1.33984 24.16L24.9999 0.5Z"
        stroke="#1A1817"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M24.66 24.16L1 0.5L24.66 24.16Z"
        stroke="#1A1817"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CloseSize;
