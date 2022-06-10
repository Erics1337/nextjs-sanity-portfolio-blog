import { ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'

function LetsConnect() {
	return (
		<div className='flex flex-col sm:flex-row justify-center lg:justify-start pt-5 sm:pt-5'>
			<div className='flex justify-center sm:justify-start items-center pl-0 md:pl-1'>
				<p className='font-body text-gray-800 text-lg uppercase pr-0'>
					Let's connect
				</p>

				{/* Icons */}
				<div className='flex items-center justify-center sm:justify-start sm:pt-0'>
					<div className='pr-2'>
						<ChevronRightIcon height={30} width={30} />
					</div>
					<div className='px-2 btn navBtn'>
						<Link href='https://github.com/Erics1337'>
							<Image
								className='cursor-pointer'
								src='/img/gitHub.png'
								alt='GitHub'
								height={30}
								width={30}
							/>
						</Link>
					</div>
					<div className='px-2 btn navBtn'>
						<Link href='https://www.linkedin.com/in/ericswansondesign/'>
							<Image
								className='cursor-pointer'
								src='/img/linkedin.png'
								alt='GitHub'
								height={30}
								width={30}
							/>
						</Link>
					</div>
					<div className='px-2 btn navBtn'>
						<Link href='https://twitter.com/don_swan'>
							<Image
								className='cursor-pointer'
								src='/img/twitter.png'
								alt='GitHub'
								height={40}
								width={40}
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LetsConnect
