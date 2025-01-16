import { Code, ContactIcons, ThemeToggler } from "@/components"
import { Button } from "@/components/shadcn/button"

/**
 * Apps Landing Page/
 * @returns {JSX.Element}
 */
export default function Home() {

	const VercelDeployLink = () => {
		return (
			<Button asChild
				variant="link"
				size='link'
			>
				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					aria-label="Vercel"
				>Vercel</a>
			</Button>
		)
	}
	return (
		<div className="flex flex-col justify-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<header>
				<h1
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
						className="block text-center min-[522px]:w-fit  min-[522px]:float-right"
					>~ Brendan Leighton</a>
				</Button>
				<ThemeToggler />
			</header>
			<main
				className="
					flex flex-col gap-8 align-center
					bg-background
					rounded-md w-fit mx-auto
					p-8
				"
			>

				<h2 className="text-3xl">To Do:</h2>

				<ol className="list-decimal list-inside flex flex-col gap-4 w-fit">
					<li>Use Template: https://github.com/Brendan-Leighton/next_template</li>
					<li>
						Update dependencies:
						<ul className="list-circle pl-8 pt-2">
							<li>
								Latest Version <Code code="pnpm up --latest" />
							</li>
							<li>
								Versions Defined in package.json <Code code="pnpm up" />
							</li>
						</ul>
					</li>
					<li>Deploy on {VercelDeployLink()}</li>
					<li>Modify docs or remove features</li>
				</ol>

			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<ContactIcons />
			</footer>
		</div>
	)
}
