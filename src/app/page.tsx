import { Code, Link, ContactIcons } from "@/components"

/**
 * Apps Landing Page/
 * @returns {JSX.Element}
 */
export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<header>
				<h1
					className='
						text-6xl pb-4 text-neutral-100
						max-w-[522px]
						text-center sm:text-left
					'
				>Next.js Template</h1>
				<Link
					href="https://github.com/Brendan-Leighton"
					ariaLabel="Brendan Leighton's GitHub"
					className="block text-center min-[522px]:w-fit  min-[522px]:float-right"
				>by Brendan Leighton</Link>
			</header>
			<main
				className="
					flex flex-col gap-8 align-center
					bg-neutral-900
					rounded-md w-fit mx-auto
					p-8
				"
			>

				<h2 className="text-3xl">To Do:</h2>

				<ol className="list-decimal list-inside flex flex-col gap-4 w-fit">
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
					<li>Deploy on <Link href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" ariaLabel="Vercel">Vercel</Link></li>
					<li>Modify docs or remove features</li>
				</ol>

			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<ContactIcons />
			</footer>
		</div>
	)
}
