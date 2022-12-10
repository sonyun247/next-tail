import Link from "next/link";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="bg-slate-300  text-black dark:bg-slate-900 dark:text-fuchsia-400 h-fit -rotate-2">
      <Link href="https://github.com/sonyun247">
        <h3 className="text-sm tracking-widest text-center hover:italic hover:text-blue-600 ">
          &copy; {year} Sonyun247. All rights reserved.
        </h3>
      </Link>
    </footer>
  );
}
export default Footer;
