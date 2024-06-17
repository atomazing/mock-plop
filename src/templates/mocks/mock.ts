import { http, delay, HttpResponse } from 'msw'

import { root } from '@constants/paths'

import { mockData } from './mockData'

const mock{{ name }}Post = http.post(`${root}{{ url }}`, async () => {
	const body = {}
	await delay(1000)
	return HttpResponse.json(body, { status: 200 })
})

const mock{{ name }}Get = http.get(`${root}{{ url }}`, async () => {
	await delay(1000)
	return HttpResponse.json(mockData, { status: 200 })
})

export const mock{{ name }} = [mock{{ name }}Post, mock{{ name }}Get]


