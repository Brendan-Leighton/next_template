import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Next.js Template",
	description: "A project template using Next.js, TypeScript, TailwindCSS, Shadcn UI, and more!",
	applicationName: 'Next.js Template',
	authors: [{ name: 'Brendan Leighton', url: 'https://github.com/Brendan-Leighton' }],
	creator: 'Brendan Leighton',
	robots: {
		index: true,
		follow: true
	},
	generator: 'Next.js',
	keywords: ['Brendan', 'Leighton', 'Next.js', 'Template'],
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#0a0a0a',
	colorScheme: 'dark light',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 transition-all duration-300 ease-in-out`}
			>
				{children}
			</body>
		</html>
	)
}
