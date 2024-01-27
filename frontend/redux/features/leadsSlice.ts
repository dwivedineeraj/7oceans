import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type Lead from '../../types.d.ts'

type LeadsInfo = {
    leads: Lead[],
    pipelines: Pipeline[],
    subjects: string[],
    test: string
}

const initialState: LeadsInfo = {
    leads: [],
    pipelines: [],
    subjects: [],
    test: 'test'
}

export const leadsSlice = createApi({
    reducerPath: 'leadsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
        prepareHeaders(headers, {getState}) {
            headers.set('content-type', 'application/json')
            return headers
        },
    }),
    endpoints: (builder) => ({
        getLeads: builder.query<Lead[], void>({
            query: () => '/leads',
        }),
        getPipelines: builder.query<Pipeline[], void>({
            query: () => '/pipelines',
        }),
        getSubjects: builder.query<Subject[], void>({
            query: () => '/subjects',
        }),
    }),
})

export const {useGetLeadsQuery, useGetPipelinesQuery, useGetSubjectsQuery} = leadsSlice