import ProductClient from "./product-client"

export function generateStaticParams() {
  return [
    { id: "radiance-serum" },
    { id: "hydra-cream" },
    { id: "gentle-cleanser" },
    { id: "renewal-oil" },
    { id: "day-cream-spf" },
    { id: "night-cream" },
  ]
}

export default function ProductPage() {
  return <ProductClient />
}
