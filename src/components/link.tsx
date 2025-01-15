import React from 'react'

/**
 * Basic link with optional icon or other content.
 * @param props
 * @param props.href href of link
 * @param props.aria_label aria label
 * @param props.children name of the link and optional icon or other content
 * @returns 
 */
export function Link({ href, aria_label, className, children }: { href: string, aria_label: string, className?: string, children: React.ReactNode }) {
	return (
		<a
			href={href}
			aria-label={aria_label}
			className={`
				${className}
				underline underline-offset-4 
				text-primary-600 
				hover:text-accent-600 hover:no-underline
			`}
		>{children}</a>
	)
}
