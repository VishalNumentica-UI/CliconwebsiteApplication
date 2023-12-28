
import {
  browserHistory,
  cardAddress,
  compareIcon,
  dashboard,
  heartIcon,
  logout,
  orderHistory,
  setting,
  shoppingCart,
  trackOrder,
} from "../icons/svgIcons";

import { EachDashboardItem } from "./EachDashboardItem";
export function DashboardNav() {
  const dashBoardList = [
    {
      icon: dashboard,
      navTitle: "Dashboard",
    },
    {
      icon: orderHistory,
      navTitle: "Order History",
    },
    {
      icon: trackOrder,
      navTitle: "Track Order",
    },
    {
      icon: shoppingCart,
      navTitle: "Shopping Cart",
    },
    {
      icon: heartIcon,
      navTitle: "Wishlist",
    },
    {
      icon: compareIcon,
      navTitle: "Compare",
    },
    {
      icon: cardAddress,
      navTitle: " Cards & Address",
    },
    {
      icon: browserHistory,
      navTitle: "Browsing History",
    },
    {
      icon: setting,
      navTitle: "Setting",
    },

    {
      icon: logout,
      navTitle: "Log-out",
    },
  ];
  return (
    <div>
      {dashBoardList.map((item) => {
        return <EachDashboardItem eachItem={item} />;
      })}
    </div>
  );
}
