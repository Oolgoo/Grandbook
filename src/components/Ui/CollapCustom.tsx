
import ArrowDownIcon from '@components/Icons/ArrowDown';
export interface CollapCustomProps {
    label?: string;
    headClass?: string;
    className?: string;
    icon?: string;
    count?: string;
}
const CollapCustom: React.FC<CollapCustomProps> = ({
    label,
    headClass,
    className,
    icon = "#000",
    count
}) => {
    return (
        <>
            <div className={`${headClass} group flex justify-between items-center py-10 lg:py-20 2xl:py-20-2xl bg-white mb-0  border-b border-b-gray-90 transition-all duration-300`}>
                <div className="w-[calc(100%-40px)] lg:w-[calc(100%-40px)] 2xl:w-[calc(100%-2.778vw)] mr-10 relative">
                    <h6 className="font-bold">{label}</h6>
                    <div className="absoute top-0 right-0">{count}</div>
                </div>

                <div className={`${className} w-40 lg:w-40 2xl:w-40-2xl h-40 lg:h-40 2xl:h-40-2xl border border-gray-90 rounded-full flex items-center justify-center bg-gray-90 transition-all duration-600`}>
                    <ArrowDownIcon strokeColor={`${icon}`} className={`w-10 lg:w-[12px] 2xl:w-[0.625vw]`} />
                </div>
            </div>
        </>
    )
}
export default CollapCustom;