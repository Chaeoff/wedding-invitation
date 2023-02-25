import { ReactNode } from "react";

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center bg-blue-200">
      {children}
    </div>
  );
};
