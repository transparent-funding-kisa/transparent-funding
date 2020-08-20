import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Btn, { UploadButtons } from '../../components/commons/button';
import Select from '../../components/commons/select';
import Date from '../../components/commons/date';
import Cookies from 'universal-cookie';

const marginStyle = {
  marginLeft: '260px',
};

const FundingApply2 = () => {
  const cookies = new Cookies();
  const [name, setName] = useState(() => {
    if (cookies.get('name')) return cookies.get('name');
    return ' ';
  });
  const [money, setMoney] = useState(() => {
    if (cookies.get('money')) return cookies.get('money');
    return ' ';
  });

  const handleName = (e) => {
    console.log('hi!' + e.target.value);
    setName(e.target.value);
    cookies.set('name', e.target.value);
  };

  const handleMoney = (e) => {
    console.log('hi!' + e.target.value);
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
        helperText="40자 남음"
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
      <p>
        <b>카테고리</b>
      </p>
      <Select />
      <p>
        <b>프로젝트 종료일</b>
      </p>
      <Date />
      <Btn value="저장하기" />
    </div>
  );
};

export default FundingApply2;
