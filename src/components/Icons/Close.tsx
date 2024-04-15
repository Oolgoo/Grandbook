const CloseIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
      role="img"
      aria-labelledby="icon-close"
      xmlns="http://www.w3.org/2000/svg"
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

export default CloseIcon;
