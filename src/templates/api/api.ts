import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { root } from '@constants/paths'

import type { {{ properCase name }} } from '@models/{{ properCase name }}'

export const {{ camelCase name }}Api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: root }),
	tagTypes: ['{{ properCase name }}'],
	reducerPath: '{{ properCase name }}',
	endpoints: builder => ({
		get{{ properCase name }}: builder.query<{{ properCase name }}[], void>({
			query: () => ({
				url: `{{ url }}`,
				method: 'GET',
			}),
		}),
		post{{ properCase name }}: builder.mutation({
			query: () => ({
				url: '{{ url }}',
				method: 'POST',
				responseHandler: 'text',
			}),
		}),
	}),
})

export const {
    useGet{{ properCase name }}Query,
    usePost{{ properCase name }}Mutation
} = {{ camelCase name }}Api
