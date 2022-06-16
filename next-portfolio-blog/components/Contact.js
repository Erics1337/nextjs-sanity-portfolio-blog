// Uses Controlled Forms
import React, { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'

function Contact() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Sending')

		let data = {
			name,
			email,
			message,
		}

		fetch('/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				console.log('Response received')
				if (res.status === 200) {
					console.log('Response succeeded!')
					setSubmitted(true)
					setName('')
					setEmail('')
					setBody('')
				}
			})
			.catch((error) => console.log(error))
	}

	return (
		<section className='bg-gray-50 dark:bg-secondary-dark-bg' id='contact'>
			{/* Contact Form */}
			<div className='container py-16 md:py-20'>
				{/* Form Group */}
				{submitted ? (
					<div>
						<h2 className='font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center'>
							Thanks For Contacting Me!
						</h2>
						<h4 className='font-header font-medium text-black text-xl sm:text-2xl lg:text-3xl pt-6 text-center'>
							I will write back to you soon =)
						</h4>
					</div>
				) : (
					<div>
						<h2 className='font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center'>
							Write Me A Message!
						</h2>
						<h4 className='font-header font-medium text-xl sm:text-2xl lg:text-3xl pt-6 text-center'>
							Have Any Questions?
						</h4>
						<div className='w-full sm:w-2/3 mx-auto pt-5 lg:pt-6 text-center'>
							<p className='font-body text-gray-10'>
								Lets chat about how I can help you achieve your
								goals
							</p>
						</div>
						<form className='w-full sm:w-3/4 mx-auto pt-10'>
							<div className='flex flex-col md:flex-row'>
								<input
									className='dark:bg-gray-300 w-full md:w-1/2 mr-3 lg:mr-5 font-body text-black px-4 py-3 border-gray-50 rounded'
									placeholder='Name'
									type='text'
									id='name'
									onChange={(e) => {
										setName(e.target.value)
									}}
									value={name}
								/>
								<input
									className='dark:bg-gray-300 w-full md:w-1/2 mt-6 md:mt-0 md:ml-3 lg:ml-5 font-body text-black px-4 py-3 border-gray-50 rounded'
									placeholder='Email'
									type='text'
									id='email'
									onChange={(e) => {
										setEmail(e.target.value)
									}}
									value={email}
								/>
							</div>
							<textarea
								className='dark:bg-gray-300 w-full font-body text-black px-4 py-3 border-gray-50 rounded mt-6 md:mt-8'
								placeholder='Message'
								id='message'
								cols='30'
								rows='10'
								onChange={(e) => {
									setMessage(e.target.value)
								}}></textarea>
							<button
								className='bg-primary hover:bg-gray-20 font-header font-bold text-lg text-white px-8 py-3 flex justify-center mt-6 rounded items-center uppercase'
								onClick={(e) => {
									handleSubmit(e)
								}}>
								Send
								<ChevronRightIcon
									height={30}
									width={30}
									className='relative -right-2'
								/>
							</button>
						</form>
					</div>
				)}

				{/* Phone, Email, Address */}
				<div className='flex flex-col lg:flex-row pt-16'>
					<div className='w-full lg:w-1/3 border-l-2 border-t-2 border-r-2 border-b-2 border-gray-60 px-6 py-6 sm:py-8'>
						<div className='flex items-center'>
							<i className='bx bx-phone text-gray-40 text-2xl'></i>
							<p className='font-body font-bold text-gray-40 lg:text-lg uppercase pl-2'>
								My Phone
							</p>
						</div>
						<p className='font-body font-bold text-primary lg:text-lg pt-2 text-left'>
							(518) 694-2779
						</p>
					</div>
					<div className='w-full lg:w-1/3 border-l-2 lg:border-l-0 border-t-0 lg:border-t-2 border-r-2 border-b-2 border-gray-60 px-6 py-6 sm:py-8'>
						<div className='flex items-center'>
							<i className='bx bx-envelope text-gray-40 text-2xl'></i>
							<p className='font-body font-bold text-gray-40 lg:text-lg uppercase pl-2'>
								My Email
							</p>
						</div>
						<p className='font-body font-bold text-primary lg:text-lg pt-2 text-left'>
							erics1337@gmail.com
						</p>
					</div>
					<div className='w-full lg:w-1/3 border-l-2 lg:border-l-0 border-t-0 lg:border-t-2 border-r-2 border-b-2 border-gray-60 px-6 py-6 sm:py-8'>
						<div className='flex items-center'>
							<i className='bx bx-map text-gray-40 text-2xl'></i>
							<p className='font-body font-bold text-gray-40 lg:text-lg uppercase pl-2'>
								My Address
							</p>
						</div>
						<p className='font-body font-bold text-primary lg:text-lg pt-2 text-left'>
							4055 Inca Street, Denver, Colorado
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
