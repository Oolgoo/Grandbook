const DrawerIcon = ({ className = "", fillColor = "" }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      role="img"
      aria-labelledby="drawer icon"
      fill={fillColor}
    >
      <path d="M0 6H24" stroke={fillColor} />
      <path d="M0 12H24" stroke={fillColor} />
      <path d="M0 18H24" stroke={fillColor} />
    </svg>
  );
};

export default DrawerIcon;
