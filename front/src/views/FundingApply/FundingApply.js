import React from 'react';
import Card from '@material-ui/core/Card';
import CardIcon from '../../components/commons/card';
import Accordion from '../../components/commons/accordion';
import Drawer from '../../components/commons/drawer';
import FundingApply1 from './FundingApplyRequirements';
import FundingApply2 from './FundingApplyInformation';
import FundingApply3 from './FundingApplyStory';
import FundingApply4 from './FundingApplyReward';
import Empty from '../Empty';
const FundingApply = (props) => {
  const [idx, setIdx] = React.useState(0);
  const Idx = parseInt(idx);

  function handleClick(value) {
    setIdx(parseInt(value));
    console.log(value);
  }

  function renderSwitch(value) {
    switch (value) {
      case 0:
        return <Accordion onClick={handleClick} />;
      case 1:
        return <FundingApply1 />;
      case 2:
        return <FundingApply2 />;
      case 3:
        return <FundingApply3 />;
      case 4:
        return <FundingApply4 />;
      case 5:
        return <Empty />;
      case 6:
        return <Empty />;
      case 7:
        return <Empty />;
    }
  }

  return (
    <>
      <Drawer value={props.match.params.Id} onClick={handleClick}></Drawer>
      {renderSwitch(Idx)}
    </>
  );
};

export default FundingApply;
