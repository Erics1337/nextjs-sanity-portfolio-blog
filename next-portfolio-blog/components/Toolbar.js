import { useRouter } from 'next/router'
import styles from '../styles/Toolbar.module.css'
import Link from 'next/link'
import { MenuIcon, PaperAirplaneIcon } from "@heroicons/react/solid"


const Toolbar = ({ open, setOpen }) => {
    return (
        // <div className={styles.main}>
        //     <div onClick={() => router.push('/')}>Home</div>
        //     <div onClick={() => window.location.href = 'https://twitter.com/don_swan'}>Twitter</div>
        //     <div onClick={() => window.location.href = 'https://github.com/erics1337'}>GitHub</div>
        // </div>

        <nav className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between px-8">

                        <div className="flex space-x-4">
                            <div className="mr-4">
                                <a href="#" className="flex items-center py-5 px-3">                    
                                    <PaperAirplaneIcon className="h-5 w-5 mr-1 text-blue-500"/>
                                <h1 className="font-semibold">Home</h1>
                                </a>
                            </div>

                            <div className="flex items-center space-x-1">
                                <a href="/" className="hidden sm:flex py-4 px-3 text-gray-700 hover:text-gray-900">Features</a>
                                <a href="/" className="hidden sm:flex py-4 px-3 text-gray-700 hover:text-gray-900">Pricing</a>
                            </div>
                            </div>

                            <div className="flex items-center space-x-1">
                                <a href="" className="hidden sm:flex py-5 px-3">Login</a>
                                <a href="" className="hidden sm:flex py-3 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800
                                transition duration-300 rounded">Signup</a>
                            </div>

                            {/* Mobile button goes here */}
                            <div className="sm:hidden flex items-center">
                                <button className="mobile-menu-button" open={open} onClick={() => setOpen(!open)}>
                                    <MenuIcon className="h-6 w-6 mr-1 text-black" />
                                </button>
                            </div>
                </div>
            </div>

            {/* Mobile menu */}
            { open && 
            <div >
                <a href="" className="block py-2 text-sm hover:bg-gray-200">Features</a>
                <a href="" className="block py-2 text-sm hover:bg-gray-200">Pricing</a>
            </div>
            }
        </nav>
        
    )
}

export default Toolbar