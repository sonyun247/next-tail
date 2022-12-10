import Link from "next/link";
import Theme from "./theme";

function Header() {
  return (
    <header className="h-fit grid grid-cols-2 gap-px bg-slate-800 dark:bg-white text-blue-600 text-lg uppercase">
      <Link
        href="/"
        className="dark:bg-slate-800 dark:text-blue-400 hover:font-bold bg-white w-full text-center"
      >
        home
      </Link>
      <Link
        href="/projects"
        className="dark:bg-slate-800 dark:text-blue-400 hover:font-bold bg-white w-full text-center"
      >
        portfolio
      </Link>
      <Theme />
    </header>
  );
}

export default Header;
