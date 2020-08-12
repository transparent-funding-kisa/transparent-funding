import React, { useState } from "react";
import Textfield from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Btn from "../components/commons/button";
import Modal from "../components/commons/modal";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import FundingApply3Story from "../views/FundingApply3Story";

const FundingApply3 = () => {
  const [open, setOpen] = useState(false);
  const handlebtnFade = (e) => {
    console.log(open);
    setOpen(!open);
  };
  return (
    <>
      <h1>스토리 작성</h1>
      <p>
        <b>프로젝트 요약</b>
      </p>
      <Textfield
        id="outlined-full-width"
        label="프로젝트 페이지 상단 및 지지서명 시 노출됩니다."
        style={{ margin: 8 }}
        placeholder="내용"
        helperText="100자 남음"
        size="medium"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />

      <p>
        <b>스토리 광고 심의 동의</b>
      </p>

      <Modal value="공통 표시·광고 가이드라인"></Modal>
      <Modal value="식품 표시·광고 가이드라인"></Modal>
      <Modal value="화장품 표시·광고 가이드라인"></Modal>
      <Modal value="건강보조기구 표시·광고 가이드라인"></Modal>
      <Button variant="contained" color="primary" onClick={handlebtnFade}>
        동의 하기
      </Button>
      <Fade in={open}>
        <div>
          <FundingApply3Story></FundingApply3Story>
        </div>
      </Fade>
    </>
  );
};

export default FundingApply3;
