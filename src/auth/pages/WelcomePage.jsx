/*!

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Box } from '@mui/system';

// core component
import { IndexNavbar, Footer, PageHeader } from "../../components";
import { ImageGallery } from "auth/components";

export const WelcomePage = () => {
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
        <PageHeader>
          <ImageGallery />
        </PageHeader>
        <div className="main">
        </div>
        <Footer />
      </div>
    </>
  );
}
