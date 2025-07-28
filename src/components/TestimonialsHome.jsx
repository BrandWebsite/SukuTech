import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jessica Warren",
    role: "CTO, Nexa Digital",
    rating: 5,
    quote:
      "Working with this team transformed our digital presence from outdated to outstanding. They didn’t just build a platform—they built a digital experience that reflects our brand's true identity. The project was delivered on time, with excellent communication at every stage.",
  },
  {
    name: "Samuel Agyeman",
    role: "Founder, AgyemTech",
    rating: 4,
    quote:
      "Their ability to translate complex technical needs into user-friendly solutions is impressive. Our cloud migration was seamless, and the support after deployment was prompt and consistent. I would confidently recommend them to any serious business looking for reliable tech partners.",
  },
  {
    name: "Maria López",
    role: "Marketing Director, TechNova",
    rating: 5,
    quote:
      "This team didn’t just run campaigns—they helped us understand our audience better. Through smart digital marketing strategies, analytics insights, and platform optimizations, we saw a 3x increase in engagement within the first quarter. Their approach is both strategic and data-driven.",
  },
];

const TestimonialsHome = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm font-bold text-[#2A8ADE] mb-4">
          What Our Clients Say
        </h2>
        <p className="text-[#032040] text-[20px] md:text-3xl font-bold mb-12 max-w-2xl mx-auto">
          Customer’s Awesome Feedback About Our Services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl min-h-[430px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <FaQuoteLeft className="text-blue-600 text-4xl mb-6" />
              <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-1 text-yellow-400 text-lg mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < item.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHome;
