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
import { SignUp } from "./Components/Login/SignUp";
import EmailVerification from "./Components/Login/EmailVerification";
import ErrorPage from "./Components/Login/ErrorPage";
import { DashboardSetting } from "./Components/Dashboard/DashboardSetting";
import { CheckOut } from "./Components/ShopPage/CheckOut";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePageMain />} />
            <Route path="/shopPage" element={<ShopPageMain />} />
            <Route path="/Dashboard" element={<DashboardPage />} />
            <Route path="/dashboardSetting" element={<DashboardSetting />} />
            <Route path="/checkOut" element={<CheckOut />} />
          </Route>

          <Route path="/" element={<Layout />}>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/signUp" element={<SignUp />}></Route>
            <Route path="/emailVerification" element={<EmailVerification />} />
            <Route path="/errorPage" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
