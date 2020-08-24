import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '../../components/commons/card';
import Modal from '@material-ui/core/Modal';
import FormDialog from './FormDialog';
import Fade from '@material-ui/core/Fade';
import Table from './FundingApplyRewardTable';
import useCookies from '../../hooks/useCookies';

const marginStyle = {
  marginLeft: '260px',
};

const FundingApply4 = (props) => {
  // const [category, setCategory] = React.useState('');
  // const [name, setName] = React.useState('');
  // const [material, setMaterial] = React.useState('');
  // const [color, setColor] = React.useState('');
  // const [open, setOpen] = React.useState('none');

  const [category, setCategory] = useCookies('category');
  const [rewardName, setRewardName] = useCookies('rewardName');
  const [material, setMaterial] = useCookies('material');
  const [color, setColor] = useCookies('color');
  const [open, setOpen] = useCookies('open');

  const list = [
    '정렬 순서 : 혜택이 높은 순으로 나오도록 정렬 순서를 등록하세요.',
    '제한 수량 : 생산 및 제공할 수 있는 리워드의 총 수량으로 해당 수량이 모두 펀딩되면 더 이상 펀딩 불가합니다.',
    '발송 시작일 : 프로젝트 종료일 이후부터 3개월 이내로 설계 가능합니다.',
    '옵션 조건 : 옵션(사이즈, 색상 등)이 필요한 경우, 옵션을 추가하세요. 옵션은 선택형과 직접 텍스트를 입력하는 직접 입력형으로 설계 가능합니다.',
  ];

  function test2(valueCategory, valueName, valueMaterial, valueColor) {
    setCategory(valueCategory);
    setRewardName(valueName);
    setMaterial(valueMaterial);
    setColor(valueColor);
    setOpen('block');
  }

  function test(valueName, valueMaterial, valueColor) {
    setRewardName(valueName);
    setMaterial(valueMaterial);
    setColor(valueColor);
    setOpen('block');
  }

  return (
    <div style={marginStyle}>
      <h1>리워드 설계</h1>
      <Card head="리워드 설계 조건" list={list}></Card>
      <br></br>
      <FormDialog onClick={test}></FormDialog>
      <br />
      <Fade in={open} style={{ display: open }}>
        <div>
          <Table name={rewardName} material={material} color={color}></Table>
        </div>
      </Fade>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.onClick(rewardName, material, color);
        }}
      >
        저장 하기
      </Button>
    </div>
  );
};

export default FundingApply4;
