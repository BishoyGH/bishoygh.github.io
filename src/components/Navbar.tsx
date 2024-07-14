import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" className="mx-2 text-2xl">
          BishoyGH
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="/">
          <FaLinkedinIn />
        </a>
        <a href="/">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
