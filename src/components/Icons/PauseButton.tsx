const PauseButtonIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      role="img"
      fill="none"
      aria-labelledby="Pause Button Icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM7 8H11V17H7V8ZM17 8H13V17H17V8Z"
        fill="white"
      />
    </svg>
  );
};

export default PauseButtonIcon;
