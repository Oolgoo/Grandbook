
interface CopyrightProps {
    label: string;
}
const Copyright: React.FC<CopyrightProps> = ({
    label,
}) => {

    return (
        <div className="text-body-text 2xl:text-body-text-2xl text-white text-left">
            {' '}
            © {new Date().getFullYear()}{' '}
            {label}
        </div>
    )
}

export default Copyright;