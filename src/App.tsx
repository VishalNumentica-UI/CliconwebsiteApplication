import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePageMain } from "./Components/HomePage/HomePageMain";
import Layout from "./Layout";
import { SignIn } from "./Components/Login/SignIn";
import { ShopPageMain } from "./Components/ShopPage/ShopPageMain";
import { DashboardPage } from "./Components/Dashboard/DashboardPage";
import { ForgetPassword } from "./Components/Login/ForgetPassword";
import { ResetPassword } from "./Components/Login/ResetPassword";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePageMain />} />
            <Route path="/shopPage" element={<ShopPageMain />} />
            <Route path="/Dashboard" element={<DashboardPage />} />
          </Route>

          <Route path="/" element={<Layout />}>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
