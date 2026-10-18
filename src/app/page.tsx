import Hero from "@/components/Hero";
import FallingProducts from "@/components/products/FallingProducts";
import Products from "@/components/products/Products";
import RisingProducts from "@/components/products/RisingProducts";


export default function Home() {
  return (
    <div>

      <div className="bg-[#F8FBF8]">
        <Hero />

        <RisingProducts />

        <FallingProducts />

        <Products />
      </div>
    </div>
  );
}
