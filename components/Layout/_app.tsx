import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import BeforeFooter from "./beforeFooter";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default AppLayout;
