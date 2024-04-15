import PasswordSuccessIcon from '@components/Icons/PasswordSuccessIcon';
import ErrorFormIcon from '@components/Icons/ErrorForm';
import { getTranslate } from "@helpers/transHelper";
const FormSuccessMessage: React.FC<any> = ({ success, error }) => {
  return (
    <div className="flex items-center mt-2 2xl:mt-[0.556vw] space-x-[5px] 2xl:space-x-[0.347vw] overflow-hidden ">
      {!success.hasEightOrMoreCharacters && !success.character && !success.lower && !success.number && !success.upparCase ?
        <>
          {error && <ErrorFormIcon className="w-[14px] h-[14px] 2xl:w-[0.729vw] 2xl:h-[0.729vw]" />}
          <div className="text-red text-caption 2xl:text-[0.833vw]">{error}</div>
        </>
        :
        <>
          {success.hasEightOrMoreCharacters && success.character && success.upparCase && success.lower && success.number ?
            <PasswordSuccessIcon className="w-[14px] h-[14px] 2xl:w-[0.729vw] 2xl:h-[0.729vw]" /> :
            <ErrorFormIcon className="w-[14px] h-[14px] 2xl:w-[0.729vw] 2xl:h-[0.729vw]" />
          }
          <div className=" text-caption 2xl:text-[0.833vw] w-full" >
            <span className={success.hasEightOrMoreCharacters ? "text-green" : "text-red"}>  {`${getTranslate('accountSingIn_ErrorMsg8')}`}</span>
            <span className={success.character ? "text-green" : "text-red"}>  {`${getTranslate('accountSingIn_ErrorMsg9')}`}</span>
            <span className={success.upparCase ? "text-green" : "text-red"}>  {`${getTranslate('accountSingIn_ErrorMsg10')}`}</span>
            <span className={success.lower ? "text-green" : "text-red"}>  {`${getTranslate('accountSingIn_ErrorMsg11')}`}</span>
            <span className={success.number ? "text-green" : "text-red"}>  {`${getTranslate('accountSingIn_ErrorMsg12')}`}</span>
          </div>
        </>
      }
    </div>
  );
};

export default FormSuccessMessage;
