const FacebookIcon = ({ className = "", fillColor = "" }) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      fill={fillColor}>
      <path d="M43.2 33.8l1.7-10.9H34.5v-7c0-3 1.5-5.9 6.1-5.9h4.7V.7S41 0 36.9 0c-8.6 0-14.2 5.2-14.2 14.6v8.3h-9.5v10.9h9.5V60h11.7V33.8h8.8z"></path>
    </svg>
  );
};

export default FacebookIcon;
