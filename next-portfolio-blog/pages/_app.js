import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil'
import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }) {
	// Google Analytics
	const router = useRouter()
	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url)
		}
		//When the component is mounted, subscribe to router changes
		//and log those page views
		router.events.on('routeChangeComplete', handleRouteChange)

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return (
		<RecoilRoot>
			<Component {...pageProps} />
		</RecoilRoot>
	)
}

export default MyApp
