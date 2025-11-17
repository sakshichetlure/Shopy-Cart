import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-orange-400 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We are passionate about delivering high-quality products and creating
          amazing experiences for our customers.
        </p>
      </section>

      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-orange-400">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to empower people by offering products that bring
            comfort, innovation, and style to everyday life. We believe in
            combining creativity with technology to serve our customers better.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-orange-400">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a future where shopping is seamless, enjoyable, and
            accessible to everyone. Our goal is to build trust and long-lasting
            relationships with our customers worldwide.
          </p>
        </div>
      </section>

      </div>
  );
};

export default AboutUs;
