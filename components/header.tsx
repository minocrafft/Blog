import Link from "next/link";
import { Navbar } from "../components/navbar";

const Header = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/" className="hover:text-gray-400 duration-200">
          Kim.
        </Link>
      </h2>
      <Navbar />
    </section>
  );
};

export default Header;
