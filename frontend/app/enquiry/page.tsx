'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useGetLeadsQuery, useGetPipelinesQuery, useGetSubjectsQuery, setLeads, setPipelines, setSubjects }
  from '@/redux/features/leadsSlice'
import Loading from '../loading'
import PipelineList from './pipelinelist'
import StageList from './stagelist'
import { useAppDispatch} from '@/redux/hooks'

export default async function Students() {

  const [selectedNav, setSelectedNav] = useState({'type': 'pipeline', 'pipeline': '1'});
  let {data: leads = [], error: errorl, isLoading: isLoadingLeads} = useGetLeadsQuery();
  let {data: pipelines = [], error: errorp, isLoading: isLoadingPipelines} = useGetPipelinesQuery();
  let {data: subjects = [], error: errors, isLoading: isLoadingSubjects} = useGetSubjectsQuery();
  const dispatch = useAppDispatch();

  // Update the Redux store with the fetched data
  useEffect(() => {
    if (leads) {
      dispatch(setLeads(leads));
    }
    if (pipelines) {
      dispatch(setPipelines(pipelines));
    }
    if (subjects) {
      dispatch(setSubjects(subjects));
    }
  }, [leads, pipelines, subjects]);
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Enquiry</h1>
      <ul className="flex p-4 space-x-10 bg-black text-gray-500 overflow-scroll">
        <li>
          <button className="hover:underline" onClick={() => setSelectedNav({ 'type': 'pipeline', 'pipeline': '' })}>
            Pipelines
          </button>
        </li>
        <li>
          <button className="hover:underline" onClick={() => setSelectedNav({ 'type': 'leads', 'pipeline': '' })}>
            Leads
          </button>
        </li>
        <li>
          <button className="hover:underline" onClick={() => setSelectedNav({ 'type': 'tasks', 'pipeline': '' })}>
            Tasks
          </button>
        </li>
        <li>
          <button className="hover:underline" onClick={() => setSelectedNav({ 'type': 'guardians', 'pipeline': '' })}>
            Guardians
          </button>
        </li>
        <li>
          <button className="hover:underline" onClick={() => setSelectedNav({ 'type': 'notifications', 'pipeline': '' })}>
            Notifications
          </button>
        </li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedNav.type === 'pipeline' && (
          <>
            {isLoadingPipelines ? (
              <Loading />
            ) : errorp ? (
              <div>Error</div>
            ) : (
              <><PipelineList pipelines={pipelines} setSelectedNav={setSelectedNav}/>
              {pipelines
                .filter((pipeline) => pipeline.id === selectedNav.pipeline)
                .map((pipeline) => (
                  <StageList key={pipeline.id} stages={pipeline.stages} />
              ))}
              </>
            )}
          </>
        )}
        {selectedNav.type === 'leads' && (
          <>
            {isLoadingLeads ? (
              <Loading />
            ) : errorl ? (
              <div>Error</div>
            ) : (
              <>fine</>
            )}
          </>
        )}
        {selectedNav.type === 'tasks' && (
          <>
            {isLoadingLeads ? (
              <Loading />
            ) : errorl ? (
              <div>Error</div>
            ) : (
              <>fine</>
            )}
          </>
        )}
        {selectedNav.type === 'guardians' && (
          <>
            {isLoadingLeads ? (
              <Loading />
            ) : errorl ? (
              <div>Error</div>
            ) : (
              <>fine</>
            )}
          </>
        )}
        {selectedNav.type === 'notifications' && (
          <>
            {isLoadingPipelines ? (
              <Loading />
            ) : errorl ? (
              <div>Error</div>
            ) : (
              <>fine</>
            )}
          </>
        )}
      </div>
    </div>
  );
}
