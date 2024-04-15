import dynamic from "next/dynamic";
import classNames from "classnames";

/* A way to import a component that is not used in the main page. */
const Grid1Icon = dynamic(() => import("@components/Icons/Grid1"));
const Grid2Icon = dynamic(() => import("@components/Icons/Grid2"));
const Grid3Icon = dynamic(() => import("@components/Icons/Grid3"));
const Grid4Icon = dynamic(() => import("@components/Icons/Grid4"));

interface GridViewProps {
    active?: boolean;
    onClick?: () => void;
}
const GridView: React.FC<GridViewProps> = ({ active, onClick }) => {
    const classes = classNames({
        "relative w-40 lg:w-40 2xl:w-40-2xl h-40 lg:h-40 2xl:h-40-2xl transition-all duration-300 ease-in-out": true,
    });

    return (
        <div className="flex flex-row items-center bg-transparent">

            <button
                aria-label="Grid"
                type="button"
                className={`${classes}`}
                onClick={onClick}
            >
                <Grid1Icon className={``} fillColor={active ? "#d9d9d9" : "#191b1d"} />

            </button>
            <button
                aria-label="Grid"
                type="button"
                className={`${classes}`}
                onClick={onClick}
            >

                <Grid2Icon fillColor={`${active ? '#191b1d' : '#d9d9d9'}`} />
            </button>
        </div>
    );
};

export default GridView;
