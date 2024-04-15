import React, { InputHTMLAttributes } from 'react';
import dynamic from 'next/dynamic';
import classNames from 'classnames';

/* A way to import a component that is not used in the main page. */
const FormErrorMessage = dynamic(() => import('./FormErrorMessage'));
const FormSuccessMessage = dynamic(() => import('./FormSuccessMessage'));

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  htmlFor?: string;
  variants?: string;
  type?: string;
  placeholder?: string;
  error?: string | null;
  errorType?: any;
  label?: string;
  value?: any;
  onBlur?: (_e: any) => void;
  onKeyUp?: (_e: any) => void;
  onChange?: (_e: any) => void;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}
const InputForm: React.FC<InputFormProps> = ({
  name = "",
  id = 'float_fill',
  htmlFor = 'float_fill',
  variants = 'primary',
  type = 'text',
  placeholder = '',
  error = null,
  errorType = null,
  label,
  value,
  onBlur,
  onKeyUp,
  onChange,
  className,
  disabled = false,
  ariaLabel = 'in-label'
}) => {
  const classes = classNames({
    '': true,
    ' ': variants === 'primary',
  });
  return (
    <div className={``}>
      <label className="block mb-10 lg:mb-10 2xl:mb-10-2xl">
        <h6 className="text-graphite mb-10 lg:mb-10 2xl:mb-10-2xl">{label}</h6>
        <input
          required
          name={name}
          type={type}
          className="block w-full outline-none border border-t-gray-main bg-transparent px-15 lg:px-15 2xl:px-15-2xl py-10 lg:py-10 2xl:py-10-2xl text-graphite placeholder:text-body-text lg:placeholder:text-body-text 2xl:placeholder:text-body-text-2xl placeholder:text-gray-60 text-body-text lg:text-body-text 2xl:text-body-text-2xl"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>

      {/* <label className='block relative'>

        <span>{label}</span>
        <input
          type={type}
          id={id + Math.random()}
          className={``}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
          onChange={onChange}
          disabled={disabled}
          aria-label={ariaLabel}
        />

      </label> */}


    </div>
  );
};

export default InputForm;
