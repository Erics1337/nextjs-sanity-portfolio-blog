import { useRouter } from 'next/router'
import styles from '../styles/Toolbar.module.css'
import Link from 'next/link'
import { MenuIcon, HomeIcon } from "@heroicons/react/solid"


const Navbar = ({ open, setOpen }) => {
    return (
        <nav className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between px-8">
                        <div className="flex space-x-4">
                            <div className="mr-4">
                                <a href="/" className="flex items-center py-5 px-3">                    
                                    <HomeIcon className="h-5 w-5 mr-1 text-blue-500"/>
                                <h1 className="font-semibold">Home</h1>
                                </a>
                            </div>

                            <div className="flex items-center space-x-1">
                                <a href="/" className="hidden sm:flex py-4 px-3 text-gray-700 hover:text-gray-900">Portfolio</a>
                                <a href="/" className="hidden sm:flex py-4 px-3 text-gray-700 hover:text-gray-900">Blog</a>
                            </div>
                            </div>

                            <div className="hidden lg:flex items-center space-x-5">
                                <Link href="/#about" className="hidden lg:flex py-5 px-3">About</Link>
                                <Link href="/#services" className="hidden lg:flex py-5 px-3">Services</Link>
                                <Link href="/#projects" className="hidden lg:flex py-5 px-3">Projects</Link>
                                <Link href="/#experience" className="hidden lg:flex py-5 px-3">Experience</Link>
                                <Link href="/#stats" className="hidden lg:flex py-5 px-3">Stats</Link>
                                <Link href="/#posts" className="hidden lg:flex py-5 px-3">Posts</Link>
                                <Link href="/#contact" className="hidden md:flex py-5 px-3">Contact</Link>
                            </div>

                            {/* Mobile button goes here */}
                            <div className="lg:hidden flex items-center space-x-3">
                                <button className="mobile-menu-button" open={open} onClick={() => setOpen(!open)}>
                                    <MenuIcon className="h-6 w-6 mr-1 text-black" />
                                </button>
                            </div>
                </div>
            </div>

            {/* Mobile menu */}
            { open && 
            <div >
                <a href="/#whoAmI" className="block py-2 text-sm hover:bg-gray-200">Who Am I?</a>
                <a href="/#services" className="block py-2 text-sm hover:bg-gray-200">Services</a>
                <a href="/#portfolio" className="block py-2 text-sm hover:bg-gray-200">Portfolio</a>
                <a href="/#experience" className="block py-2 text-sm hover:bg-gray-200">Experience</a>
                <a href="/#stats" className="block py-2 text-sm hover:bg-gray-200">Stats</a>
                <a href="/#posts" className="block py-2 text-sm hover:bg-gray-200">Posts</a>
                <a  href="/#contact" className="block py-2 text-sm hover:bg-gray-200">Contact</a>
            </div>
            }
        </nav>
        
    )
}

export default Navbar