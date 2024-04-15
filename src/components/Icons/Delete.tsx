const DeleteIcon = ({ className = "" }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 64 64" width={'100%'} height={'100%'} fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22 4v6.47H12v3.236h40V10.47H42V4H22zm3.333 6.47V7.235H38.67v3.235H25.333zm20.001 9.707h3.333V59H15.334V20.177h3.333v35.588h26.667V20.177zm-15 29.116V23.412h3.334v25.881h-3.334z" fill={className}></path></svg>
    );
};

export default DeleteIcon;
