import React from 'react';
import Stage from './stage'; // Assuming you have a Stage component


const StageList = ({ stages }: {stages: Stage[]}) => {
  return (
    <div>
      {stages.map((stage) => (
        <Stage key={stage.id} stage={stage} />
      ))}
    </div>
  );
};

export default StageList