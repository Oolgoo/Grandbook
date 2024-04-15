const LnkArrow = ({
    className = "",
    fillColor = "#fff"
}) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 14">
            <path
                fill={fillColor}
                d="M14.3.1l-.2.2c-.1.1-.1.4 0 .5l5.5 5.6H.9c-.2 0-.4.2-.4.4v.3c0 .2.2.4.4.4h18.8l-5.5 5.6c-.1.1-.1.4 0 .5l.2.2c.1.1.4.1.5 0l6.5-6.6c.1-.1.1-.4 0-.5L14.9.1c-.2-.1-.4-.1-.6 0z"></path>

        </svg>
    );
};

export default LnkArrow;
