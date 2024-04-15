import LnkArrow from '@components/Icons/LnkArrow';
import classNames from 'classnames';
export interface ButtonIconProps {
    type?: 'button' | 'submit';
    variants?:
    | 'primary'
    | 'custom'

    label?: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    id?: string;
    ref?: string;
}
const ButtonIcon: React.FC<ButtonIconProps> = ({
    type = 'button',
    variants = 'primary',
    label,
    onClick,
    disabled = false,
    className = '',
    id,
    ref
}) => {
    const classes = classNames({
        'relative outline-none inline-block disabled:cursor-not-allowed':
            true,

        '':
            variants === 'primary',

        'outline-none ':
            variants === 'custom'

    });
    return (
        <button
            type={type}
            aria-label="Button"
            className={`${classes} ${className} group 
    
            h-40 lg:h-50 2xl:h-50-2xl w-40 lg:w-50 2xl:w-50-2xl
      
      text-graphite
      hover:text-white
      
      overflow-hidden 
      
      before:transition-all 
      before:duration-[600ms] 
      before:ease-btn-anim
      before:bg-graphite 
      before:absolute 
      before:inset-0 
      before:translate-y-full 
      before:z-[10]
      hover:before:translate-y-0 
      
      after:transition-all
      after:duration-[600ms]
      after:ease-btn-anim
      after:absolute 
      after:bg-black 
      after:inset-0
      
      `}
            onClick={onClick}
            disabled={disabled}
            id={id}
            ref={ref}
        >
            <span className="relative text-graphite z-10 group-hover:text-white flex overflow-clip w-full h-full">
                <span className="flex items-center justify-center w-full translate-y-0 visible will-change-transform transition-all duration-[600ms] ease-btn-anim group-hover:-translate-y-full">
                    <LnkArrow fillColor="#fff" className=" rotate-180 w-[13px] lg:w-15 2xl:w-15-2xl h-[12px] lg:h-15 2xl:h-15-2xl" />
                </span>
                <span className="flex items-center justify-center h-full  right-0 absolute top-full left-0 translate-y-0 visible will-change-transform transition-all duration-[600ms] ease-btn-anim  group-hover:-translate-y-full">
                    <LnkArrow fillColor="#fff" className=" rotate-180 w-[13px] lg:w-15 2xl:w-15-2xl h-[12px] lg:h-15 2xl:h-15-2xl" />
                </span>
            </span>

        </button>
    );
};

export default ButtonIcon;
