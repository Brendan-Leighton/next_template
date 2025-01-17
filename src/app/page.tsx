import { ContactIcons, GettingStarted } from "@/components"
import { Button } from "@/components/shadcn/button"

/**
 * Apps Landing Page/
 * @returns {JSX.Element}
 */
export default function Home() {

	return (
		<div className="flex flex-col justify-center items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<header>
				<h1
					id="top"
					className='
						text-6xl pb-4 text-foreground
						max-w-[522px]
						text-center sm:text-left
					'
				>Next.js Template</h1>
				<Button asChild
					size='link'
					variant='link'
				>
					<a
						href="https://github.com/Brendan-Leighton"
						aria-label="Vercel"
						className="block mx-auto min-[522px]:w-fit  min-[522px]:float-right"
					>~ Brendan Leighton</a>
				</Button>
			</header>
			<main
				className="
					flex flex-col gap-8 align-center
					bg-background
					rounded-md w-fit mx-auto
				"
			>
				<GettingStarted />

			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<ContactIcons />
			</footer>
		</div>
	)
}
