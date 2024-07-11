import Hero from "@/components/Home/Hero";
import OurProduct from "@/components/Home/OurProduct";
import ShopByCategory from "@/components/Home/ShopByCategory";
import ImageGallery from "@/components/ImageGallary/ImageGallery";

const Home = () => {
  return (
    <div>
      <Hero />
      <ShopByCategory />
      <ImageGallery />
      <OurProduct />
    </div>
  );
};

export default Home;
