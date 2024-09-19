"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js yönlendirme için
import { BACKEND_URL } from "../config";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter(); // yönlendirme için useRouter hook'unu kullan

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(BACKEND_URL + "/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      // Backend'den dönen veriyi al
      const data = await response.json();

      // Eğer token varsa, bunu localStorage'a veya cookie'ye kaydet
      if (data.token) {
        localStorage.setItem("token", data.token); // Token'ı sakla
      }

      setSuccess("Signup successful!");

      // Başarılı bir kayıt sonrası kullanıcıyı ana menüye yönlendir
      router.push("/main-menu"); // "main-menu" sayfasına yönlendir
    } catch (error) {
      setError("Signup failed. Please check your credentials.");
    }
  };

  return (
    <div className="text-black">
      <div className="mt-10 mx-auto bg-slate-600 w-1/3 p-16 rounded-xl">
        <h2 className="text-4xl font-semibold">Sign Up</h2>
        <form onSubmit={handleSignup} className="flex flex-col gap-3">
          <div className="mt-5 flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="p-3 rounded-lg"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
