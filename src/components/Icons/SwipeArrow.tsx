
const SwipeArrowIcon = ({
    className = "",
    strokeColor = "#000"
}) => {
    return (
        <svg className={className} width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 10L37 10" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26.4233 1L37 10L26.4233 19" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default SwipeArrowIcon;