interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-full min-h-screen text-zinc-700 font-batang w-full flex-col items-center justify-start bg-[#A9ACC2]">
      {children}
    </div>
  );
};
