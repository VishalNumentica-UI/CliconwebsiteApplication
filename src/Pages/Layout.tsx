import { NavigationServices } from "../CommonFunctionalities/NavigationServices";
import { Navigation } from "../Components/HomePage/Navigation";
import { Footer } from "../Components/HomePage/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <NavigationServices />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
