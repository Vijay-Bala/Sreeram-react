/* eslint-disable react/prop-types */
import  { useState, useEffect } from "react";

const products = [
  {
    title: "Clutch Plate",
    description: "Engages and disengages the engine from the gearbox",
    tags: ["TRANSMISSION", "ENGINE COMPONENTS", "CLUTCH SYSTEM"],
    imageUrl: "/clutchplate.png",
  },
  {
    title: "Brake Shoe",
    description: "Provides friction to stop the vehicle by pressing against the brake drum",
    tags: ["BRAKING SYSTEM", "SAFETY","BRAKE COMPONENTS"],
    imageUrl: "/brakeshoe.jpg",
  },
  
    {
    title: "Leaf Springs",
    description: "absorbs shock from uneven road surfaces, ensuring smooth vehicle movement",
    tags: ["SHOCK ABSORBERS", "SUSPENSION"],
    imageUrl: "/leafspring.jpg",
    },
      
    {
    title: "Engine Mounting",
    description: "Supports the engine and absorbs vibrations, ensuring smooth engine operation",
    tags: ["ENGINE COMPONENTS", "VIBRATION CONTROL"],
    imageUrl: "/enginemount.jpg",
    },

    {
    title: "Steering Linkage",
    description: "Transmits the steering wheel’s motion to the wheels for directional control",
    tags: ["STEERING SYSTEM","CONTROL", "SUSPENSION"],
    imageUrl: "/steeringlinkage.jpg",
    },

    {
    title: "Fuel Pump",
    description: "Pumps fuel from the tank to the engine for efficient combustion",
    tags: ["ENGINE COMPONENTS", "FUEL SYSTEM"],
    imageUrl: "/fuelpump.jpg",
    },

    {
    title: "Alternator",
    description: "Generates electrical power for the vehicle while recharging the battery",
    tags: ["ELECTRICAL SYSTEM", "POWER GENERATION", "CHARING"],
    imageUrl: "/alternator.jpg",
    },

    {
    title: "Shock Absorbers",
    description: "Reduces shock from the road, providing stability and comfort during driving",
    tags: ["SUSPENSION", "COMFORT", "STABILITY"],
    imageUrl: "/shockabsorber.jpg",
    },

];

const ProductCard = ({ product }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
    <img
      src={product.imageUrl}
      alt={product.title}
      className="h-40 w-full object-cover"
    />
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="font-oswald text-lg font-bold text-steel-blue">
        {product.title}
      </h3>
      <p className="font-roboto text-gray-700 flex-grow">
        {product.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {product.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-semibold text-steel-blue border border-steel-blue rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProductRange = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const numberOfVisibleProducts = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + numberOfVisibleProducts) % products.length
        );
        setTransitioning(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + numberOfVisibleProducts
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-oswald font-bold text-steel-blue mb-6 [text-shadow:1px_2px_3px_var(--tw-shadow-color)] shadow-black">
        Our Product Range
      </h2>
      <h5 className="font-roboto text-lg md:text-xl m-6">
        From Engine Parts to Suspension, We Have It All
      </h5>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-opacity duration-500 ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductRange;
