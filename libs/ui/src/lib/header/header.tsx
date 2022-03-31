
export interface HeaderProps {
  title: string;
  backgroundColor: string;
}

export function Header({ title, backgroundColor }: HeaderProps) {
  return (
    <>
    <header className={`shadow ${backgroundColor}`}>
      <div className="">
          {/* Navbar */}
        <nav className={`w-full md:flex-row md:flex-nowrap md:justify-start flex items-center p-4`}>
          <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap px-4">
            {/* Brand */}
            <a
              className="text-sm text-white uppercase hidden lg:inline-block font-semibold"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              {title}
            </a>
            
          </div>
        </nav>
        {/* End Navbar */}
      </div>
    </header>

     
    </>
  );
}

export default Header;
