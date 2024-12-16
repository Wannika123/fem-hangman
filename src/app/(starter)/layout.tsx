import StarterHeader from "@/component/starter/StarterHeader";

export default function StarterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="screen">
        <StarterHeader />
        <main>{children}</main> 
      </div>  
    </>
  );
}