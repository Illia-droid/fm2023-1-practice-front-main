import React from 'react';
import StepItem from './StepItem';

import dataStepItem from './dataStepItem.json';

const HowDoNameContestWork = () => {
  const renderStepItems = (item, i) => <StepItem key={i} item={item} />;
  return (
    <>
      <h2>How Do Name Contest Work?</h2>
      {dataStepItem.map(renderStepItems)}
    </>
  );
};

export default HowDoNameContestWork;
