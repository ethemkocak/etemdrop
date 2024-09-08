import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { User } from "@supabase/supabase-js"; // User tipi burada geliyor

const Dashboard = () => {
  // User | null tipi tanımlandı
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user); // Eğer session varsa user'ı ayarla
        console.log("User is logged in:", session.user);
      }
    };

    checkSession();
  }, []);

  return (
    <div>
      {user ? (
        <p>Welcome, {user.email}</p>
      ) : (
        <p>You are not logged in. Please log in.</p>
      )}
    </div>
  );
};

export default Dashboard;
