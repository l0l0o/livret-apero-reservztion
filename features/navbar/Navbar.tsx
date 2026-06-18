import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-none text-white p-4 flex justify-between items-center">
      <button className="flex items-center justify-center space-x-2 bg-white/20 w-8 h-8 rounded-full">
        <Image src="/icons/burger.svg" alt="Logo" width={20} height={20} />
      </button>
      <button className="flex items-center justify-center space-x-2 bg-none w-8 h-8 rounded-full">
        <Image src="/icons/bell-03.svg" alt="Logo" width={20} height={20} />
      </button>
    </div>
  );
};

export default Navbar;
