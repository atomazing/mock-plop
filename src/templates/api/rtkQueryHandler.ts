import { isRejectedWithValue } from '@reduxjs/toolkit'

import type { Middleware } from '@reduxjs/toolkit'

export const rtkQueryHandler: Middleware = () => next => action => {
	if (isRejectedWithValue(action)) {
		const payload = action.payload as { status?: number }

		if (payload && (payload.status === 500 || payload.status === 400)) {
			// eslint-disable-next-line no-console -- Временно
			console.log('Error')
		}
	}
	return next(action)
}
