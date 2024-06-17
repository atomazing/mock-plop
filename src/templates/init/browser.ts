import { setupWorker } from 'msw/browser'

import { handlers } from './handlers/handlers'

import type { SharedOptions } from 'msw'

export const worker = setupWorker(...handlers)

export const onUnhandledRequest: SharedOptions['onUnhandledRequest'] = (req, print) => {
	const excludedExtensions = [
		'.woff2',
		'.css',
		'.tsx',
		'.ts',
		'.js',
		'.png',
		'.otf',
		'.ttf',
		'.woff',
	]
	const isExcluded = excludedExtensions.some(extension =>
		new URL(req?.url).pathname.endsWith(extension),
	)
	if (isExcluded) {
		return
	}
	print.warning()
}
