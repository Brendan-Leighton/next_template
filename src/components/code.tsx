import React from 'react'

export function Code({ code }: { code: string }) {
	return (
		<pre
			className="font-mono bg-neutral-800 py-1 px-2 rounded my-2"
		>
			<code>
				{code}
			</code>
		</pre>
	)
}
