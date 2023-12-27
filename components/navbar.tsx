import Link from "next/link";

export const IntroNavbar = () => {
  return (
    <nav className="font-bold items-center text-center md:text-left text-2xl md:text-4xl mt-5">
      <ul className="flex flex-col md:flex-row px-8">
        <li>
          <Link
            href="/posts"
            className="hover:text-gray-400 duration-200 transition-colors md:mr-8"
          >
            Posts
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-gray-400 duration-200 transition-colors"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export const Navbar = () => {
  return (
    <nav className="font-bold text-center md:text-left text-lg mt-5 md:pl-8">
      <ul className="flex flex-col md:flex-row text-lg md:text-2xl px-8">
        <li>
          <Link
            href="/posts"
            className="hover:text-gray-400 duration-200 transition-colors md:mr-8"
          >
            Posts
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-gray-400 duration-200 transition-colors"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
