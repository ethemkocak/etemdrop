"use client";

import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { Icon } from "@iconify/react";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    // API'den username'i çekmek için fetch isteği
    const fetchUsername = async () => {
      try {
        const response = await fetch("/api/profile/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Token ile doğrulama
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUsername(data.username);
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.error("Error fetching username:", error);
        setError("Failed to fetch user data");
      }
    };

    fetchUsername();
  }, []); // Sadece ilk render'da çalışması için boş dependency array

  return (
    <div className="mt-6">
      <Avatar />
      <div className="text-white flex justify-center content-center mt-2">
        {error ? <p>{error}</p> : <p>{username}</p>}
      </div>
      <div className="flex text-white justify-center content-center mt-20">
        <Icon icon="mdi:gun" className="h-5 w-5 mr-2" />
        Envanter
      </div>
      <div className="border-b border-white w-10/12 ml-32 mt-4"></div>
    </div>
  );
};

export default Profile;
