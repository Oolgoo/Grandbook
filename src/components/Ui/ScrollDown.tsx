import React from "react";

interface ScrollDownProps {
    className?: string;
    onClick?: () => void;
}


const ScrollDown: React.FC<ScrollDownProps> = ({
    className,
    onClick,
}) => {
    return (
        <div className={`${className} `}>
            <div
                className={`absolute bottom-40 right-60 w-[48px] h-[48px] lg:w-[80px] lg:h-[80px] border border-bgTrans hover:border-white flex justify-center items-center transition-all duration-300 ease-in-out rounded-[80px] cursor-pointer`}
                onClick={onClick}
            >
                <div className=" h-[24px] w-[24px] lg:h-[48px] lg:w-[48px] bg-[url('https://www.tde.nl/images/misc/icon-scroll-mouse-animated.svg')] bg-repeat bg-full">

                </div>
            </div>
        </div>
    )
}
export default ScrollDown;