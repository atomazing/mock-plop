import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
	reducerPath: 'name-of-domain',
	baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
	endpoints: () => ({
		// Base endpoints can be defined here
	}),
})
