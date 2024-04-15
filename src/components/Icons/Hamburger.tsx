const HamburgerIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="Hamburger"
    >
      <path d="M0 6H24" stroke="#1A1817" />
      <path d="M0 12H24" stroke="#1A1817" />
      <path d="M0 18H24" stroke="#1A1817" />
    </svg>
  );
};

export default HamburgerIcon;
