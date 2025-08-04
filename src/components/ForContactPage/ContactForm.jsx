import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  X,
} from "lucide-react";
import contactImage from "../../assets/contactform2.jpg";

const IconWrapper = ({ children }) => (
  <div className="w-10 h-10 rounded-full border-2 border-dashed border-white flex items-center justify-center hover:bg-[#1a222e] hover:text-white transition">
    {children}
  </div>
);

const ContactForm = () => {
  return (
    <>
      <section className="bg-[#f1f6fe] py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row gap-10 items-start justify-between">
            {/* Left Side: Image + Follow Us */}
            <div className="bg-[#0a58ca] shadow-lg rounded-lg overflow-hidden w-full md:w-1/3">
              <img
                src={contactImage}
                alt="Contact"
                className="w-full h-72 object-cover"
              />
              <div className="p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">
                  Feel Free to Contact & Hire Us for Your Solution
                </h3>
                <p className="mb-3 text-white font-medium">Follow US :</p>
                <div className="flex gap-3">
                  <IconWrapper>
                    <Facebook size={18} />
                  </IconWrapper>
                  <IconWrapper>
                    <X size={18} />
                  </IconWrapper>
                  <IconWrapper>
                    <Linkedin size={18} />
                  </IconWrapper>
                  <IconWrapper>
                    <Instagram size={18} />
                  </IconWrapper>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full md:w-2/3">
              <p className="text-sm text-[#0a58ca] font-medium mb-2">
                Have Any Consultation...?
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Get In Touch With Your Nearest Local Business Sales Executive
              </h2>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="p-3 border border-gray-300 rounded focus:outline-[#0a58ca]"
                />
                <input
                  type="text"
                  placeholder="Your Number"
                  className="p-3 border border-gray-300 rounded focus:outline-[#0a58ca]"
                />
                <input
                  type="email"
                  placeholder="Your E-Mail*"
                  className="p-3 border border-gray-300 rounded focus:outline-[#0a58ca]"
                />
                <input
                  type="text"
                  placeholder="Your Address"
                  className="p-3 border border-gray-300 rounded focus:outline-[#0a58ca]"
                />
                <textarea
                  placeholder="Write A Message..."
                  rows="4"
                  className="p-3 border border-gray-300 rounded col-span-1 md:col-span-2 focus:outline-[#0a58ca]"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#1a222e] text-white px-6 py-3 rounded shadow-md hover:bg-[#0a58ca] transition w-fit mx-auto"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map */}
      <div className="w-full h-[450px] pt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9945195208966!2d-0.20433782635628453!3d5.567825633533451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a79b5000001%3A0xf6ce5c4512f75bbf!2sSuku%20Technologies!5e0!3m2!1sen!2sgh!4v1753806781908!5m2!1sen!2sgh"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactForm;
