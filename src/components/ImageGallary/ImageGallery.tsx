import CommonHeading from "../shared/CommonHeading";
import G1 from "@/assets/g1.jpg";
import G2 from "@/assets/g2.jpg";
import G3 from "@/assets/g3.jpg";
import G4 from "@/assets/g4.jpg";

const images = [
  { src: G1, rows: "row-span-1", cols: "col-span-1" },
  { src: G2, rows: "row-span-1", cols: "col-span-2" },
  { src: G3, rows: "row-span-2", cols: "col-span-1" },
  { src: G4, rows: "row-span-1", cols: "col-span-2" },
  { src: G1, rows: "row-span-1", cols: "col-span-1" },
  { src: G2, rows: "row-span-1", cols: "col-span-1" },
  { src: G3, rows: "row-span-1", cols: "col-span-1" },
  { src: G4, rows: "row-span-1", cols: "col-span-2" },
];

const ImageGallery = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <CommonHeading
        title="Explore Our Plant Gallery"
        subTitle="Image Gallery"
        description="Browse through our collection of beautiful plant photos."
      />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {images.map((image, index) => (
            <div key={index} className={`relative ${image.rows} ${image.cols}`}>
              <img
                src={image.src}
                alt={`Mosaic ${index}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
