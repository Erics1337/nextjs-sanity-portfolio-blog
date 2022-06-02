import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import InstagramEmbed from 'react-instagram-embed'

const imgBuilder = imageUrlBuilder({
	projectId: 'ulqdo09f',
	dataset: 'production',
})

const serializers = {
	h1: (props) => (
		<h1 className={'font-semibold text-2xl mt-5 py-4'} {...props} />
	),
	h2: (props) => (
		<h2
			className={'font-semibold text-2xl mt-5 py-4 text-center'}
			{...props}
		/>
	),
	link: (props) => (
		<a
			className='text-primary underline cursor-pointer'
			href={props.href}
			target='_blank'>
			{props.children}
		</a>
	),
	// image: ({ asset }) => <pre>{JSON.stringify(imgBuilder.image(asset._ref), null, 2)}</pre>,
	image: ({ asset }) => (
		<img
			className='mx-auto p-3 lg:w-2/3 w-100'
			src={imgBuilder.image(asset._ref)}
		/>
	),
	instagramPost: ({ url }) => (
		<InstagramEmbed
			clientAccessToken='602314314308541|88520117e2e8efca9fdfdd7264892086'
			url={url}
			className='mx-auto pb-3 lg:w-2/3 w-100'
			maxWidth={480}
			containerTagName='div'
			hideCaption={true}
			injectScript
		/>
	),

	types: {
		inlineicon: (props) => (
			<img
				className='mx-auto w-10 h-10'
				height={60}
				width={60}
				src={imgBuilder.image(props.node.asset._ref || '')}
				alt={props.children[0]}
			/>
		),
		block: (props) => {
			const { style = 'normal' } = props.node

			if (/^h\d/.test(style)) {
				const level = style.replace(/[^\d]/g, '')
				return React.createElement(
					style,
					{
						className: `heading-${level}`,
						paddingBottom: '0.5em',
						marginLeft: 'auto',
						marginRight: 'auto',
					},
					props.children
				)
			}

			if (style === 'blockquote') {
				return <blockquote>- {props.children}</blockquote>
			}

			// Fall back to default handling
			return BlockContent.defaultSerializers.types.block(props)
		},
		code: (props) =>
			console.log('code block', props) || (
				<pre data-language={props.node.language}>
					<code>{props.node.code}</code>
				</pre>
			),
	},
	list: (props) =>
		console.log('list', props) ||
		(props.type === 'bullet' ? (
			<ul>{props.children}</ul>
		) : (
			<ol>{props.children}</ol>
		)),
	listItem: (props) =>
		console.log('list', props) ||
		(props.type === 'bullet' ? (
			<li>{props.children}</li>
		) : (
			<li>{props.children}</li>
		)),
	marks: {
		strong: (props) =>
			console.log('strong', props) || <strong>{props.children}</strong>,
		em: (props) => console.log('em', props) || <em>{props.children}</em>,
		code: (props) =>
			console.log('code', props) || <code>{props.children}</code>,
		link: (props) =>
			props.mark.blank ? (
				<a
					href={props.mark.href}
					target='_blank'
					rel='noopener noreferer'>
					{props.children}
				</a>
			) : (
				<a href={props.mark.href}>{props.children}</a>
			),
	},
}

export default serializers
