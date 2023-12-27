import Link from "next/link";
import { IntroNavbar } from "../components/navbar";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight">
          <Link
            href="/"
            className="hover:text-gray-400 duration-200 transition-colors"
          >
            Kim.
          </Link>
        </h1>
        <h4 className="text-center md:text-left text-lg md:-mt-2 md:pl-2">
          Write the contents of the development.
        </h4>
      </div>
      <IntroNavbar />
    </section>
  );
};

export default Intro;
