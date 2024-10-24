import Link from "next/link";

const Navebar = () => {
  return (
    <header className="bg-primary border-secondary border-b-2">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold text-[#ffcd00]">
            FCTube
          </Link>
        </div>

        <div className="w-1/2 relative">{/* https://nextjs.org */}</div>

        <div className="flex items-center space-x-4">
          <a href="#" className="text-primary">
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navebar;
