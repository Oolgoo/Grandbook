
import FooterAddress from "./Widgets/FooterAddress";
import FooterMenu from "./Widgets/FooterMenu";
import Social from "./Widgets/Social";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'next-i18next'
import Copyright from '@components/Ui/Copyright';
const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <footer className="relative bg-primary">
      <div className="tw-container">
        <div className="grid grid-cols-1 gap-y-60 lg:gap-y-0 lg:grid-cols-2 gap-x-100 lg:gap-x-60 2xl:gap-x-60-2xl py-40 lg:py-60 2xl:py-60-2xl">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-60 lg:gap-x-60 2xl:gap-x-60-2xl">
            <div className="hidden lg:flex">
              <Link href={'/'}>
                <a className="block relative w-[200px] lg:w-[200px] 2xl:w-[13.889vw]">
                  <Image
                    src={'https://res.cloudinary.com/dn8v9a99m/image/upload/v1689813385/grandbook-logo-white_syryui.png'}
                    layout="responsive"
                    width={'150px'}
                    height={'35px'}

                  />
                </a>
              </Link>
            </div>
            <div className="w-full">
              <FooterAddress />
            </div>
          </div>

          <div className="w-full">
            <FooterMenu />

          </div>

        </div>

        <div className="flex justify-between flex-col-reverse md:flex-row lg:flex-row items-center lg:items-end pb-20 lg:pb-20 2xl:pb-20-2xl lg:pr-60 2xl:pr-60-2xl">
          <Copyright label={`Зохиогчийн эрх хуулиар хамгаалагдсан`} />

        </div>
      </div>
    </footer>

  );
};

export default Footer;
