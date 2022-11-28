/*!

*/
import React from "react";

// core components
import { IndexNavbar, PageHeader, Footer } from "components";

// sections for this page/view
import { Basics, Navbars, Tabs, PaginationSection, Notifications, Typography, JavaScript, NucleoIcons, Signup, Examples} from './';

export const Index2 = () => {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Basics />
          <Navbars />
          <Tabs />
          <PaginationSection />
          <Notifications />
          <Typography />
          <JavaScript />
          <NucleoIcons />
          <Signup />
          <Examples />
          {/* <Download /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
