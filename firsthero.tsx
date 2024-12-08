import React from "react";

const FirstHero = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-yellow-400 text-lg font-semibold mb-2">About us</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-yellow-400">We</span> Create the best foody product
          </h1>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
            dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center">
              <span className="text-yellow-400 text-2xl mr-3">✔</span>
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 text-2xl mr-3">✔</span>
              Quisque diam pellentesque bibendum non dui volutpat fringilla
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 text-2xl mr-3">✔</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          </ul>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500">
            Read More
          </button>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Food Item 1"
            className="rounded-lg shadow-lg object-cover"
          />
          <div className="grid grid-rows-2 gap-4">
            <img
              src="https://via.placeholder.com/150x100"
              alt="Food Item 2"
              className="rounded-lg shadow-lg object-cover"
            />
            <img
              src="https://via.placeholder.com/150x100"
              alt="Food Item 3"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstHero;
