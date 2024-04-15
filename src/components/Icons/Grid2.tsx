const Grid2Icon = ({ className = "", fillColor = "#000" }) => {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="9" height="9" rx="1" fill={fillColor}></rect>
      <rect y="11" width="9" height="9" rx="1" fill={fillColor}></rect>
      <rect x="11" width="9" height="9" rx="1" fill={fillColor}></rect>
      <rect x="11" y="11" width="9" height="9" rx="1" fill={fillColor}></rect>
    </svg>
  );
};

export default Grid2Icon;
