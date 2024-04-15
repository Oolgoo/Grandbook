import classNames from "classnames"
export interface ButtonProps {
  type?: "button" | "submit"
  variants?:
  | { buttonVariant }
  | "primary"
  | "secondary"
  | "tertiary"
  | "tertiaryWhite"
  | "addToBag"
  | "white"
  | "black"
  | "small"
  | "giftBox"
  | "custom"
  | "hoverUnderline"
  | "blog"
  | "klarna"
  | "whiteNew"
  | "blackNew"
  | "disabled"
  | "disabled&not"
  | "tertiaryWhiteNew"
  | "primaryWhite"
  | "tertiary1"
  label?: string
  onClick?: () => void
  disabled?: boolean
  className?: string
  id?: string
  component?: any
}
const Button: React.FC<ButtonProps> = ({ type = "button", variants = "primary", label, onClick, disabled = false, className = "", id, component }) => {
  const classes = classNames({
    "outline-none inline-block cursor-pointer transition-all duration-300 disabled:cursor-not-allowed": true,

    "bg-primary cursor-pointer text-white hover:bg-primary py-15 px-20 md:py-15 lg:py-15 2xl:py-15-2xl 2xl:px-20-2xl text-body-small md:text-body-small-md lg:text-body-large 2xl:text-body-large-2xl disabled:bg-neutral transition-all duration-300 ease-linear rounded lg:rounded 2xl:rounded-[0.278vw] uppercase":
      variants === "primary",

    "text-body-small md:text-body-small-md lg:text-body-large 2xl:text-body-small-2xl bg-primary cursor-pointer text-white hover:text-white py-10 px-[20px] lg:py-10 2xl:py-10-2xl 2xl:px-[1.389vw] disabled:bg-white disabled:text-neutral transition-all duration-300 ease-linear hover:bg-secondary":
      variants === "secondary",

    "text-primary text-body-text lg:text-body-large text-body-large-2xl cursor-pointer border-0 rounded-none relative disabled:bg-transparent disabled:text-neutral disabled:before:bg-neutral disabled:hover:before:scale-100 hover:text-subdued before:bg-primary before:absolute before:w-full before:h-px before:left-0 before:scale-x-100 before:transition-transform before:duration-300 before:top-[calc(100%+0px)]   before:origin-top-left-0-2/4 hover:before:scale-x-0 hover:before:origin-top-left-full-2/4 hover:before:bg-primary":
      variants === "tertiary",


    "text-graphite text-body-text lg:text-body-text-lg cursor-pointer 2xl:text-body-text-2xl border-0 rounded-none relative disabled:bg-transparent disabled:text-neutral disabled:after:bg-neutral hover:text-graphite before:bg-graphite before:absolute before:w-full before:h-px before:left-0 before:scale-x-0 before:transition-transform before:duration-300 before:top-[calc(100%+2px)]   before:origin-top-left-full-2/4 hover:before:scale-x-100 hover:before:origin-top-left-0-2/4 hover:before:bg-subdued":
      variants === "hoverUnderline",


    "rounded  border-graphite cursor-pointer text-white hover:bg-subdued hover:border-subdued py-[16.5px] px-20 md:py-[2.148vw] lg:py-[15px] 2xl:py-[1.042vw] 2xl:px-[1.389vw] text-body-small md:text-body-small-md lg:text-body-large 2xl:text-body-small-2xl 2xl:rounded-[0.278vw] disabled:border-neutral disabled:bg-white disabled:text-neutral disabled:border-[1px] transition-all duration-300 ease-linear":
      variants === "primaryWhite",

    "text-graphite text-body-text lg:text-body-text-lg cursor-pointer 2xl:text-body-text-2xl rounded-none relative hover:bg-white disabled:bg-transparent disabled:text-[#B8B8B8] disabled:before:bg-[#B8B8B8] border-b-[1px] border-graphite hover:border-transparent ":
      variants === "whiteNew",

    "relative bg-transparent text-white pb-[2px] text-body-text md:text-body-large-md lg:text-body-text-lg 2xl:text-body-text-2xl transition-colors before:absolute before:left-0 before:top-0  before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#1A1817]  before:transition-transform before:duration-300 before:content-[''] before:hover:text-white before:hover:scale-x-100  border-solid border-b-[1px] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue focus:p-[10px] focus:before:z-[-1] focus:border-none focus:after:absolute focus:after:h-[1px] focus:after:w-[80%] focus:after:bg-white focuse:after:origin-top-left-0-2/4 focus:after:left-[10%] focus:after:top-[calc(80%)]":
      variants === "blackNew",

    "text-white text-body-text lg:text-body-text-lg cursor-pointer 2xl:text-body-text-2xl border-0 rounded-none relative disabled:bg-transparent disabled:text-neutral disabled:before:bg-neutral disabled:hover:before:scale-100 hover:text-white before:bg-white before:absolute before:w-full before:h-px before:left-0 before:scale-x-100 before:transition-transform before:duration-300 before:top-[calc(100%+2px)]   before:origin-top-left-0-2/4 hover:before:scale-x-0 hover:before:origin-top-left-full-2/4 hover:before:bg-white ":
      variants === "tertiaryWhite",


    "border-0 bg-transparent rounded-none text-tertiary cursor-pointer relative after:bg-tertiary after:absolute after:w-full after:h-px after:-bottom-[2px] after:2xl:-bottom-[0.139vw] after:left-0 after:right-0 focus:bg-transparent disabled:bg-transparent disabled:text-neutral disabled:after:bg-neutral hover:text-subdued hover:after:bg-subdued hover:after:h-0  text-[14px] 2xl:text-[0.972vw] leading-[140%] transition-all duration-300 ease-linear ":
      variants === "white",

    "border-0 rounded-none text-graphite relative cursor-pointer after:absolute after:w-full after:h-px after:-bottom-[2px] after:2xl:-bottom-[0.139vw] after:left-0 after:right-0 focus:bg-transparent disabled:bg-transparent disabled:text-neutral disabled:after:bg-neutral hover:text-subdued hover:after:bg-subdued lg:text-[14px] text-[12px] 2xl:text-[0.972vw] leading-[140%] transition-all duration-300 ease-linear":
      variants === "black",

    "bg-graphite text-white text-body-small uppercase cursor-pointer md:text-body-small-md lg:text-body-large 2xl:text-body-large-2xl hover:bg-subdued py-[5px] md:py-[0.651vw] lg:py-[5px] 2xl:py-[0.347vw] px-20 md:px-20-md lg:px-20 2xl:px-20-2xl transition-all duration-300 ease-linear ":
      variants === "small",


    "relative bg-transparent text-white pb-[2px] lg:text-body-text-lg 2xl:text-body-text-2xl transition-colors before:absolute before:left-0 before:top-0  before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#1A1817]  before:transition-transform before:duration-300 before:content-[''] before:hover:text-white before:hover:scale-x-100  border-solid border-b-[1px] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue focus:p-[10px] focus:before:z-[-1] focus:border-none focus:after:absolute focus:after:h-[1px] focus:after:w-[80%] focus:after:bg-white focuse:after:origin-top-left-0-2/4 focus:after:left-[10%] focus:after:top-[calc(80%)]":
      variants === "blackNew",

    "rounded bg-neutral text-white text-body-small cursor-pointer md:text-body-small-md lg:text-body-large 2xl:text-body-large-2xl hover:bg-neutral py-[5px] md:py-[0.651vw] lg:py-[5px] 2xl:py-[0.347vw] px-20 md:px-20-md lg:px-20 2xl:px-20-2xl 2xl:rounded-[0.278vw] transition-all duration-300 ease-linear ":
      variants === "disabled",
    "rounded bg-neutral text-white text-body-small cursor-pointer md:text-body-small-md lg:text-body-large 2xl:text-body-large-2xl hover:bg-neutral py-[5px] md:py-[0.651vw] lg:py-[5px] 2xl:py-[0.347vw] px-20 md:px-20-md lg:px-20 2xl:px-20-2xl 2xl:rounded-[0.278vw] transition-all  cursor-not-allowed":
      variants === "disabled&not",

    "text-white text-body-text md:text-body-large-md lg:text-body-text-lg cursor-pointer 2xl:text-body-text-2xl border-0 rounded-none relative disabled:bg-transparent disabled:text-neutral disabled:before:bg-neutral disabled:hover:before:scale-100 hover:text-white before:bg-white before:absolute before:w-full before:h-px before:left-0 before:scale-x-100 before:transition-transform before:duration-300 before:top-[calc(100%+2px)]   before:origin-top-left-0-2/4 hover:before:scale-x-0 hover:before:origin-top-left-full-2/4 hover:before:bg-white ":
      variants === "tertiaryWhiteNew",
  })
  return (
    <button
      type={type}
      aria-label="Button"
      className={`${classes} ${className}`}
      onClick={onClick}
      disabled={disabled}
      id={id}
    >
      {component ? component : label}

    </button>
  )
}

export default Button

