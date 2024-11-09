import React from "react";

const reviews = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/50", 
      stars: 5,
      review: "Good service and top-quality parts, I found exactly what I needed for my van. The staff was really helpful and knowledgeable.",
      date: "1 Year ago",
      source: "Google",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/50", 
      stars: 4,
      review: "Satisfied with the purchase, good value for the price. Definitely recommend them!",
      date: "2 Years ago",
      source: "Justdial",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/50", 
      stars: 4,
      review: "Good product, definitely worth the money.",
      date: "3 Months ago",
      source: "Justdial",
    },
    {
      id: 4,
      imageUrl: "https://via.placeholder.com/50", 
      stars: 5,
      review: "Perfect quality and quick delivery, good service overall.",
      date: "10 Years ago",
      source: "Google",
    },
    {
      id: 5,
      imageUrl: "https://via.placeholder.com/50", 
      stars: 3,
      review: "Product is okay, does the job well.",
      date: "4 Years ago",
      source: "Justdial",
    },
    {
      id: 6,
      imageUrl: "https://via.placeholder.com/50", 
      stars: 5,
      review: "Been a customer for years.",
      date: "1 Year ago",
      source: "Google",
    },
  ];

const ReviewCard = ({ imageUrl, stars, review, date, source }) => {
  return (
    <div className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-sm">
      <div className="flex items-start">

        <img
          src={imageUrl}
          alt="user"
          className="w-10 h-10 rounded-full mr-4"
        />

        <img src={imageUrl} alt="user" className="w-10 h-10 rounded-full mr-4" />

        <div>
          <div className="flex">
            {[...Array(stars)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.588 4.881h5.134c.97 0 1.371 1.24.588 1.81l-4.15 3.002 1.588 4.882c.3.921-.755 1.688-1.539 1.128L10 14.18l-4.16 3.001c-.784.56-1.838-.207-1.539-1.128l1.588-4.881-4.15-3.002c-.783-.57-.382-1.81.588-1.81h5.134l1.588-4.882z" />
              </svg>
            ))}
          </div>
          <p className="mt-2 text-sm text-gray-500">
            {date} via {source}
          </p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{review}</p>
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <div className="py-10 bg-gray-50">

      <h2 className="text-3xl text-steel-blue-dark font-semibold text-center mb-8 [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black">A few words about us</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
