
import img3 from './../assets/New folder/logo3.jpg'
import { Link } from "react-scroll";
// bg-[#0a192f]
const Footer = () => {
  return (
    <div className="w-full h-full bg-pink-600 text-gray-300">
      <div className="max-w-[100px] text-center pb-4 pt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center">
        <div className="">
          <img className="w-[50px] bg-red-600" src={img3} alt="" />
        </div>
        <ul>
        <ul className="hidden ml-8 md:flex ">
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
        </ul>
      </div>
      <div className="w-[40%] mx-auto text-center pb-6"><small className="text-lg">&copy; Meherab. All right Reserved</small></div>
    </div>
  );
};

export default Footer;
