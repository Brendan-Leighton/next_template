import { ContactIcons } from "@/components"
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
					target="_blank"
				>Vercel</a>
			</Button>
		)
	}

	const GithubNextTemplateLink = () => {
		return (
			<Button asChild
				variant="link"
				size='link'
			>
				<a
					href="https://github.com/Brendan-Leighton/next_template"
					aria-label="Github"
					target="_blank"
				>Github</a>
			</Button>
		)
	}

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

				<h2 id="getting-started" className="text-3xl sm:text-4xl">Getting Started:</h2>
				<em className="text-zinc-700 dark:text-zinc-300">Refer to the README for detailed instructions.</em>
				<ol className="list-decimal list-inside flex flex-col gap-4 w-fit">
					<li>Use Template on {GithubNextTemplateLink()}</li>
					<li>Update dependencies</li>
					<li>Deploy on {VercelDeployLink()}</li>
					<li>Modify docs or remove features</li>
					<li>Begin Coding</li>
				</ol>

			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<ContactIcons />
			</footer>
		</div>
	)
}
