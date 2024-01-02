import { Hero } from "./Hero";
import { Features } from "./Features";
import { BestDeals } from "./BestDeals";
import { ShopCategory } from "./ShopCategory";
import { FeatureProduct } from "./FeatureProduct";
import { AdSpecialBanner } from "./AdSpecialBanner";
import { NewProductsBanner } from "./NewProductsBanner";
import { ComputerAccessories } from "./ComputerAccessories";
import { ProductSellTypeComponent } from "./ProductSellTypeComponent";
import { LatestNews } from "./LatestNews";
import { NewsLetter } from "./NewsLetter";

export function HomePageMain() {
  return (
    <div>
      {/* <AdPopup /> */}
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
