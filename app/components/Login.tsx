"use client";
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local",
        {
          identifier: email, // identifier, email ya da username olabilir
          password: password,
        }
      );

      setSuccess("Login successful!");
      console.log("Login successful:", response.data);
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="text-black">
      <div className="mt-10 mx-auto bg-slate-600 w-1/3 p-16 rounded-xl">
        <h2 className="text-4xl font-semibold">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <div className="mt-5 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="p-3 rounded-lg"
              id="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="p-3 rounded-lg"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <button type="submit" className="bg-blue-400 rounded-md p-2 mt-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
