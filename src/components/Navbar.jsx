
import { FaLinkedin } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        <GiHamburgerMenu />
        </div>

        <div className="flex flex-shrink-0 items-center">
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/tebogo-selamolela-a86090159/">
        <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/tebza_fx/">
        <FaInstagram />
        </a>
        <a href="">
        <FaTwitterSquare />
        </a>
        <a href="https://www.facebook.com/MagicalTebzaworldwide">
        <FaGithub />
        </a>
       
            
            
        </div>
    </nav>
  )
}

export default Navbar
