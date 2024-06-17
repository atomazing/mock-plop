import { http, HttpResponse } from 'msw'

// MOCK IMPORTS

const mockMainGet = http.get('/', () =>
	// Respond with a simple text message
	HttpResponse.text('Welcome to the homepage!'),
)

export const handlers = [
	mockMainGet,
	// MOCK EXPORTS
]
