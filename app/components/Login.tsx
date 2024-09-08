"use client";
import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Login failed. Please check your credentials.");
    } else {
      setSuccess("Login successful!");
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
              placeholder="Email"
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
              placeholder="Password"
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
