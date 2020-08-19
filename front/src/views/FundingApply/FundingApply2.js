import React from 'react';
import TextField from '../../components/commons/textField';
import Textfield from '@material-ui/core/TextField';
import Btn, { UploadButtons } from '../../components/commons/button';
import Select from '../../components/commons/select';
import Date from '../../components/commons/date';

const marginStyle = {
  marginLeft: '260px',
};

const FundingApply2 = () => {
  return (
    <div style={marginStyle}>
      <h1>기본 정보 페이지</h1>
      <TextField />
      <Textfield
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
