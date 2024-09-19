"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Yönlendirme için
import { BACKEND_URL } from "../config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter(); // Yönlendirme için useRouter hook'u

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Her yeni denemede hatayı sıfırla
    setSuccess(""); // Başarı mesajını sıfırla

    try {
      const response = await fetch(BACKEND_URL + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Giriş bilgilerini JSON'a dönüştür
      });

      // HTTP durum kodlarını daha doğru kontrol etmek için
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            `Error: ${response.status} - ${response.statusText}`
        );
      }

      const data = await response.json();

      // Eğer token varsa, localStorage'a kaydet
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      setSuccess("Login successful!");

      // Kullanıcıyı başarılı girişten sonra yönlendir
      router.push("/main-menu"); // "main-menu" sayfasına yönlendir
    } catch (error: unknown) {
      // Hata mesajını daha açıklayıcı hale getir
      if (error instanceof Error) {
        setError(
          error.message || "Login failed. Please check your credentials."
        );
      } else {
        setError("An unknown error occurred.");
      }
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
