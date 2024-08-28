import { baseApi } from '@api/baseApi'

import type { {{ properCase name }} } from '@models/{{ properCase name }}'

export const {{ camelCase name }}Api = baseApi.injectEndpoints({
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
