const Grid3Icon = ({ className = "", strokeColor = "#CBC9BC" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 25 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="Grid icon"
    >
      <rect
        x="1.19531"
        y="1"
        width="5.66667"
        height="15"
        stroke={strokeColor}
      />
      <rect
        x="9.86328"
        y="1"
        width="5.66667"
        height="15"
        stroke={strokeColor}
      />
      <rect
        x="18.5273"
        y="1"
        width="5.66667"
        height="15"
        stroke={strokeColor}
      />
    </svg>
  );
};

export default Grid3Icon;
