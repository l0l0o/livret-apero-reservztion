import Image from 'next/image';

const Navbar = () => {
  return (
    <div style={navbarStyles}>
      <button className="flex items-center justify-center space-x-2 bg-white/20 w-8 h-8 rounded-full">
        <Image src="/icons/burger.svg" alt="Logo" width={20} height={20} />
      </button>
      <button className="flex items-center justify-center space-x-2 bg-none w-8 h-8 rounded-full">
        <Image src="/icons/bell-03.svg" alt="Logo" width={20} height={20} />
      </button>
    </div>
  );
};

const navbarStyles = {
  backgroundColor: 'transparent',
  color: '#FFFFFF',
  padding: '8px 0px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '8px',
};

export default Navbar;
