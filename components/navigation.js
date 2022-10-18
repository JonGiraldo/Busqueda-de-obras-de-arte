import Head from "next/head";
import Link from "next/link";
//import "../styles/globals.css"

const Navigation = () => {
  return (
    <div className="bg-gray-800 px-5 py-5">
      <Head>
        <title>Obras de Rijksmuseum</title>
      </Head>
      <nav className="flex sm:justify-right space-x-4">
        <ul className="md:flex md:items-center">
          <li className="mx-4">
            <Link href="/profile">
              <a className="font-bold text-3xl rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">
                Profile
              </a>
            </Link>
          </li>
          <li className="mx-4">
            <Link href="/home">
              <a className="font-bold text-3xl rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">
                Service
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
