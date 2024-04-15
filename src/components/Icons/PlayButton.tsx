const PlayButtonIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 25 24"
      role="img"
      fill="none"
      aria-labelledby="Play button"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24ZM9.5 17.1962L18.5 12L9.5 6.80385L9.5 17.1962Z"

      />
    </svg>
  );
};

export default PlayButtonIcon;
