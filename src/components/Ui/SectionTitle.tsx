import React from "react";

interface SectionTitleProps {
    label?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ label }) => {
    return (
        <>
            <div className="relative mb-20 lg:mb-0">
                <h4 className="relative font-normal">{label}</h4>
            </div>
        </>
    )
}

export default SectionTitle;