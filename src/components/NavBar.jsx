import { useState } from "react";
import logo from "../assets/logo1.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
// import {HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="fixed w-full flex justify-between items-center h-[80px] bg-[#0a192f] px-4 text-gray-300">
      <div>
        <img src={logo} alt="" width={50} />
      </div>
      {/* Menu */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex ">
          <li className="px-4">
            <Link
              activeClass="active"
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="px-4"><Link
              activeClass="active"
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </Link></li>
          <li className="px-4"><Link
              activeClass="active"
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link></li>
          <li className="px-4"><Link
              activeClass="active"
              to="project"
              smooth={true}
              duration={500}
            >
              Project
            </Link></li>
          <li className="px-4"><Link
              activeClass="active"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link></li>
        </ul>
      </div>
      {/* HamBurger Menu */}
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden z-10 cursor-pointer"
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {/* Mobile Menu */}
      {nav && (
        <ul className=" absolute right-0 top-[80px] w-[100%]  bg-[#0a192f] flex justify-center items-center flex-col">
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skils</li>
          <li className="py-6 text-4xl">Work</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      )}
      {/* Social Menu */}
      <div className="hidden sm:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="ml-[-80px] hover:ml-[-5px] duration-200 bg-blue-600 w-[130px] h-[60px] flex justify-between  items-center">
            <a
              className="gap-3 flex justify-center items-center w-full text-gray-300"
              href=""
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="ml-[-80px] hover:ml-[-5px] duration-200 bg-blue-600 w-[130px] h-[60px] flex justify-between  items-center">
            <a
              className="gap-3 flex justify-center items-center w-full text-gray-300"
              href=""
            >
              Facebook <FaGithub size={30} />
            </a>
          </li>
          <li className="ml-[-80px] hover:ml-[-5px] duration-200 bg-blue-600 w-[130px] h-[60px] flex justify-between  items-center">
            <a
              className="gap-3 flex justify-center items-center w-full text-gray-300"
              href=""
            >
              Facebook <FaLinkedin size={30} />
            </a>
          </li>
          <li className="ml-[-80px] hover:ml-[-5px] duration-200 bg-blue-600 w-[130px] h-[60px] flex justify-between  items-center">
            <a
              className="gap-3 flex justify-center items-center w-full text-gray-300"
              href=""
            >
              Facebook <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
