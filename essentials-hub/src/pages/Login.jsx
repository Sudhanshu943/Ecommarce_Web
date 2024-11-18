import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation and authentication simulation
    if (email === "user@example.com" && password === "password123") {
      alert("Login successful!");
      // Redirect user or update authentication state here
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-md shadow-md w-full max-w-md"
        onSubmit={handleLogin}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-sm mb-6 text-center">
            {errorMessage}
          </p>
        )}

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded w-full p-3 mb-6 text-lg"
          required
        />

        {/* Password Input */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full p-3 mb-6 text-lg"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-500 text-lg"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
