import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to MoreTime, your number one source for all things watches. We're dedicated to giving you the very best of timepieces, with a focus on quality, customer service, and uniqueness.
      </p>
      <p className="text-lg mb-4">
        Founded in 2024, MoreTime has come a long way from its beginnings. When we started out, our passion for reliable and stylish watches drove us to start this business. We hope you enjoy our products as much as we enjoy offering them to you.
      </p>
      <p className="text-lg">
        We believe in transparency, quality, and customer satisfaction. If you have any questions or comments, please don't hesitate to contact us.
      </p>
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} WatchStore. All rights reserved.
      </div>
    </div>
  );
};

export default About;
