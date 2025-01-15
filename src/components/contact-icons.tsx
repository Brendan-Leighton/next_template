import React from 'react'
import { FaGithub, FaBluesky, FaLinkedinIn } from 'react-icons/fa6'
import { Link } from './link'

export function ContactIcons({ className }: { className?: string }) {

	const icons = [
		{
			icon: <FaGithub />,
			link: 'https://github.com/Brendan-Leighton',
			title: 'GitHub'
		},
		{
			icon: <FaLinkedinIn />,
			link: 'https://www.linkedin.com/in/brendan-leighton/',
			title: 'LinkedIn'
		},
		{
			icon: <FaBluesky />,
			link: 'https://bsky.app/profile/brenzy.bsky.social',
			title: 'Bluesky'
		}
	]

	return (
		<ul
			className={`
				${className} + 
				 flex justify-center gap-4 w-fit p-2 rounded transition-all 3000s
				 shadow-md
				 dark:shadow-none 
				 bg-primary-700 dark:bg-primary-600
			`}
		>
			{
				icons.map(({ icon, link, title }) => (
					<li key={title} title={title}>
						<Link
							href={link}
							ariaLabel={title}
							className="text-white text-4xl"
						>
							{icon}
						</Link>
					</li>
				))
			}
		</ul>
	)
}
