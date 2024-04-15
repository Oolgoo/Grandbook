const EmailIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 44 45"
      fill="none"
      role="img"
      aria-labelledby="email icon"
    >
      <path
        opacity="0.3"
        d="M0.5 22.7246C0.5 10.8505 10.1259 1.22461 22 1.22461C33.8741 1.22461 43.5 10.8505 43.5 22.7246C43.5 34.5987 33.8741 44.2246 22 44.2246C10.1259 44.2246 0.5 34.5987 0.5 22.7246Z"
        stroke="#1A1817"
      />
      <path
        d="M11.3994 14.7246L22 23.2581L32.6006 14.7246H11.3994ZM10 15.8405V30.5295H34V15.8405L22.5488 25.06C22.393 25.1846 22.1995 25.2526 22 25.2526C21.8005 25.2526 21.607 25.1846 21.4512 25.06L10 15.8405Z"
        fill="#1A1817"
      />
    </svg>
  );
};

export default EmailIcon;
