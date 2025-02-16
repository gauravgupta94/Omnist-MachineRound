import { FaBars, FaIndustry, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [isVisiable, setIsVisiable] = useState(true);


  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Info",
      link: "/#",
    },
    {
      id: 3,
      name: "Gallary",
      link: "/#",
    },
    {
      id: 4,
      name: "Contact",
      link: "/#",
    },
    {
      id: 5,
      name: "FAQ",
      link: "/#",
    },
  ];


  // Show and Hide BackGround DIV funtion
  function handleResize() {
    if (window.innerWidth < 1050) {
      setIsVisiable(false)
    } else {
      setIsVisiable(true)
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    window.removeEventListener('resize', handleResize)
  })

  return (
    <>
      {/* Header */}
      <header className="container relative flex justify-between items-center py-2 px-8 ">

        {/* Header part1 LOGO*/}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaIndustry className="text-2xl font-bold" />
          <div className="flex flex-col items-start">
            <span className=" text-xs font-semibold">COMPANY</span>
            <span className="text-xs font-thin ">LOGO</span>
          </div>
        </div>

        {/* Header part2:- Navbar(desktop)*/}
        <nav className="hidden md:flex ">

          {/* {background Pattern} */}
          {
            isVisiable && (
              <div className='w-[460px] h-[600px] bg-[#e6e6e5] -top-1/2 absolute right-0'></div>
            )
          }


          <div className="flex justify-center">
            <ul className="sm:flex items-center py-2 gap-1 hidden z-20">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="text-black px-2 py-0.5 rounded-full inline-block w-full text-sm font-bold transition-all hover:text-white hover:bg-yellow-500 duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-30 cursor-pointer">
          <button aria-label="Toggle Menu" onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            {
              isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />
            }
          </button>

        </div>

        {/* Mobile view */}
        {
          isOpen && (
            <div className={`md:hidden absolute top-10 right-0 bg-white w-24 float-right z-20`}>
              <ul className="flex flex-col items-end py-1">
                {
                  Menu.map((data) => (
                    <li key={data.id} className="w-full text-end px-8">
                      <a href={data.link} className="text-black/80 w-full inline-block font-semibold text-md duration-300 transition-all" >{data.name}</a>
                    </li>
                  ))
                }

              </ul>
            </div>
          )
        }

      </header>
    </>
  );
}

export default Header;
