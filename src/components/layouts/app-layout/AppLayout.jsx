/* eslint-disable */

import AppRoutes from "../../../core/app-routes/AppRoutes";
import Footer from "../footer/Footer";

const AppLayout = () => {
  return (
    <div>
      <section className="section">
        <AppRoutes />
      </section>
      <Footer />
    </div>
  );
};

export default AppLayout;
