import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PortableText from 'react-portable-text'
import serializers from '../utils/sanity'

function BlogCard({ post = [], content = [], index }) {
	return (
		<div className='flex flex-col mx-2' key={index}>
			<Link href={`/post/${post.slug.current}`} key={index}>
				<div className='shadow cursor-pointer'>
					<div
						key={index}
						style={{ backgroundImage: `url(${post.mainImage})` }}
						className='bg-center bg-cover bg-no-repeat h-72 sm:h-84 lg:h-64 xl:h-72 relative group'>
						<span className='bg-cover bg-no-repeat bg-center absolute inset-0 opacity-10 transition-opacity hover:opacity-50 block'></span>
						<span className='btn hover:bg-white hover:text-secondary font-body font-bold text-sm md:text-base text-white border-2 border-white block px-6 py-2 uppercase rounded-full text-center absolute right-0 bottom-0 mr-4 mb-4'>
							Read More
						</span>
					</div>
					<div className='py-6 xl:py-8 px-5 bg-white dark:bg-main-dark-bg'>
						<span className='font-body font-semibold text-lg block'>
							{post.title}
						</span>
						<span className='font-body text-grey-20 pt-2 block'>
							<PortableText
								content={content}
								serializers={serializers}
								projectId='ulqdo09f'
								dataset='production'
							/>
						</span>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default BlogCard
