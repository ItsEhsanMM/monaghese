import React from "react";

interface Props {
  children: React.ReactNode;
}

const ContentWrapper = ({ children }: Props) => {
  return <div className="min-h-screen bg-color-primary px-5">{children}</div>;
};
export default ContentWrapper;
