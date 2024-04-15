const CalendarIcon = ({ className = "", strokeColor = "black" }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none">
            <path d="M15.125 3.51367H4.14777C3.28169 3.51367 2.57959 4.21577 2.57959 5.08185V16.0591C2.57959 16.9252 3.28169 17.6273 4.14777 17.6273H15.125C15.9911 17.6273 16.6932 16.9252 16.6932 16.0591V5.08185C16.6932 4.21577 15.9911 3.51367 15.125 3.51367Z" stroke={strokeColor} strokeWidth="1.56818" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.7725 1.94531V5.08168" stroke={strokeColor} strokeWidth="1.56818" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 1.94531V5.08168" stroke={strokeColor} strokeWidth="1.56818" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.57959 8.2168H16.6932" stroke={strokeColor} strokeWidth="1.56818" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default CalendarIcon;
