import React, { useState } from 'react';
import FundingApplyMain from './FundingApplyMain';
import Drawer from '../../components/commons/drawer';
import FundingApplyRequirements from './FundingApplyRequirements';
import FundingApplyInformation from './FundingApplyInformation';
import FundingApplyStory from './FundingApplyStory';
import FundingApplyReward from './FundingApplyReward';
import Empty from '../Empty';

const FundingApply = (props) => {
  const [idx, setIdx] = useState(0);
  const [infomation, setInfomation] = useState(false);
  const [story, setStory] = useState(false);
  const [reward, setReward] = useState(false);
  const [infomationName, setInfomationName] = useState('');

  const [name, setName] = useState('');
  const [money, setMoney] = useState(10000);
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('가구');

  const [rewardName, setRewardName] = useState('');
  const [material, setMaterial] = useState('');
  const [color, setColor] = useState('');

  const [summary, setSummary] = useState('');
  const [storyContent, setStoryContent] = useState('');

  const Idx = parseInt(idx);

  function handleClick(value) {
    setIdx(parseInt(value));
    console.log(value);
  }

  const handleInfomation = (name, money, category, url, date) => {
    setIdx(0);
    setName(name);
    setMoney(money);
    setUrl(url);
    setCategory(category);
    setInfomation(!infomation);
    console.log('money' + money);
    console.log('url' + url);
  };

  function handleStory(summary, storyContent) {
    setIdx(0);
    setStory(!story);
    setSummary(summary);
    setStoryContent(storyContent);
  }

  function handleReward(rewardName, material, color) {
    setIdx(0);
    setReward(!reward);
    console.log(rewardName, material, color);
    setRewardName(rewardName);
    setMaterial(material);
    setColor(color);
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
            title={name}
            goal={money}
            imageUrl={url}
            content={summary}
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
