import Link from "next/link";
import { FooterData } from "@data/FooterData";
import Social from "./Social";


interface FooterMenuProps {
  className?: string;
}

const FooterMenu: React.FC<FooterMenuProps> = ({ className = "" }) => {
  return (
    <div className="grid grid-cols-1 gap-y-20 lg:gap-y-0 lg:grid-cols-3">
      {FooterData.menu.map((item, index) => (

        <div className="flex flex-col" key={index}>
          <p className="text-white mb-10 lg:mb-40 2xl:mb-40-2xl !font-bold uppercase">{item.label}</p>
          <ul
            className={`${className} flex flex-col list-none ml-0`}
            key={index}
          >

            {item.child.map((child, index) => (
              <li key={index} className="my-0 mb-10 lg:mb-10 2xl:mb-10-2xl">
                <Link href={child.handle} passHref>
                  <a
                    aria-label="footer-menu"
                    className=" text-body-text lg:text-body-large 2xl:text-body-large-2xl text-white hover:underline"
                  >
                    {child.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <p className="text-white mb-10 lg:mb-40 2xl:mb-40-2xl !font-bold uppercase">{'Social'}</p>

        <Social className="my-20 lg:my-20 2xl:my-20-2xl" />


        <Link href={'https://www.facebook.com/groups/971897386323259'}>
          <a target="_blanck" className="text-white mb-30 lg:mb-40 2xl:mb-40-2xl !font-bold uppercase underline">
            {'Community'}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FooterMenu;
