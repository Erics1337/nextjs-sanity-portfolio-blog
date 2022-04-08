import React from 'react'
import { useRouter } from 'next/router'
import serializers from '../../utils/sanity'
import BaseBlockContent from '@sanity/block-content-to-react'

function ProjectCard({ project, index }) {
	const router = useRouter()
	return (
		<div
			key={index}
			className='transition-all transform hover:scale-105'
			onClick={() => router.push(`/project/${project.slug.current}`)}>
			<div
				className='w-full h-100 max-h-100 relative cursor-pointer'
				onClick={() => router.push(`/project/${project.slug.current}`)}>
				<div
					className='absolute inset-0 bg-cover bg-center z-0'
					style={{
						backgroundImage: `url(${project.mainImage})`,
					}}
				/>
				<div className='p-5 opacity-0 hover:bg-primary hover:bg-opacity-80 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-around items-center text-white font-semibold'>
					<h1 className='pr-5 text-4xl'>{project.title}</h1>
					<div className='border-l pl-5 flex justify-center text-center'>
						{/* Tech Used:{' '} */}
						<BaseBlockContent
							projectId='ulqdo09f'
							dataset='production'
							blocks={project.tech}
							serializers={serializers}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
