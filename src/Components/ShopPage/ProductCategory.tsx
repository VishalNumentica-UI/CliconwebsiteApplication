
import { RadioButton } from "../../CommonFunctionalities/RadioButton";
import { CheckBox } from "../../CommonFunctionalities/CheckBox";

export function ProductCategory() {
  const categoryList = [
    "Electronics Devices",
    "Computer & Laptop",
    "Computer Accessories",
    "SmartPhone",
    "Headphone",
    "Mobile Accessories",
    "Gaming Console",
    "Camera & Photo",
    "TV & Homes Appliances",
    "Watchs & Accessories",
    "GPS & Navigation",
    "Warable Technology",
  ];

  const priceRange = [
    "All Price",
    "Under $20",
    "$25 to $100",
    "$100 to $300",
    "$300 to $500",
    "$500 to $1,000",
    "$1,000 to $10,000",
  ];
  const popularBrands = [
    "Apple",
    "Google",
    "Microsoft",
    "Samsung",
    "Dell",
    "HP",
    "Symphony",
    "Xiaomi",
    "Sony",
    "Panasonic",
    "LG",
    "LG",
    "One Plus",
  ];
  return (
    <div>
      <div>CATEGORY</div>
      <div>
        {categoryList.map((category) => {
          return <RadioButton title={category} />;
        })}
      </div>

      <div>PRICE RANGE</div>
      <div>
        {priceRange.map((eachPrice) => {
          return <RadioButton title={eachPrice} />;
        })}
      </div>
      <div>POPULAR BRANDS</div>
      <div>
        {popularBrands.map((brand) => {
          return <CheckBox title={brand} />;
        })}
      </div>
    </div>
  );
}
