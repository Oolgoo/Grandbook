const CloseDrawerIcon = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
      fill="none"
      role="img"
      aria-labelledby="icon-close"
    >
      <path
        d="M18.9999 1L1.25488 18.745L18.9999 1Z"
        stroke="#1C1C1C"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M18.745 18.745L1 1L18.745 18.745Z"
        stroke="#1C1C1C"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CloseDrawerIcon;
