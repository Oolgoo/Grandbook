const ErrorFormIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="error-form-icon"
    >
      <path
        d="M0.280273 7.5C0.280273 3.63401 3.41428 0.5 7.28027 0.5C11.1463 0.5 14.2803 3.63401 14.2803 7.5C14.2803 11.366 11.1463 14.5 7.28027 14.5C3.41428 14.5 0.280273 11.366 0.280273 7.5Z"
        fill="#EC0000"
      />
      <path d="M7.28027 2.5V8.5" stroke="white" strokeWidth="2" />
      <circle cx="7.28027" cy="11" r="0.5" fill="white" stroke="white" />
    </svg>
  );
};

export default ErrorFormIcon;
