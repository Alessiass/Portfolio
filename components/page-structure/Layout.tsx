import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

import {ChildrenProp} from "../../interfaces/interfaces"

const Layout = ({children}:ChildrenProp) => {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
