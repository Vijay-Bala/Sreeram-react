import { FaUsers, FaMedal, FaShieldAlt, FaThumbsUp } from "react-icons/fa";

const WhyTrustUs = () => {
  const trustPoints = [
    {
      icon: <FaUsers className="text-4xl text-gray-500" />,
      title: "2,000+ Satisfied Customers",
      description:
        "Our commitment to quality has earned us a loyal customer base.",
    },
    {
      icon: <FaMedal className="text-4xl text-yellow-500" />,
      title: "50+ Years of Experience",
      description:
        "Decades of industry expertise in providing quality automobile parts.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-500" />,
      title: "Trusted Brands",
      description: "We partner with the most reliable brands in the industry.",
    },
    {
      icon: <FaThumbsUp className="text-4xl text-green-500" />,
      title: "Quality Assurance",
      description: "Every part we sell undergoes stringent quality checks.",
    },
  ];

  return (
    <div className="py-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center [text-shadow:1px_2px_2px_var(--tw-shadow-color)] shadow-slate-900">
        Why Trust Us?
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {trustPoints.map((point, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 bg-white shadow-lg rounded-lg"
          >
            {point.icon}
            <h3 className="font-semibold text-lg mt-4 mb-2">{point.title}</h3>
            <p className="text-gray-600">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyTrustUs;
