import React from "react";

interface Props {
  children: React.ReactNode;
}

const ContentWrapper = ({ children }: Props) => {
  return <div className="bg-color-primary min-h-screen px-5">{children}</div>;
};
export default ContentWrapper;
