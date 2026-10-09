import Hero from "@/components/Hero";
import FallingProducts from "@/components/products/FallingProducts";
import Products from "@/components/products/Products";
import RisingProducts from "@/components/products/RisingProducts";
import Marquee from "@/components/shared/Marquee";

export default function Home() {
  return (
    <div>
      <Marquee />

      <div className="bg-[#F8FBF8]">
        <Hero />

        <RisingProducts />

        <FallingProducts />

        <Products />
      </div>
    </div>
  );
}
