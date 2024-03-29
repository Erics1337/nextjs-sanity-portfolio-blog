import { useRouter } from 'next/router'
import Link from 'next/link'
import { MenuIcon, HomeIcon } from '@heroicons/react/solid'

const Navbar = ({ open, setOpen }) => {
	return (
		<nav className='dark:bg-main-dark-bg dark:text-gray-100 bg-white'>
			<div className='max-w-6xl mx-auto px-4'>
				<div className='flex justify-between px-8 py-6'>
					<div className='flex space-x-4'>
						<div className='mr-4'>
							<Link href='/'>
								<div className='btn navBtn flex px-3'>
									<HomeIcon className='h-5 w-5 mr-1 text-blue-500' />
									<span className='font-semibold'>Home</span>
								</div>
							</Link>
						</div>

						<div className='flex items-center space-x-5'>
							<Link
								href='/portfolio'
								className='hidden sm:flex py-4 px-3 hover:text-gray-900 dark:hover:text-gray-300'>
								<span className='btn navBtn'>Portfolio</span>
							</Link>
							<Link
								href='/blog'
								className='hidden sm:flex py-4 px-3 text-gray-700 hover:text-gray-900 dark:hover:text-gray-300'>
								<span className='btn navBtn'>Blog</span>
							</Link>
						</div>
					</div>

					<div className='hidden lg:flex items-center space-x-5'>
						<Link
							href='/#about'
							className='hidden lg:flex py-5 px-3'>
							<span className='btn navBtn'>About</span>
						</Link>
						<Link
							href='/#services'
							className='hidden lg:flex py-5 px-3'>
							<span className='btn navBtn'>Services</span>
						</Link>
						<Link
							href='/#projects'
							className='hidden lg:flex py-5 px-3'>
							<span className='btn navBtn'>Projects</span>
						</Link>
						<Link
							href='/#clients'
							className='hidden md:flex py-5 px-3'>
							<span className='btn navBtn'>Clients</span>
						</Link>
						<Link
							href='/#experience'
							className='hidden lg:flex py-5 px-3'>
							<span className='btn navBtn'>Experience</span>
						</Link>
						<Link
							href='/#stats'
							className='hidden lg:flex py-5 px-3'>
							<span className='btn navBtn'>Stats</span>
						</Link>
						<Link
							href='/#posts'
							className='hidden lg:flex py-5 px-3'>
							<span className='btn navBtn'>Posts</span>
						</Link>
						{/* <Link
							href='/#contact'
							className='hidden md:flex py-5 px-3'>
							<span className='btn navBtn'>Contact</span>
						</Link> */}
					</div>

					{/* Mobile button goes here */}
					<div className='lg:hidden flex items-center space-x-3 ml-5'>
						<button
							className=''
							open={open}
							onClick={() => setOpen(!open)}>
							<MenuIcon className='h-6 w-6 mr-1' />
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{open && (
				<div className='col-span-1 flex flex-wrap pb-4 text-gray-200'>
					<a
						href='/#whoAmI'
						className='block py-2 px-5 text-sm bg-gray-500 rounded-md m-2'>
						Who Am I?
					</a>
					<a
						href='/#services'
						className='block py-2 px-5 text-sm  bg-gray-500 rounded-md m-2'>
						Services
					</a>
					<a
						href='/#portfolio'
						className='block py-2 px-5 text-sm  bg-gray-500 rounded-md m-2'>
						Portfolio
					</a>
					<a
						href='/#clients'
						className='block py-2 px-5 text-sm  bg-gray-500 rounded-md m-2'>
						Clients
					</a>
					<a
						href='/#experience'
						className='block py-2 px-5 text-sm  bg-gray-500 rounded-md m-2'>
						Experience
					</a>
					<a
						href='/#stats'
						className='block py-2 px-5 text-sm  bg-gray-500 rounded-md m-2'>
						Stats
					</a>
					<a
						href='/#posts'
						className='block py-2 px-5 text-sm  bg-gray-500 rounded-md m-2'>
						Posts
					</a>
					{/* <a
						href='/#contact'
						className='block py-2 px-5 text-sm  bg-gray-500 rounded-md m-2'>
						Contact
					</a> */}
				</div>
			)}
		</nav>
	)
}

export default Navbar
