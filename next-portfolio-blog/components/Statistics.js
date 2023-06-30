import { useEffect } from 'react'
import { useState } from 'react'
import { Octokit } from '@octokit/core'
import moment from 'moment'
import Image from 'next/image'
import IconProject from '../assets/icon-project.svg'

function Statistics() {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	//   const [commits, setCommits] = useState([]);
	//   const octokit = new Octokit({ auth: process.env.GITHUB_PAT });

	useEffect(() => {
		fetch({
			url: 'https://api.github.com/users/erics1337',
			// headers: {
			// 	'User-Agent': 'request',
			// },
		})
			.then((response) => {
				if (response.ok) {
					return response.json()
				}
				throw response
			})
			.then((data) => {
				setData(data)
			})
			.catch((error) => {
				console.error('Error fetching data: ', error)
				setError(error)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [data])

	//   useEffect(() => {
	//     const owner = 'erics1337',
	//                  repo = 'nextjs-sanity-portfolio-blog',
	//            perPage = 5;

	//     const fiveMostRecentCommits =  octokit.request(
	//         `GET /repos/{owner}/{repo}/commits`, { owner, repo, per_page: perPage }
	//     );

	//     setCommits(fiveMostRecentCommits);
	//   }, [])

	return (
		<section id='stats'>
			{/* <ul>
        {commits.map(commit => (
          <li key={commit.id}>
            {commit.author.name}: {commit.message}
          </li>
        ))}
      </ul> */}

			<div
				className='bg-top bg-cover bg-no-repeat pb-16 dark:bg-secondary-dark-bg bg-gray-100'
				style={{ backgroundImage: 'url(img/experience-figure.png)' }}>
				<div className='container'>
					<div className='bg-gray-100/90 dark:bg-secondary-dark-bg/90 w-5/6 md:w-11/12 2xl:w-full mx-auto py-16 lg:py-20 xl:py-24 shadow'>
						<h1 className='text-center font-semibold text-3xl pb-20 text-primary'>
							My GitHub Stats
						</h1>

						<div className='grid grid-cols-2 xl:grid-cols-4 gap-5 md:gap-8 xl:gap-5'>
							<div className='flex md:flex-row flex-col justify-center items-center text-center md:text-left'>
								<div>
									<svg
										className='mx-auto h-15 md:h-20 w-auto dark:fill-gray-300'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 850.39 850.39'>
										<g id='ICONS'>
											<path d='M704.85,3.41c-.63.26-63.64,25.6-137.77,75.3-43.57,29.2-82.45,61-115.58,94.52-41.53,42-74.08,86.85-96.77,133.3l-5.54,11.35c-21.21,1.7-52.68,8.08-88.47,27.93-42.43,23.54-82.27,60.89-118.41,111l-2,2.73L172,540.2l6.64-6.26c.46-.44,30.5-28.57,66.11-49.43-7.5,8.61-14.64,17.59-20.78,26.24-27.61,38.91-56.83,126-58.06,129.71l-6.43,19.25,16-12.42c3.08-2.38,75.65-58.74,103.25-97.65a346.38,346.38,0,0,0,34.87-62.49,73.31,73.31,0,0,0,13,12.64l0,.06c-31.23,51.57-48.53,80.39-56.42,94.78-4.25,7.75-7.5,13.68-6.74,18.3-19.71,16.09-44.68,45.54-62.7,74.27-27.4,43.68-53.6,139.55-54.7,143.61l-5.32,19.58,15.32-13.31c3.17-2.76,78.07-68.08,105.47-111.77,16-25.5,32-61.5,39-87.37l.61-.19c5.8-2,11.3-8.27,82.21-98.69l.08-.1a72.79,72.79,0,0,0,17.62,7.89c-15.88,15.71-33.6,38.06-46.47,58.81-25.14,40.55-48.91,129.3-49.9,133.06l-5.22,19.61,15.25-13.39c2.92-2.57,71.85-63.32,97-103.87,4.15-6.69,8.25-14,12.14-21.46-7.29,38.73-21.71,73.75-22,74.33l-3.51,8.42,86.66,1.16,1.85-2.81C521.18,649,542.06,598.31,549,550.12c5.86-40.76.52-72.57-5.51-93Q549.29,451,555,445c35.43-37.65,65.8-84,90.26-137.82,19.52-42.93,35.35-90.67,47.05-141.9,19.91-87.17,21-155.33,21-156L713.41,0ZM176.92,518.89l-22.63-57.57C227.17,361.59,300,336.26,342.83,330.93c-17.25,35.46-29,60-38.19,79.46a73.11,73.11,0,0,0-6.4,40.37C251,457,195.89,502.21,176.92,518.89Zm91.84,23.61c-18.65,26.28-60.45,62.26-83.92,81.53,10.43-28.52,30.58-79.85,49.23-106.14a336.51,336.51,0,0,1,42.83-48.95,105.8,105.8,0,0,1,23.94-6.08,72.42,72.42,0,0,0,4.62,11.51C297.85,495.08,283.55,521.65,268.76,542.5ZM251.12,718.76c-18.92,30.16-63.21,72.67-87.12,94.63,9.35-31.08,28.34-89.46,47.26-119.63,17.25-27.5,41.9-56.57,60.46-71.61a88.32,88.32,0,0,0,8.58,5.44,90,90,0,0,0,8.56,6.38C282.36,658.49,266.46,694.31,251.12,718.76ZM373.69,531.45C328.56,589,305,618.76,298.18,625.12c-3-1.44-7.88-5.2-10.32-7.3l-.71-.55-.38-.21c-3.58-1.95-8.3-5-10.48-7.08,3.54-8.63,23.07-41.2,60.93-103.74,28.55-47.15,55.73-67.77,68.86-67a6.29,6.29,0,0,1,5.91,4.09C417.39,455.39,407.71,488.07,373.69,531.45Zm27.57,103.12c-17,27.39-56.47,65.89-78.71,86.58,8.65-29.11,25.58-81.6,42.56-109C378.85,590,398.27,566,414.61,551l-1.53-1.66a72.76,72.76,0,0,0,8.72.53c.7,0,1.39,0,2.09-.05,3,9.2,4.17,19.75,4.13,30.88A339.26,339.26,0,0,1,401.26,634.57Zm77.22,56.52-61.86-.82c7.09-18.83,23-65.48,23.68-107.15.49-1.31,1-2.6,1.43-3.89l-1.42-.51a114.35,114.35,0,0,0-4-30.34,73,73,0,0,0,36.94-19.68c20.5-20.29,40.67-40.77,60.24-61.16C544,509.46,546.51,586.9,478.48,691.09ZM680.23,162.76c-18.08,79-56,190.68-134.21,273.73-26,27.67-53.42,55.74-81.41,83.44A60.81,60.81,0,0,1,391,529.06c28.07-38.53,40.4-72.71,32.29-90.75A18.51,18.51,0,0,0,406.83,427c-19.79-1.21-47.38,22.42-73.51,62.33a60.57,60.57,0,0,1-17.51-73.67c11.1-23.62,26.05-54.63,50-103.69,39.67-81.21,104.8-145.3,163.57-190.85l8.33,6.33,7.54-9.92-5.59-4.25c11.77-8.81,23.21-16.87,34-24.14C630.7,50.88,681,27.28,700.62,18.63,699.59,40.13,695.57,95.71,680.23,162.76Z' />
											<path d='M570.1,201.4a58.36,58.36,0,1,0-33.31,106.39,58.77,58.77,0,0,0,10.62-1,58,58,0,0,0,37.52-24.22h0A58.48,58.48,0,0,0,570.1,201.4Zm4.68,74.18a46,46,0,1,1-46.14-71.44,46.42,46.42,0,0,1,8.36-.76,46,46,0,0,1,37.78,72.2Z' />
											<rect
												x='601.87'
												y='165.44'
												width='12.46'
												height='15.21'
												transform='translate(102.48 552.62) rotate(-52.78)'
											/>
											<rect
												x='626.08'
												y='183.84'
												width='12.45'
												height='15.21'
												transform='translate(97.39 579.16) rotate(-52.78)'
											/>
											<rect
												x='553.43'
												y='128.65'
												width='12.46'
												height='15.21'
												transform='translate(112.64 499.51) rotate(-52.78)'
											/>
											<rect
												x='577.65'
												y='147.05'
												width='12.46'
												height='15.21'
												transform='translate(107.56 526.07) rotate(-52.78)'
											/>
											<rect
												x='650.3'
												y='202.23'
												width='12.46'
												height='15.21'
												transform='translate(92.33 605.74) rotate(-52.78)'
											/>
										</g>
									</svg>
								</div>
								<div className='md:pl-5 md:pt-0 pt-5'>
									<h1 className='font-body font-bold md:text-4xl text-2xl text-primary'>
										{data?.public_repos}
									</h1>
									<h4 className='font-header font-medium md:text-xl text-base text-gray-dark leading-loose'>
										Public Repos
									</h4>
								</div>
							</div>

							<div className='flex md:flex-row flex-col justify-center items-center text-center md:text-left'>
								<div>
									<svg
										className='mx-auto h-15 md:h-20 w-auto dark:fill-gray-300'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 850.39 850.39'>
										<g id='ICONS'>
											<path d='M769.83,67.05l-.82-.21-90.37-1c1.57-24.05,2.19-44.22,2.41-58.79l.1-7L192.92.87,193.1,8c.4,16.56,1.2,36.18,2.7,57.93l-84.54.94-.82.21c-11.83,3.07-34.15,16.38-33.9,44.78v.22c.1,2.47,2.77,61.22,31.5,129.58C125,281.87,147.46,317,174.9,346c33,34.83,73.15,60.85,119.51,77.41q5.71,8.55,11.73,16.5c31.77,42,64.48,68.93,97.66,80.62.42,16.31-.51,60.18-20.93,82.5-8,8.76-18,13.07-30.49,13.18l-17.79.15.21,23.87H260.2V850.39H624.32V640.22H552l-.23-25.76-17.66.15h-.48c-12.29,0-22.2-4.13-30.29-12.63-20.69-21.75-22.71-65.1-22.69-81.74,32.74-12,64-39.25,93.44-81.58q4.86-7,9.52-14.46c47.33-16.51,88.29-42.81,121.79-78.21,27.44-29,49.93-64.12,66.85-104.36,28.74-68.36,31.4-127.11,31.5-129.58v-.22C804,83.43,781.66,70.12,769.83,67.05ZM213.41,204.92q14.88,77.58,39.29,138-3.8-2.26-7.49-4.68c-59.37-38.83-96.49-105-110.32-196.72l0-.16c0-.07-1-7.19,3.26-12.71,3.45-4.43,9.6-7,18.29-7.72l44.3-.59C203.71,147.23,207.82,175.81,213.41,204.92ZM121,236.68C93.67,171.85,90.55,114.31,90.41,111.59c-.12-22.33,18.83-29.61,22.81-30.9l83.61-.92c.68,8.64,1.48,17.58,2.4,26.75l-43.22.57-.44,0c-12.87,1-22.42,5.36-28.4,13.06-7.76,10-6.25,21.85-6,23.45,7.88,52.23,23.47,97.26,46.34,133.82,18.68,29.87,42.27,54.24,70.1,72.44a221.72,221.72,0,0,0,23.88,13.59,446.6,446.6,0,0,0,20.71,40.3C208.94,372.83,154.78,316.72,121,236.68ZM610.45,836.52H274.08V654.1H610.45Zm-117.21-225c10.83,11.4,24.58,17.17,41,17l3.79,0,.1,11.76H348.67l-.09-10.11,3.92,0c16.34-.14,30-6.09,40.61-17.68,22.23-24.31,24.8-67.34,24.65-87.86a111.48,111.48,0,0,0,24.16,2.7l2.25,0a110.49,110.49,0,0,0,22.57-2.84C467.05,545,470.59,587.7,493.24,611.52Zm69.42-180.78c-37.46,54-77.43,81.74-118.78,82.59-42.26.84-84.92-26.65-126.68-81.81-4.43-5.84-8.67-11.91-12.76-18.14l.36-1.06-1.34-.47a415,415,0,0,1-30.67-57.35l.38-.84-.94-.44c-42.66-97-57.72-214.86-62.92-294.07h8.88V45.27h-9.72c-.61-11.2-1-21.46-1.31-30.55L667,13.9C665.41,87.21,652.66,301.13,562.66,430.74ZM759.43,236.25c-34.24,81.44-89.56,138.14-164.6,168.84q10.29-18.58,19.42-39.46a222.48,222.48,0,0,0,28.4-15.75c27.84-18.2,51.43-42.57,70.11-72.44,22.87-36.56,38.46-81.58,46.34-133.81.25-1.59,1.77-13.47-6-23.46-6-7.7-15.54-12.09-28.41-13.06l-48.75-.66-.19,13.87,48.11.64c8.61.68,14.74,3.25,18.2,7.62,4.42,5.57,3.35,12.8,3.35,12.81l0,.16c-13.83,91.7-51,157.89-110.32,196.72q-6.16,4-12.64,7.64c16.08-41,29.09-87.72,38.92-140A1169.8,1169.8,0,0,0,677.67,79.7l89.37,1C771.1,82,790,89.3,789.85,111.59,789.72,114.33,786.66,171.47,759.43,236.25Z' />
											<rect
												x='269.01'
												y='45.27'
												width='16.94'
												height='13.87'
											/>
											<rect
												x='336.78'
												y='45.27'
												width='16.94'
												height='13.87'
											/>
											<rect
												x='302.9'
												y='45.27'
												width='16.94'
												height='13.87'
											/>
											<rect
												x='235.13'
												y='45.27'
												width='16.94'
												height='13.87'
											/>
											<rect
												x='573.96'
												y='45.27'
												width='16.94'
												height='13.87'
											/>
											<rect
												x='540.07'
												y='45.27'
												width='16.94'
												height='13.87'
											/>
											<rect
												x='607.84'
												y='45.27'
												width='16.94'
												height='13.87'
											/>
											<rect
												x='641.72'
												y='45.27'
												width='16.94'
												height='13.87'
											/>
											<rect
												x='506.19'
												y='45.27'
												width='16.94'
												height='13.87'
											/>
											<rect
												x='370.66'
												y='45.27'
												width='16.94'
												height='13.87'
											/>
											<rect
												x='404.54'
												y='45.27'
												width='16.94'
												height='13.87'
											/>
											<rect
												x='438.43'
												y='45.27'
												width='16.94'
												height='13.87'
											/>
											<rect
												x='472.31'
												y='45.27'
												width='16.94'
												height='13.87'
											/>
											<path d='M558.16,677.3H326.37v136H558.16ZM544.28,799.44h-204V691.18h204Z' />
										</g>
									</svg>
								</div>
								<div className='md:pl-5 md:pt-0 pt-5'>
									<h1 className='font-body font-bold md:text-4xl text-2xl text-primary'>
										{data?.followers}
									</h1>
									<h4 className='font-header font-medium md:text-xl text-base text-gray-dark leading-loose'>
										Followers
									</h4>
								</div>
							</div>

							<div className='flex md:flex-row flex-col justify-center items-center text-center md:text-left lg:mt-0 md:mt-10 mt-6'>
								<div>
									<svg
										className='mx-auto h-15 md:h-20 w-auto dark:fill-gray-300'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 850.39 850.39'>
										<g id='ICONS'>
											<path d='M717.07,114c-19.65-18.72-46.26-28.21-74.92-26.73-37.38,1.93-64.49,30.22-75.66,44.15-11.21-13.89-38.4-42.08-75.79-43.91-28.68-1.41-55.25,8.16-74.85,26.94a101.59,101.59,0,0,0-30.92,68c-2.89,51.07,31.23,95.85,57.15,125.1,34.05,38.38,86.8,79.57,121.31,100.43l3.48,2.09,3.47-2.1c34.42-20.91,87.06-62.25,121-100.8,25.83-29.32,59.81-74.2,56.8-125.28A101.56,101.56,0,0,0,717.07,114ZM681.34,298.27c-32,36.27-81,75.09-114.49,96.07-28.12-17.56-79.2-55.65-114.74-95.72-24.34-27.47-56.4-69.32-53.79-115.44,2.28-40.68,33.3-82.42,86.6-82.42,1.68,0,3.39,0,5.12.12,41.81,2.05,70.58,45,70.86,45.45l5.61,8.55,5.61-8.57c.29-.43,28.94-43.51,70.72-45.67,56.42-2.92,89.48,40.07,92,82C737.53,228.79,705.59,270.74,681.34,298.27Z' />
											<path d='M779.9,0H338c-27.4,0-49.7,23.23-49.7,51.78V362.6H189.16c-24.31,0-44.08,20.62-44.08,46v248c0,25.34,19.77,46,44.08,46h48.56L269,850.39l47.24-147.87H593.77c24.3,0,44.08-20.62,44.08-46V479.48H624.43V656.56c0,17.94-13.75,32.54-30.66,32.54H306.41L271.61,798l-23-108.92H189.16c-16.91,0-30.66-14.6-30.66-32.54v-248c0-17.95,13.75-32.55,30.66-32.55h99.13V426.2c0,28.55,22.3,51.78,49.7,51.78H660.33l51,190.11L761.6,478h18.3c27.4,0,49.7-23.23,49.7-51.78V51.78C829.6,23.23,807.3,0,779.9,0Zm36.29,426.2c0,21.16-16.28,38.37-36.29,38.37H751.28L711.25,616,670.61,464.57H338c-20,0-36.29-17.21-36.29-38.37V51.78C301.7,30.62,318,13.41,338,13.41H779.9c20,0,36.29,17.21,36.29,38.37Z' />
											<rect
												x='286.89'
												y='538.09'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='408.97'
												y='538.09'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='470.01'
												y='538.09'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='561.57'
												y='538.09'
												width='5'
												height='12.5'
											/>
											<rect
												x='531.05'
												y='538.09'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='439.49'
												y='538.09'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='225.85'
												y='538.09'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='378.45'
												y='538.09'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='500.53'
												y='538.09'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='317.41'
												y='538.09'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='256.37'
												y='538.09'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='347.93'
												y='538.09'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='506.01'
												y='591.36'
												width='15.07'
												height='12.5'
											/>
											<rect
												x='414.45'
												y='591.36'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='322.89'
												y='591.36'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='292.37'
												y='591.36'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='475.49'
												y='591.36'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='261.85'
												y='591.36'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='444.97'
												y='591.36'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='353.41'
												y='591.36'
												width='15.26'
												height='12.5'
											/>
											<rect
												x='383.93'
												y='591.36'
												width='15.26'
												height='12.5'
											/>
										</g>
									</svg>
								</div>
								<div className='md:pl-5 md:pt-0 pt-5'>
									<h1 className='font-body font-bold md:text-4xl text-2xl text-primary'>
										{data?.following}
									</h1>
									<h4 className='font-header font-medium md:text-xl text-base text-gray-dark leading-loose'>
										Accounts I follow
									</h4>
								</div>
							</div>

							<div className='flex md:flex-row flex-col justify-center items-center text-center md:text-left lg:mt-0 md:mt-10 mt-6'>
								<div>
									<svg
										className='mx-auto h-15 md:h-20 w-auto dark:fill-gray-300'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 850.39 850.39'>
										<g id='ICONS'>
											<path d='M131.41,350.49,259.73,316.7c17.93-4.72,27.91-11.45,30.51-20.58,3-10.48-5-18.94-7.65-21.72-7.35-7.77-11-11.67-14.44-18.66a12.83,12.83,0,0,1,.24-11.11c2.73-5.94,8.93-10.81,16.19-12.72l.55-.15c7.24-1.91,15-.72,20.34,3.11a12.8,12.8,0,0,1,5.67,9.55c.49,7.77-.8,13-3.37,23.34-.92,3.72-3.72,15,4,22.69,6.76,6.65,18.76,7.59,36.69,2.87l128.32-33.78-22-83.5c-5.08-19.32-11.8-29.47-21.14-32-10.18-2.7-18.07,5.29-20.66,7.93-7.28,7.4-10.93,11.11-17.55,14.47a10.77,10.77,0,0,1-9.4-.17c-6.22-2.79-11.41-9.6-13.56-17.76l-.15-.58c-2.15-8.16-1-16.64,3.05-22.14a10.81,10.81,0,0,1,8.1-4.78c7.38-.36,12.4,1.09,22.39,4,9.52,2.72,16.88,1.62,21.88-3.28s6.73-12.27,5.6-23.07h5.8V85.34h-8.13v.53c-.19-.79-.38-1.56-.59-2.37L408.48,0,63.07,91l22,83.5c5.19,19.71,1.57,24,1.15,24.38s-2.22,1.39-7.95-.25c-10.39-3-17.26-5-27-4.5-7.46.35-14.19,4.11-18.95,10.6-6.52,8.89-8.57,22-5.35,34.24l.15.58c3.22,12.23,11.47,22.64,21.53,27.16,7.34,3.3,15,3.25,21.71-.12,8.72-4.42,13.72-9.51,21.28-17.2,4.17-4.25,6.14-4.31,6.79-4.13s5.81,2.07,11,21.77ZM98,230.85c-5.45,0-11,2.83-16.55,8.47-7.27,7.4-10.92,11.11-17.54,14.47a10.77,10.77,0,0,1-9.4-.17c-6.21-2.79-11.41-9.6-13.55-17.74l-.16-.6c-2.15-8.16-1-16.65,3-22.14a10.81,10.81,0,0,1,8.1-4.78c7.4-.35,12.41,1.09,22.39,4C83.83,215,91.2,213.94,96.2,209c6.92-6.76,7.77-18.91,2.68-38.23L80.53,101.13,195,71,398.3,17.46l18.35,69.68c5.19,19.71,1.57,24,1.15,24.38s-2.23,1.39-7.95-.25c-10.76-3.09-17.26-5-27-4.5-7.46.35-14.19,4.11-19,10.61-6.62,9-8.62,21.81-5.36,34.21l.16.6c3.22,12.23,11.47,22.64,21.52,27.15,7.34,3.31,15.06,3.26,21.72-.11,8.71-4.42,13.44-9.23,21.27-17.2,4.19-4.25,6.15-4.3,6.8-4.13s5.81,2.07,11,21.77l18.35,69.68L344.86,279.5c-17.86,4.7-22.31,1.46-23,.76-.9-.88-1.66-3.17-.2-9.07,2.73-11,4.38-17.7,3.76-27.67-.5-8-4.61-15.21-11.58-20.24-8.8-6.36-20.9-8.35-32.34-5.34l-.57.15c-11.44,3-21,10.71-25.52,20.58a26.86,26.86,0,0,0-.1,23.32c4.36,9,9.08,14,16.91,22.23,4.17,4.41,4.63,6.77,4.29,8-.27,1-2.54,6-20.41,10.68L141.59,333l-18.35-69.67c-5.08-19.32-11.8-29.47-21.14-32A15.71,15.71,0,0,0,98,230.85Z' />
											<path d='M807.78,582.74V329H675.09c-18.49,0-22-4.28-22.46-5.13-.64-1.09-.8-3.49,2.12-8.81,5.45-10,8.74-16,10.69-25.8,1.56-7.89-.59-15.89-6.05-22.53-6.9-8.39-18.08-13.4-29.91-13.4h-.59c-11.83,0-23,5-29.92,13.41a26.86,26.86,0,0,0-6,22.52c1.94,9.79,5.23,15.82,10.69,25.8,2.91,5.32,2.76,7.73,2.12,8.81-.51.86-4,5.13-22.46,5.13H450.59v86.34c0,20.38-4.57,23.57-5.1,23.87s-2.5.78-7.62-2.27c-9.62-5.72-15.43-9.18-25-11.22-7.3-1.56-14.77.37-21,5.43-8.7,7-13.89,18.9-13.89,31.74v.61c0,12.64,5.32,24.81,13.9,31.74,6.26,5.06,13.73,7,21,5.41,9.55-2.06,15.68-5.7,24.95-11.21,5.13-3.05,7.05-2.6,7.63-2.27s5.09,3.49,5.09,23.86v71.68H325.5l-.46,0c-14.68.94-23.8,5-27.87,12.39-5.1,9.27.35,19.22,2.14,22.49,5.13,9.36,7.7,14.07,9.21,21.72A12.81,12.81,0,0,1,305.46,650c-4.15,5.05-11.38,8.19-18.88,8.19H286c-7.49,0-14.72-3.14-18.87-8.19a12.78,12.78,0,0,1-3.06-10.67c1.52-7.7,4.09-12.38,9.2-21.72,1.79-3.26,7.25-13.21,2.15-22.49-4.07-7.4-13.19-11.45-27.87-12.39l-138.78,0v86.35c0,20,3.91,31.51,12.32,36.29,6.09,3.46,13.49,2.65,22-2.4,8.91-5.3,13.39-8,20.66-9.53a10.78,10.78,0,0,1,9.05,2.56c5.3,4.29,8.59,12.19,8.59,20.62v.6c0,8.44-3.29,16.35-8.59,20.64a10.85,10.85,0,0,1-9,2.57c-7.23-1.56-11.72-4.23-20.65-9.54-3.25-1.94-13.14-7.83-22.2-2.68-8.27,4.7-12.12,16.08-12.12,35.83v86.34H240.39c18.55,0,29.91-4,34.75-12.13,5.56-9.38,0-19.6-1.88-23-5.12-9.37-7.69-14.08-9.2-21.73a12.79,12.79,0,0,1,3.05-10.65c4.16-5,11.39-8.19,18.89-8.19h.59c7.49,0,14.72,3.14,18.88,8.19a12.8,12.8,0,0,1,3,10.66c-1.51,7.67-4.09,12.37-9.2,21.73-1.84,3.35-7.44,13.56-1.88,23,4.83,8.16,16.2,12.13,34.75,12.13H583.28c18.55,0,29.91-4,34.75-12.13,5.56-9.37,0-19.59-1.87-23-5.12-9.38-7.7-14.08-9.21-21.74A12.78,12.78,0,0,1,610,782.92c4.15-5.06,11.39-8.19,18.88-8.19h.59c7.49,0,14.73,3.13,18.88,8.19a12.78,12.78,0,0,1,3.06,10.65c-1.52,7.69-4.09,12.38-9.21,21.73-1.84,3.36-7.44,13.57-1.88,23,4.84,8.16,16.21,12.13,34.76,12.13H807.78V582.74Zm-355.21-108c-9.16-5.22-18.82.51-22,2.4-8.92,5.3-13.39,8-20.65,9.53a10.79,10.79,0,0,1-9.05-2.56c-5.3-4.28-8.59-12.19-8.59-20.62v-.61c0-8.44,3.29-16.34,8.59-20.63a10.83,10.83,0,0,1,9.05-2.57c7.23,1.56,11.72,4.22,20.65,9.54,8.51,5.06,15.91,5.86,22,2.4,8.41-4.78,12.32-16.31,12.32-36.29V343.32h118.4c18.55,0,29.92-4,34.75-12.13,5.56-9.38,0-19.6-1.87-22.95-5.12-9.38-7.7-14.09-9.21-21.72A12.81,12.81,0,0,1,610,275.84c4.15-5,11.38-8.19,18.87-8.19h.59c7.49,0,14.72,3.14,18.87,8.19a12.84,12.84,0,0,1,3.07,10.68c-1.52,7.66-4.09,12.36-9.21,21.71-1.84,3.35-7.44,13.56-1.88,22.95,4.84,8.17,16.21,12.14,34.76,12.14H793.48V582.74H675.09c-18.48,0-22-4.27-22.45-5.13a3.15,3.15,0,0,1-.39-1.55c.08-1.44.7-3.61,2.5-6.89,5.45-10,8.74-16,10.69-25.8a26.77,26.77,0,0,0,.49-4.69,27.36,27.36,0,0,0-6.53-18.21c-6.9-8.4-18.08-13.4-29.92-13.4h-.59c-11.83,0-23,5-29.92,13.41a27.51,27.51,0,0,0-6.52,16.94,26,26,0,0,0,.48,6c1.93,9.77,5.22,15.79,10.69,25.81,1.87,3.43,2.47,5.64,2.5,7.07a3,3,0,0,1-.38,1.36c-.51.86-4,5.13-22.46,5.13H464.88V511.06C464.88,491.09,461,479.56,452.57,474.78ZM332.19,836.1c-18.48,0-21.95-4.27-22.46-5.13-.64-1.08-.79-3.49,2.12-8.8,5.46-10,8.75-16,10.69-25.82a26.82,26.82,0,0,0-6-22.5c-6.9-8.4-18.09-13.42-29.92-13.42H286c-11.84,0-23,5-29.93,13.42a26.82,26.82,0,0,0-6,22.5c1.93,9.8,5.22,15.82,10.69,25.83,2.91,5.31,2.76,7.71,2.11,8.79-.5.86-4,5.13-22.45,5.13H123.05V764.05c0-20,4.38-23.12,4.88-23.4.69-.39,2.62-.58,7.84,2.53,9.62,5.73,15.43,9.18,25,11.23,7.31,1.57,14.76-.36,21-5.43,8.58-6.93,13.9-19.1,13.9-31.75v-.6c0-12.64-5.32-24.8-13.89-31.73-6.26-5.07-13.73-7-21-5.43-9.57,2.07-15.69,5.71-25,11.22-5.11,3-7,2.6-7.61,2.27s-5.1-3.49-5.1-23.87V597h123.8c10.16.68,14.94,3,16,5,.49.9.87,3.22-2.15,8.73-5.27,9.61-8.74,16-10.7,25.82a26.87,26.87,0,0,0,6,22.52c6.89,8.39,18.08,13.4,29.91,13.4h.59c11.84,0,23-5,29.92-13.41a26.81,26.81,0,0,0,6-22.51c-1.94-9.81-5.23-15.84-10.69-25.81-2.87-5.24-2.76-7.65-2.16-8.74,1.09-2,5.88-4.32,16-5H450.59v72c0,1.26,0,2.48.05,3.67.46,17.76,4.39,28.18,12.28,32.66,6.09,3.46,13.48,2.65,22-2.41,8.94-5.31,13.42-8,20.67-9.54a10.8,10.8,0,0,1,9,2.57c5.3,4.29,8.6,12.19,8.6,20.64v.56c0,8.43-3.3,16.33-8.59,20.62a10.85,10.85,0,0,1-9,2.57c-7.29-1.58-11.76-4.24-20.67-9.55-.6-.36-1.49-1-2.44-1.65-5-3.49-13.28-9.33-21.44-5.1-7.22,3.75-10.44,13.43-10.44,31.37V836.1Zm342.9,0c-18.49,0-22-4.27-22.46-5.13-.64-1.08-.8-3.49,2.12-8.8,5.45-10,8.75-16,10.69-25.82,1.56-7.88-.59-15.87-6-22.51-6.9-8.39-18.08-13.41-29.92-13.41h-.59c-11.84,0-23,5-29.92,13.41-5.45,6.64-7.6,14.63-6,22.5,1.94,9.82,5.23,15.84,10.69,25.83,2.91,5.32,2.76,7.72,2.12,8.81-.51.85-4,5.12-22.46,5.12H464.88V764c0-20,4.39-23.11,4.89-23.4.68-.39,2.61-.57,7.83,2.53,9.25,5.5,15.36,9.14,25,11.22,7.3,1.56,14.77-.37,21-5.43,8.57-6.93,13.89-19.09,13.89-31.73v-.67c0-12.65-5.33-24.81-13.91-31.74-6.26-5.05-13.73-7-21-5.4-9.59,2.05-15.71,5.7-25,11.21-5.12,3-7,2.6-7.62,2.27s-4.54-3.1-5.05-20.22c0-1.13-.05-2.33-.05-3.6V597.41h118.4c18.55,0,29.91-4,34.75-12.13a17,17,0,0,0,2.39-8.32c.33-6.65-2.93-12.61-4.25-15-5.12-9.33-7.69-14-9.21-21.71a11.32,11.32,0,0,1-.22-2.27,13.54,13.54,0,0,1,3.27-8c4.15-5,11.39-8.19,18.88-8.19h.59c7.49,0,14.72,3.14,18.87,8.18a13.37,13.37,0,0,1,3.28,8.61,11,11,0,0,1-.21,1.68c-1.53,7.71-4.09,12.39-9.21,21.73-1.27,2.32-4.32,7.9-4.27,14.22a17.17,17.17,0,0,0,2.4,9.12c4.83,8.16,16.2,12.13,34.75,12.13H793.48V836.1Z' />
											<rect
												x='584.51'
												y='85.34'
												width='16.15'
												height='13.33'
											/>
											<rect
												x='552.21'
												y='85.34'
												width='16.15'
												height='13.33'
											/>
											<rect
												x='487.63'
												y='85.34'
												width='16.15'
												height='13.33'
											/>
											<rect
												x='455.34'
												y='85.34'
												width='16.15'
												height='13.33'
											/>
											<rect
												x='519.92'
												y='85.34'
												width='16.15'
												height='13.33'
											/>
											<polygon points='618.27 100.14 631.6 100.14 631.6 85.34 616.8 85.34 616.8 98.67 618.27 98.67 618.27 100.14' />
											<rect
												x='618.27'
												y='212.98'
												width='13.33'
												height='16.12'
											/>
											<rect
												x='618.27'
												y='116.26'
												width='13.33'
												height='16.12'
											/>
											<rect
												x='618.27'
												y='148.5'
												width='13.33'
												height='16.12'
											/>
											<rect
												x='618.27'
												y='180.74'
												width='13.33'
												height='16.12'
											/>
											<rect
												x='618.27'
												y='245.22'
												width='13.33'
												height='8.13'
											/>
										</g>
									</svg>
								</div>
								<div className='md:pl-5 md:pt-0 pt-5'>
									<h1 className='font-body font-bold md:text-4xl text-2xl text-primary'>
										{moment().diff(
											data?.created_at,
											'years'
										)}
									</h1>
									<h4 className='font-header font-medium md:text-xl text-base text-gray-dark leading-loose'>
										Years a Member
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Statistics
