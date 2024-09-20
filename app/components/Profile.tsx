"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Yönlendirme için
import { BACKEND_URL } from "../config";

const Profile = () => {
  const [user, setUser] = useState<{ username: string; email: string } | null>(
    null
  );
  const [error, setError] = useState("");
  const router = useRouter();

  // Kullanıcı bilgilerini al
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(BACKEND_URL + "/api/auth/me", {
          method: "GET",
          credentials: "include", // Oturum cookie'sini otomatik olarak dahil et
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUser(data); // Kullanıcı verilerini kaydet
      } catch (error) {
        setError("Please login to view your profile.");
        router.push("/login"); // Eğer giriş yapılmamışsa login sayfasına yönlendir
      }
    };

    fetchUserData();
  }, [router]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="text-white">
      <div className="mt-10 mx-auto bg-slate-600 w-1/3 p-16 rounded-xl">
        <h2 className="text-4xl font-semibold">Profile</h2>
        {user ? (
          <div>
            <p className="text-lg mt-5">Username: {user.username}</p>
            <p className="text-lg mt-2">Email: {user.email}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
