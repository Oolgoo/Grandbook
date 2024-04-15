import React from "react";

interface PromoProps {
    className?: string;
    label?: string;
    description?: string;
}

const Promo: React.FC<PromoProps> = ({
    className,
    label,
    description
}) => {
    return (

        <h5 className={`${className} text-white`}>
            {label}
        </h5>

    )
}
export default Promo;