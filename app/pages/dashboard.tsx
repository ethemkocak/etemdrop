import { supabase } from "../lib/supabaseClient";
import { User } from "@supabase/supabase-js"; // Supabase'ten User tipini import ediyoruz

export const getServerSideProps = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    // Eğer oturum yoksa, login sayfasına yönlendir
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  // Oturum varsa kullanıcı bilgilerini döndür
  return {
    props: {
      user: session.user, // session.user bir User tipidir
    },
  };
};

const Dashboard = ({ user }: { user: User }) => {
  // Burada `User` tipini kullandık
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.email}</p>
    </div>
  );
};

export default Dashboard;
