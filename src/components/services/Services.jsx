const Services = () => {
  return (
    <div className="services mt-[45px] flex flex-col items-center" id="services">
      {/* Heading */}
      <div className="heading text-3xl font-bold mb-8 text-center [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black">
        Our Services
      </div>

      {/* Content */}
      <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
        {/* Card 1 */}
        <div className="card1 bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <div className="pic">
            <img src="/gear-parts.jpg" alt="Spare Parts" className="h-40 w-full object-cover rounded-t-lg" />
          </div>
          <div className="desc mt-4">
            <h2 className="text-xl font-semibold mb-2">Wide Range of Spare Parts</h2>
            <p className="text-gray-600">
              We offer a comprehensive selection of high-quality spare parts for tempos, ensuring optimal performance and longevity.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card2 bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <div className="pic">
            <img src="/mechanic.jpg" alt="Installation Support" className="h-40 w-full object-cover rounded-t-lg" />
          </div>
          <div className="desc mt-4">
            <h2 className="text-xl font-semibold mb-2">Expert Installation Support</h2>
            <p className="text-gray-600">
              Our experts assist with the installation of spare parts to keep your vehicle running smoothly.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card3 bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <div className="pic">
            <img src="/delivery.jpg" alt="Fast Delivery" className="h-40 w-full object-cover rounded-t-lg" />
          </div>
          <div className="desc mt-4">
            <h2 className="text-xl font-semibold mb-2">Fast Delivery</h2>
            <p className="text-gray-600">
              Receive your orders quickly with our fast and reliable same-day delivery service.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card4 bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <div className="pic">
            <img src="/support.jpg" alt="Customer Support" className="h-40 w-full object-cover rounded-t-lg" />
          </div>
          <div className="desc mt-4">
            <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
            <p className="text-gray-600">
              Our dedicated customer support team is here to assist you with any questions or issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
