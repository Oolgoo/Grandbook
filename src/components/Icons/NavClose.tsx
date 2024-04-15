const NavCloseIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="Nav Close Icon"
    >
      <path
        d="M25 1L1.33997 24.66L25 1Z"
        stroke="#1A1817"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M24.66 24.66L1 1L24.66 24.66Z"
        stroke="#1A1817"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default NavCloseIcon;
