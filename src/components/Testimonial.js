import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import required slick styles
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const testimonials = [
    {
      quote:
        "Suraj is an exceptional video editor, always incredibly responsive and accommodating even with last-minute requests, consistently delivering high-quality work exactly as envisioned. I am so grateful to have him producing our Gen She Podcast.",
      name: "Avni Barman",
      position: "Founder of Gen She",
      image: "/avni.png", // Ensure this path is correct
    },
    {
      quote:
        "Suraj is the most hardworking editor I have worked with. Super cooperative and polite. He has never sacrificed the quality in any video. Happy working with him.",
      name: "Vansh Gujral",
      position: "Content Strategist At TRS Clips",
      image: "/vansh.png", // Ensure this path is correct
    },
  ];

  return (
    <section id="testimonials" className="py-10 w-full bg-white dark:bg-gray-900 transition-all">
      <div className="container mx-auto text-center px-4 max-w-4xl">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
          Clients <span className="text-yellow-500 dark:text-yellow-400">Feedback</span>
        </h2>

        {/* Ensure Slider has enough space */}
        <div className="max-w-3xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 flex flex-col items-center">
                {/* Quote */}
                <p className="text-lg text-black dark:text-gray-300 italic mb-4 px-4">
                  "{testimonial.quote}"
                </p>

                {/* Client Info */}
                <div className="flex flex-col items-center space-y-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-yellow-500 shadow-lg"
                    onError={(e) => (e.target.src = "/fallback.jpg")} // Fallback image in case of errors
                  />
                  <h4 className="text-lg font-bold text-black dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
