/* eslint-disable react/no-unescaped-entities */
import popular1 from "../../images/popular1.png";
import popular2 from "../../images/popular2.png";

const About = () => {
  return (
    <div className="bg-gray-100 mt-[40px] dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">About Tempo House</h1>
        <div className="flex flex-col md:flex-row items-start mb-6">
          <div className="md:w-1/2 mb-4 md:mb-0 pr-4">
            <p className="mb-4">
              Tempo House in Mount Road, Chennai is known for satisfactorily
              catering to the demands of its customer base. The business came
              into existence in 1971 and has, since then, been a recognized name
              in its field. Located at No 37, Behind UC, GP Road, Boo Begum
              Street, Mount Road-600002, it is in close proximity to the LIC
              building, a prominent landmark in the area.
            </p>
            <p className="mb-4">
              Tempo House has earned credentials like JD Verified and JD Pay,
              substantiating the reliability and trustworthiness of the
              business. The establishment strives to provide a positive
              experience through its offerings, ensuring that customer
              satisfaction is at the core of its operations.
            </p>
            <p className="mb-4">
              The accepted modes of payment, such as Cash, MasterCard, Visa
              Card, Debit Cards, Credit Cards, and Cheques, make business
              transactions easy and seamless, further contributing to an
              effective process.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col items-center justify-center space-x-4">
            <h2 className="text-2xl font-bold mb-4">Popular Products</h2>
            <div className="flex justify-center space-x-4 w-full">
              <div className="flex flex-col items-center w-full md:w-[48%] min-w-[100px] min-h-[100px]">
                <img
                  src={popular1}
                  alt="Popular Product 1"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <h3 className="mt-2 text-center text-md font-semibold font-oswald">
                  TATA Winger Ace HT Delivery Van
                </h3>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
                  Get Best Price
                </button>
              </div>
              <div className="flex flex-col items-center w-full md:w-[48%] min-w-[100px] min-h-[100px]">
                <img
                  src={popular2}
                  alt="Popular Product 2"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <h3 className="mt-2 text-center text-md font-semibold">
                  TATA Spoiler
                </h3>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
                  Get Best Price
                </button>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Customer Centricity</h2>
        <p className="mb-4">
          Customer centricity is at the core of Tempo House in Mount Road,
          Chennai. This belief has led the business to build long-term
          relationships with its customers. Ensuring a positive customer
          experience and making available goods and services of top-notch
          quality is of prime importance.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Engaging with JD Mart</h2>
        <p className="mb-4">
          India's leading B2B marketplace, JD Mart, ensures that engaging in
          business activities is a seamless process for small and medium
          enterprises as well as large businesses. This portal allows businesses
          to reach their audience and showcase their products and services
          through a digital catalogue, enabling them to thrive in a competitive
          market.
        </p>
        {/* Address Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">
            <strong>Address:</strong>
          </p>
          <p className="mb-4">
            No 37, GP Road, Boo Begum Street,
            <br />
            Mount Road, Chennai - 600002
            <br />
            (Behind LIC)
          </p>
          <p className="mb-2">
            <strong>Contact:</strong> 07947127349
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
