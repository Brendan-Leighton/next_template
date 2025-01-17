import { ContactIcons, GettingStarted, TemplateHeading } from "@/components"

/**
 * Apps Landing Page/
 * @returns {JSX.Element}
 */
export default function Home() {

	return (
		<div className="flex flex-col justify-center items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<header>
				<TemplateHeading />
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
