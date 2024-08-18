import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
