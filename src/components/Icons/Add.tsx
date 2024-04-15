const AddIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 14 14"
      fill="none"
      role="img"
      aria-labelledby="addIcon"
    >
      <path d="M0 7H14" stroke="#1A1817" />
      <path d="M7 0V14" stroke="#1A1817" />
    </svg>
  );
};

export default AddIcon;
