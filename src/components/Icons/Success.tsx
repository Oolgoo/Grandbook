const SuccessIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 15 14"
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="Success"
    >
      <path
        d="M0.5 7C0.5 3.13401 3.63401 0 7.5 0V0C11.366 0 14.5 3.13401 14.5 7V7C14.5 10.866 11.366 14 7.5 14V14C3.63401 14 0.5 10.866 0.5 7V7Z"
        fill="black"
      />
      <path
        d="M3.4165 7.25374L6.01182 9.84906L11.5832 4.27771"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};

export default SuccessIcon;
