export default function Header() {
  return (
    <header className="p-4 border-b flex items-center justify-between">
      <h1 className="text-xl font-bold">LOGO</h1>
      <nav className="flex gap-4">
        <a href="#">Shop</a>
        <a href="#">Contact</a>
        <a href="#">Account</a>
      </nav>
    </header>
  );
}