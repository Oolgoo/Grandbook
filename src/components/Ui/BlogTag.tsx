import classNames from "classnames";
import { useRouter } from "next/router";
interface BlogTagsProps {
	label: string;
	onClick?: () => void;
}
const BlogTags: React.FC<BlogTagsProps> = ({ label, onClick }) => {
	const router = useRouter();

	const classes = classNames({
		"": true,
	});



	return (
		<button
			aria-label="Button"
			className={`${classes} flex items-center justify-between`}
			onClick={onClick}
		>
			<span
				className="text-body-text lg:text-body-text-lg 2xl:text-body-large-2xl text-gray-40"
			>
				{label}
			</span>
		</button>
	);
};

export default BlogTags;
