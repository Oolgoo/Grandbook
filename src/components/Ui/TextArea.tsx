import React, { TextareaHTMLAttributes } from "react";
import cn from "classnames";
import { useTranslation } from "next-i18next";

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
	inputClassName?: string;
	labelKey?: string;
	name?: string;
	placeholderKey?: string;
	errorKey?: string;
	shadow?: boolean;
	variant?: "normal" | "solid" | "outline";
}

const variantClasses = {
	normal:
		"border border-t-gray-main py-2 outline-none mb-4 w-full text-body-large-lg bg-inherit text-black2 placeholder:text-[#ccc]",
	solid:
		"",
	outline: "",
};

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
	const { t } = useTranslation();
	const {
		className,
		labelKey,
		name,
		placeholderKey,
		errorKey,
		variant = "normal",
		shadow = false,
		inputClassName,
		...rest
	} = props;
	return (
		<div className={`${className} mb-10 lg:mb-20 2xl:mb-20-2xl`}>
			{labelKey && (
				<label
					htmlFor={name}
					className="block text-black2 font-semibold text-sm leading-none mb-3"
				>
					{t(labelKey)}
				</label>
			)}
			<textarea
				id={name}
				name={name}
				className="block w-full outline-none border border-t-gray-main bg-transparent px-15 lg:px-15 2xl:px-15-2xl py-10 lg:py-10 2xl:py-10-2xl text-graphite placeholder:text-body-text lg:placeholder:text-body-text 2xl:placeholder:text-body-text-2xl placeholder:text-gray-60 text-body-text lg:text-body-text 2xl:text-body-text-2xl "
				autoComplete="off"
				spellCheck="false"
				rows={5}
				ref={ref}
				// @ts-ignore
				placeholder={t(placeholderKey)}
				{...rest}
			/>
			{errorKey && <p className="my-2 text-xs text-red-500">{t(errorKey)}</p>}
		</div>
	);
});

export default TextArea;
