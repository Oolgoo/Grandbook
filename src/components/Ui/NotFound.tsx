import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'

const Button = dynamic(() => import("./Button"));
export interface NotFoundProps {
  title?: string;
  label?: string;
  handle?: string;
  img?: string;
}
const NotFound: React.FC<NotFoundProps> = ({
  title = "",

}) => {
  const router = useRouter()
  return (
    <div className={`relative h-screen w-full overflow-hidden`}>

      <div className="absolute z-10 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full">
        <div className="w-full text-center">
          <h5 className="text-graphite uppercase mb-40">{title}</h5>
          <Button variants="primary" label="Нүүр хуудас" onClick={() => router.push('/')} />
        </div>
      </div>

    </div>
  );
};

export default NotFound;
