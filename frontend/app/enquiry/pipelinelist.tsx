import React from 'react';
import { useAppSelector } from '@/redux/hooks';

export default function PipelineList({pipelines, setSelectedNav}: {pipelines: Pipeline[], setSelectedNav: any}) {
  return (
    <div>
      <h1>Pipeline List</h1>
      <ul>
        {pipelines.map((pipeline) => (
          <li key={pipeline.id}><button onClick={setSelectedNav({'type': 'pipeline', 'pipeline': pipeline.id})}>{pipeline.name}</button></li>
        ))}
      </ul>
    </div>
  );
};