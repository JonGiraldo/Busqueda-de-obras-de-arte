import Navigation from "../components/navigation";
import fetch from "isomorphic-fetch";
import { useRouter } from "next/router";
import { data } from "autoprefixer";

const Home = ({ artist }) => {
  console.log(artist);

  const router = useRouter();
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
    <div className="h-screen  bg-gradient-to-r from-cyan-100 to-cyan-800">
      <Navigation />
      <div className="my-5 mx-5 px-5 py-5 bg-gray-400">
        <h1 className="font-bold text-xl my-5 mx-5">Art search</h1>
        <input
          className="mx-2 my-2 px-5 py-5 rounded"
          type={"text"}
          placeholder="Name"
        />
        <select className="font-bold my-5 mx-5">Artist</select>
        <button className="font-bold text-xl bg-green-600 hover:bg-green-500 text-white rounded-lg px-5 py-5 mx-2 my-2">
          Search
        </button>
        <button
          className="font-bold text-xl bg-red-600 hover:bg-red-500 text-white rounded-lg px-5 py-5 mx-2 my-2"
          onClick={() => logOut()}
        >
          Logout
        </button>
        <h1 className="font-bold text-xl">Here are the list:</h1>
        <ul>
          <li>{artist}</li>
        </ul>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch(
    "https://www.rijksmuseum.nl/en/search/advanced/terms?field=involvedMaker&q="
  );
  const json = await res.json();
  const artist = json;
  console.log(artist);
  return { artist: artist };
};

export default Home;
