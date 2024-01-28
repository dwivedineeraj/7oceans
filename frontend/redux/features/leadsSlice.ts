import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the initial state
type LeadsInfo = {
  leads: Lead[];
  pipelines: Pipeline[];
  subjects: Subject[];
  test: string;
};

const initialState: LeadsInfo = {
  leads: [],
  pipelines: [],
  subjects: [],
  test: 'test',
};

// Create the API using createApi
export const leadsApi = createApi({
  reducerPath: 'leadsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
    prepareHeaders(headers, { getState }) {
      headers.set('content-type', 'application/json');
      return headers;
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
});

// Export the generated hooks for each query
export const {
  useGetLeadsQuery,
  useGetPipelinesQuery,
  useGetSubjectsQuery,
} = leadsApi;

// Create a slice to manage the state
export const leadsSlice = createSlice({
  name: 'leadsSlice',
  initialState,
  reducers: {
    setLeads: (state, action: PayloadAction<Lead[]>) => {
      state.leads = action.payload;
    },
    setPipelines: (state, action: PayloadAction<Pipeline[]>) => {
      state.pipelines = action.payload;
    },
    setSubjects: (state, action: PayloadAction<Subject[]>) => {
      state.subjects = action.payload;
    },
  },
});

// Export the actions
export const { setLeads, setPipelines, setSubjects } = leadsSlice.actions;
