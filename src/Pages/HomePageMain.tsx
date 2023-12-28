import { AdPopup } from "../Components/HomePage/AdPopup";
import { Hero } from "../Components/HomePage/Hero";
import { Features } from "../Components/HomePage/Features";
import { BestDeals } from "../Components/HomePage/BestDeals";
import { ShopCategory } from "../Components/HomePage/ShopCategory";
import { FeatureProduct } from "../Components/HomePage/FeatureProduct";
import { AdSpecialBanner } from "../Components/HomePage/AdSpecialBanner";
import { NewProductsBanner } from "../Components/HomePage/NewProductsBanner";
import { ComputerAccessories } from "../Components/HomePage/ComputerAccessories";
import { ProductSellTypeComponent } from "../Components/HomePage/ProductSellTypeComponent";
import { LatestNews } from "../Components/HomePage/LatestNews";
import { NewsLetter } from "../Components/HomePage/NewsLetter";

export function HomePageMain() {
  return (
    <div>
      <AdPopup />
      <Hero />
      <Features />
      <BestDeals />
      <ShopCategory />
      <FeatureProduct />
      <NewProductsBanner />
      <ComputerAccessories />
      <AdSpecialBanner />
      <ProductSellTypeComponent />
      <LatestNews />
      <NewsLetter />
    </div>
  );
}
