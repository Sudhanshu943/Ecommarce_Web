import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          className="border rounded w-full p-2 mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded w-full p-2 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded w-full p-2 mb-4"
        />
        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
