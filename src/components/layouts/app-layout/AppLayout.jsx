/* eslint-disable */

import AppRoutes from "../../../core/app-routes/AppRoutes";
import ScrollToTop from "../../../utils/window-scrolls/WindowScrollToTop";
import Footer from "../footer/Footer";

const AppLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <section className="section">
        <AppRoutes />
      </section>
      <Footer />
    </div>
  );
};

export default AppLayout;
