const Grid1Icon = ({ className = "", fillColor = "#000" }) => {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="6" height="6" rx="1" fill={fillColor}></rect>
      <rect y="7" width="6" height="6" rx="1" fill={fillColor}></rect>
      <rect y="14" width="6" height="6" rx="1" fill={fillColor}></rect>
      <rect x="7" width="6" height="6" rx="1" fill={fillColor}></rect>
      <rect x="7" y="7" width="6" height="6" rx="1" fill={fillColor}></rect>
      <rect x="7" y="14" width="6" height="6" rx="1" fill={fillColor}></rect>
      <rect x="14" width="6" height="6" rx="1" fill={fillColor}></rect>
      <rect x="14" y="7" width="6" height="6" rx="1" fill={fillColor}>
      </rect><rect x="14" y="14" width="6" height="6" rx="1" fill={fillColor}></rect></svg>
  );
};

export default Grid1Icon;
