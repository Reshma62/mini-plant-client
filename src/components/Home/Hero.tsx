import { Link } from "react-router-dom";
import HeroImage from "../../assets/hero.jpg";
const Hero = () => {
  return (
    <section className="w-full py-10 md:py-16 lg:py-20 bg-custom-gradient">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <img
            src={HeroImage}
            width="1200"
            height="800"
            alt="Hero"
            className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
          <div className="flex flex-col justify-center space-y-4 text-white">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Discover the Perfect Plants for Your Home
              </h1>
              <p className="max-w-[600px] md:text-xl">
                Explore our wide selection of vibrant, healthy plants and get
                expert advice on care and maintenance.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                to="#"
                className=" text-xl font-semibold py-4 justify-center rounded-md bg-white px-8 text-[#4CAF50] shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 capitalize"
              >
                Shop Plants
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
