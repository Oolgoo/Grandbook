import PasswordSuccessIcon from '@components/Icons/PasswordSuccessIcon';
import { getTranslate } from "@helpers/transHelper";

const SuccessSubscribe: React.FC<any> = ({ error }) => {
  return (
    <div className="flex items-center mt-2 2xl:mt-[0.556vw] space-x-[5px] 2xl:space-x-[0.347vw] overflow-hidden ">
      <PasswordSuccessIcon className="w-[14px] h-[14px] 2xl:w-[0.729vw] 2xl:h-[0.729vw]" />
      <div className="text-green text-caption 2xl:text-[0.833vw]">{getTranslate(error)}</div>
    </div>
  );
};

export default SuccessSubscribe;
