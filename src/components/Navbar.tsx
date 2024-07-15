import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a
          href="/"
          className="mx-2 text-2xl transition-colors hover:text-neutral-200"
        >
          BishoyGH
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/bishoygh/"
          target="_blank"
          className="transition-colors hover:text-neutral-200"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/BishoyGH"
          target="_blank"
          className="transition-colors hover:text-neutral-200"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
