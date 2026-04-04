import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-700 text-white font-bold">
            K
          </div>
          <span className="text-xl font-bold tracking-tight">Kazema</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#" className="hover:text-green-600 transition-colors">Home</Link>
            <Link href="#" className="hover:text-green-600 transition-colors">Products</Link>
            <Link href="#" className="hover:text-green-600 transition-colors">About Us</Link>
            <Link href="#" className="hover:text-green-600 transition-colors">Contact</Link>
          </nav>
          <div className="h-6 w-px bg-border hidden md:block"></div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
