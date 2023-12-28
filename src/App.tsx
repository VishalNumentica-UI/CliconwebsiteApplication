import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePageMain } from "./Pages/HomePageMain";
import Layout from "./Pages/Layout";
import { SignInTab } from "./CommonFunctionalities/SignInTab";
import { ShopPageMain } from "./Components/ShopPage/ShopPageMain";
import { DashboardPage } from "./Components/Dashboard/DashboardPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePageMain />} />
            <Route path="/signIn" element={<SignInTab />} />
            <Route path="/shopPage" element={<ShopPageMain />} />
            <Route path="/Dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
