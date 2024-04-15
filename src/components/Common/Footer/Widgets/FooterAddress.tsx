
import Link from "next/link";
interface FooterAddressProps {
  className?: string;
}
const FooterAddress: React.FC<FooterAddressProps> = ({ className = "" }) => {

  return (
    <div
      className={`${className}`}
    >
      <p className="text-white mb-30 lg:mb-40 2xl:mb-40-2xl !font-bold  uppercase">Хаяг байршил</p>
      <p className="mb-20 lg:mb-20 2xl:mb-20-2xl text-white">
        {`Улаанбаатар, Сүхбаатар дүүрэг 4 хороо, Партизаны гудамж 58-р байр`}
      </p>
      <div className="text-body-large md:text-body-large-md lg:text-body-large-lg 2xl:text-body-large-2xl">
        <div className="flex flex-col space-y-10 lg:space-y-10 2xl:space-y-10-2xl">
          <div className="flex">
            <p className="text-white">
              {`+(976) 96964224, 91917935`}
            </p>
          </div>
          <div className="flex">
            <span>
              <Link href="#" className="hover:underline">
                <a className="text-white">
                  info@grandbook.mn
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAddress;
