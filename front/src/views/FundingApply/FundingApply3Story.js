import React from 'react';
import Textfield from '@material-ui/core/TextField';
const FundingApply3Story = () => {
  return (
    <>
      <h1>프로젝트 스토리</h1>
      <p>
        프로젝트 스토리 진정성 있고 매력적인 스토리로 서포터의 마음을
        움직여볼까요? 스토리 필수 항목을 누락할 경우 오픈이 지연될 수 있으며, 제
        3자의 지식재산권을 침해할 경우 프로젝트가 중단/취소될 수 있습니다.
      </p>

      <Textfield
        id="outlined-full-width"
        style={{ margin: 8 }}
        placeholder="내용을 입력하세요."
        helperText="1000자 남음"
        size="medium"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
    </>
  );
};

export default FundingApply3Story;
