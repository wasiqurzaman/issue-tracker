import Link from "next/link";
import { FaBug } from "react-icons/fa6";

export default function NavBar() {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex gap-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug className="w-6 h-6" />
      </Link>
      <ul className="flex gap-6">
        {links.map(link => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-zinc-500 hover:text-zinc-800 transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
