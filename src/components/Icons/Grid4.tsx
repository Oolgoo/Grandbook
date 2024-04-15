const Grid4Icon = ({ className = "", strokeColor = "#CBC9BC" }) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 25 17"
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="Grid icon"
    >
      <rect x="1.19531" y="1" width="3.5" height="6" stroke={strokeColor} />
      <rect x="7.69531" y="1" width="3.5" height="6" stroke={strokeColor} />
      <rect x="14.1953" y="1" width="3.5" height="6" stroke={strokeColor} />
      <rect x="20.6953" y="1" width="3.5" height="6" stroke={strokeColor} />
      <rect x="1.19531" y="10" width="3.5" height="6" stroke={strokeColor} />
      <rect x="7.69531" y="10" width="3.5" height="6" stroke={strokeColor} />
      <rect x="14.1953" y="10" width="3.5" height="6" stroke={strokeColor} />
      <rect x="20.6953" y="10" width="3.5" height="6" stroke={strokeColor} />
    </svg>
  );
};

export default Grid4Icon;
