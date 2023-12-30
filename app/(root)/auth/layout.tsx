import Image from "next/image";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <>
      <div className="relative h-[90dvh] max-h-screen w-full">
        <Image
          src="/assets/images/petroleum-bg.jpg"
          alt="شرکت ملی نفت ایران"
          width={1920}
          height={1080}
          className="absolute h-screen w-full object-cover"
        />
        <div className="absolute z-10 flex h-full w-full items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
};
export default layout;
