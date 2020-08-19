import React from 'react';
import Checkbox from '../components/commons/checkBox';
import TextField from '../components/commons/textField';
import Textfield from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Card from '../components/commons/card';
import Btn from '../components/commons/button';

const marginStyle = {
  marginLeft: '260px',
};

const FundingApply1 = () => {
  const label = [
    '아니요. 다른 곳에서 유통한 적이 없으며 투명 펀딩을 통해 처음 선보이는 제품입니다.',
    '예, 다른 곳에서 유통한 적이 있습니다. 또는 현재 유통 중입니다.',
  ];

  const list = [
    '부가 서비스 이용 시, 추가 수수료가 발생될 수 있습니다.',
    '리워드가 없는 기부후원 프로젝트의 경우, 수수료가 다르게 적용됩니다.',
    '자세한 내용은와디즈 수수료 정책을 확인해주세요.',
  ];

  return (
    <div style={marginStyle}>
      <h1>기본 요건 페이지</h1>
      <p>
        Q1. 리워드가 타 크라우드펀딩사 및 온라인 커머스, 자사 홈페이지 등 다른
        판매처에서 유통된 적이 있거나 현재 유통 중인가요?
      </p>
      <Checkbox label={label}></Checkbox>
      <p>
        Q2. 현재까지 진행된 리워드의 준비 상태 및 앞으로의 계획을 구체적으로
        설명해주세요.
      </p>
      <FormHelperText>
        1) 리워드가 유형의 제품인 경우 제작 공정에 따른 현재 리워드의 제작 상태
        및 제조 시설명과 일일 최대 생산 가능량을 포함한 앞으로의 생산 계획을
        작성해주세요. <br></br>2) 공연, 영화, 전시 등 무형 서비스인 경우, 장소
        대관, 촬영 일정 등의 현재 준비 상태 및 앞으로의 계획을 작성해주세요.
      </FormHelperText>
      <Textfield
        id="outlined-full-width"
        style={{ margin: 8 }}
        placeholder="내용을 입력하세요"
        helperText="500자 남음"
        size="medium"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <p>Q3. 리워드의 전달 계획을 알려주세요.</p>
      <FormHelperText>
        1) 리워드의 전달 방법(택배 or SMS 등)을 입력하고, 리워드 제작 및 전달
        일정이 변동될 가능성이 있다면 사유를 알려주세요. <br></br>2) 발송 업체명
        및 일일 최대 발송 가능량을 입력해주세요. <br></br>3) 공연, 영화, 전시 등
        무형 서비스의 경우 좌석수, 일 최대 예약 가능 수량 등을 작성해주세요.
      </FormHelperText>
      <Textfield
        id="outlined-full-width"
        style={{ margin: 8 }}
        placeholder="내용을 입력하세요"
        helperText="500자 남음"
        size="medium"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <p>
        <b>수수료 정책 안내</b>
      </p>
      <Card head="리워드 기본 수수료는 7% (VAT별도)입니다." list={list}></Card>
      <Btn value="저장 하기"></Btn>
    </div>
  );
};

export default FundingApply1;
