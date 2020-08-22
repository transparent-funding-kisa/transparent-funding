import React from 'react';
import Card from '@material-ui/core/Card';
import CardIcon from '../../components/commons/card';
import FundingApplyMain from './FundingApplyMain';
import Drawer from '../../components/commons/drawer';
import FundingApplyRequirements from './FundingApplyRequirements';
import FundingApplyInformation from './FundingApplyInformation';
import FundingApplyStory from './FundingApplyStory';
import FundingApplyReward from './FundingApplyReward';
import Button from '@material-ui/core/Button';
import Empty from '../Empty';

const FundingApply = (props) => {
  const [idx, setIdx] = React.useState(0);
  const [infomation, setInfomation] = React.useState(false);
  const [story, setStory] = React.useState(false);
  const [reward, setReward] = React.useState(false);
  const [infomationName, setInfomationName] = React.useState('');

  const Idx = parseInt(idx);

  function handleClick(value) {
    setIdx(parseInt(value));
    console.log(value);
  }

  const handleInfomation = (e) => {
    setIdx(0);
    console.log(e.target.value);
  };

  function handleInfomation2(name) {
    setIdx(0);
    setInfomation(!infomation);
    setInfomationName(name);
    console.log(name);
    console.log(infomationName);
    console.log(name.target);
  }

  function handleStory() {
    setIdx(0);
    setStory(!story);
  }

  function handleReward() {
    setIdx(0);
    setReward(!reward);
  }

  function renderSwitch(value) {
    switch (value) {
      case 0:
        return (
          <FundingApplyMain
            onClick={handleClick}
            info={infomation}
            story={story}
            reward={reward}
          />
        );
      case 1:
        return <FundingApplyRequirements />;
      case 2:
        return <FundingApplyInformation onClick={handleInfomation} />;
      case 3:
        return <FundingApplyStory onClick={handleStory} />;
      case 4:
        return <FundingApplyReward onClick={handleReward} />;
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
