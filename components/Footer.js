export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm p-6 text-center mt-10">
      &copy; {new Date().getFullYear()} Appscrip. All rights reserved.
    </footer>
  );
}