import ErrorFormIcon from '@components/Icons/ErrorForm';
interface FormErrorMessageProps {
  error: any;
}
const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ error }) => {
  return (
    <div className="flex items-center mt-2 2xl:mt-[0.556vw] space-x-[5px] 2xl:space-x-[0.347vw] overflow-hidden">
      <ErrorFormIcon className="w-[14px] h-[14px] 2xl:w-[0.729vw] 2xl:h-[0.729vw]" />
      <div className="text-red text-caption 2xl:text-[0.833vw] w-full">{error}</div>
    </div>
  );
};

export default FormErrorMessage;
