/** Preview images — swap paths when theme screenshots are added */
const IMG = [
  "/img/Furniture.png",
  "/img/Marketplace.png",
  "/img/Fashion.png",
  "/img/Electronics.png",
  "/img/Jewellery.png",
  "/img/Single_product.png",
  "/img/Market_place_2.png",
  "/img/Grocery.png",
  "/img/Jewellery_2.png",
] as const;

export const STOREFRONT_THEMES = [
  "Furniture",
  "Marketplace",
  "Fashion",
  "Electronics",
  "Jewellery",
  "Single Product",
  "Marketplace-2",
  "Grocery",
  "Jewellery-2",
].map((title, i) => ({
  title,
  image: IMG[i % IMG.length],
}));
