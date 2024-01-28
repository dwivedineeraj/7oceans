import React from 'react';
import { useAppSelector } from '@/redux/hooks';

const Stage = ({ stage }: {stage: Stage}) => {
  const leads = useAppSelector((state) => state.leadsSlice.leads);
  return (
    <div>
      <h1>{stage.name}</h1>
      {
        leads.filter((lead) => lead.stageId === stage.id).map((lead) => (
          <div key={lead.id}>
            <h2>{lead.name}</h2>
            <p>{lead.studentEmail}</p>
            <p>{lead.studentPhone}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Stage;
