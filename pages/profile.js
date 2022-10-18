import Navigation from "../components/navigation";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const Profile = () => {
  const [user, setUser] = useState({
    userName: "",
  });
  const router = useRouter();

  // trae los datos del Backend
  const getProfile = async () => {
    const response = await axios.get("/api/profile");
    setUser(response.data);
  };

  // cierre de sesión
  const logOut = async () => {
    try {
      await axios.post("/api/auth/logout");
      router.push("/login");
    } catch (error) {
      console.error(error);
      router.push("/login");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-cyan-100 to-cyan-800">
      <Navigation />
      <h1 className="font-bold text-xl">USER</h1>
      <pre className="font-bold">{JSON.stringify(user.user)}</pre>
      <h1 className="font-bold text-xl">EMAIL</h1>
      <pre className="font-bold">{JSON.stringify(user.email)}</pre>
      <button
        className="font-bold text-xl bg-green-600 hover:bg-green-500 rounded-lg text-white px-5 py-5 mx-2 my-2"
        onClick={() => getProfile()}
      >
        Get Profile
      </button>
      <button
        className="font-bold text-xl bg-red-600 hover:bg-red-500 rounded-lg text-white px-5 py-5 mx-2 my-2"
        onClick={() => logOut()}
      >
        Logout
      </button>
    </div>
  );
};
export default Profile;
