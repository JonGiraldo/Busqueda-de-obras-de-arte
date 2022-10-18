import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
  const [credentials, setCredentials] = useState({
    user: "",
    password: "",
  });
  const router = useRouter();

  // se almacenan las credenciales en el estado
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // Autenticación de credenciales
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(credentials);
    const response = await axios.post("/api/auth/login", credentials);

    if (response.status === 200) {
      router.push("/profile");
    }
  };
  return (
    // FORMULARIO DE LOGIN

    <div className="h-screen bg-gradient-to-r from-cyan-100 to-cyan-800 md:flex md:items-center mb-6 ml:items-center flex flex-col justify-center items-center">
      <div className="w-full max-w-sm bg-gray-300">
        <form
          className="w-full max-w-sm bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            className="mx-2 my-2 px-5 py-5 rounded"
            name="user"
            type="text"
            placeholder="User"
            onChange={handleChange}
          />
          <input
            className="mx-2 my-2 px-5 py-5 rounded"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button
            className="font-bold text-xl bg-green-600 hover:bg-green-500 text-white rounded-lg px-10 py-5 mx-2 my-2 items-center"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
