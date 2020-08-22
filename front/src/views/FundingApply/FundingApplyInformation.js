import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Btn, { UploadButtons } from '../../components/commons/button';
import Select from '../../components/commons/select';
import Date from '../../components/commons/date';
import Cookies from 'universal-cookie';
import Button from '@material-ui/core/Button';
import FundingApply from './FundingApply';

const marginStyle = {
  marginLeft: '260px',
};

function valueText(name, money, category, date) {
  return alert('test');
}

const FundingApply2 = (props) => {
  const cookies = new Cookies();
  const [category, setCategory] = React.useState(() => {
    if (cookies.get('category')) return cookies.get('category');
    return '';
  });

  const [name, setName] = useState(() => {
    if (cookies.get('name')) return cookies.get('name');
    return '';
  });
  const [money, setMoney] = useState(() => {
    if (cookies.get('money')) return cookies.get('money');
    return '';
  });

  const handleCategory = (e) => {
    cookies.set('category', e.target.value);
    setCategory(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
    cookies.set('name', e.target.value);
  };

  const handleMoney = (e) => {
    setMoney(e.target.value);
    cookies.set('money', e.target.value);
  };

  return (
    <div style={marginStyle}>
      <h1>기본 정보 페이지</h1>

      <TextField
        id="outlined-full-width"
        label="프로젝트 제목"
        style={{ margin: 8 }}
        placeholder="제목 입력"
        helperText={40 - name.length + '자 남음'}
        size="medium"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        defaultValue={name}
        onChange={handleName}
      />

      <TextField
        id="outlined-full-width"
        label="목표 금액"
        style={{ margin: 8 }}
        placeholder="목표 금액 입력"
        helperText="최소 1만 원 ~ 최대 1억 원으로 설정하세요."
        size="medium"
        // fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        defaultValue={money}
        onChange={handleMoney}
      />
      <p>
        <b>대표 이미지</b>
      </p>
      <UploadButtons />

      <TextField
        id="outlined-full-width"
        label="url"
        style={{ margin: 8 }}
        helperText="3MB 이하의 JPEG, PNG 파일 사이즈 : 1200X675 픽셀 이상 텍스트 및 로고
        삽입 금지"
        size="medium"
        placeholder="예시 : https://ibb.co/0D3K4Mf"
        // fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        defaultValue={money}
        onChange={handleMoney}
      />
      <p>
        <b>카테고리</b>
      </p>
      <Select onChange={handleCategory} />
      <p>
        <b>프로젝트 종료일</b>
      </p>
      <Date />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          props.onClick(e);
        }}
      >
        저장 하기
      </Button>
    </div>
  );
};

export default FundingApply2;
