
import Minus from "@components/Icons/Minus"
import Plus from "@components/Icons/Plus"

type Props = {
  className?: string
  lineItem?: any
  quantity?: any
  plusDisabled?: boolean
}

const QuantitySelector = ({
  className = "",
  lineItem,
  quantity,
  plusDisabled = false,
}: Props) => {


  return (
    <div
      className={`${className} transition-all duration-300 flex bg-secondary w-[80px] lg:w-100 2xl:w-100-2xl h-30 2xl:h-30-2xl px-10 md:px-10-md lg:px-10 2xl:px-10-2xl  hover:border-graphite `}
    >
      <button
        className="outline-none"

        aria-label="decrease"
      >
        <Minus className={`h-[10px] w-[10px] md:h-[1.302vw] md:w-[1.302vw] lg:h-[10px] lg:w-[10px] 2xl:h-[0.694vw] 2xl:w-[0.694vw] stroke-white`} />
      </button>
      <div className="flex items-center justify-center">
        <input
          type={"text"}
          value={quantity}
          readOnly
          aria-label="Quantity"
          className="input-var w-full text-center text-body-text lg:text-body-text-lg 2xl:text-body-large-2xl text-white outline-none bg-secondary"
        />
      </div>
      <button
        className="outline-none"
        disabled={plusDisabled}

        aria-label="decrease"
      >
        <Plus
          className={`h-[10px] w-[10px] md:h-[1.302vw] md:w-[1.302vw] lg:h-[10px] lg:w-[10px] 2xl:h-[0.694vw] 2xl:w-[0.694vw]
            ${plusDisabled ? "stroke-gray-40" : "stroke-white"}
          `}
        />
      </button>
    </div>
  )
}

export default QuantitySelector
