const ErrorIcon = ({
  className = "",
  fill = "#EC0000",
  background = "#ffffff",
}) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="error-icon"
    >
      <path
        d="M0.599609 7C0.599609 3.13401 3.73362 0 7.59961 0C11.4656 0 14.5996 3.13401 14.5996 7C14.5996 10.866 11.4656 14 7.59961 14C3.73362 14 0.599609 10.866 0.599609 7Z"
        fill={background}
      />
      <path d="M7.59961 2V8" stroke={fill} strokeWidth="2" />
      <circle cx="7.59961" cy="10.5" r="0.5" fill={fill} stroke={fill} />
    </svg>
  );
};

export default ErrorIcon;
